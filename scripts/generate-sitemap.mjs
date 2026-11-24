import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const siteUrl = 'https://wowtoolbar.com';
const toolsDirectory = new URL('../src/tools/', import.meta.url);
const publicDirectory = new URL('../public/', import.meta.url);
const staticRoutes = ['/', '/about', '/support', '/privacy', '/terms', '/cookies', '/contact'];

async function collectToolRoutes(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    const entryPath = join(directory.pathname, entry.name);

    if (entry.isDirectory()) {
      routes.push(...await collectToolRoutes(new URL(`file://${entryPath}/`)));
      continue;
    }

    if (entry.name !== 'index.ts')
      continue;

    const source = await readFile(entryPath, 'utf8');
    const match = source.match(/\bpath:\s*['"](\/[^'"]+)['"]/);

    if (match)
      routes.push(match[1]);
  }

  return routes;
}

const toolRoutes = await collectToolRoutes(toolsDirectory);
const routes = [...new Set([...staticRoutes, ...toolRoutes])].sort();
const today = new Date().toISOString().slice(0, 10);
const urlEntries = routes
  .map(route => `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

await writeFile(new URL('sitemap.xml', publicDirectory), sitemap, 'utf8');
console.log(`Generated sitemap.xml with ${routes.length} URLs.`);
