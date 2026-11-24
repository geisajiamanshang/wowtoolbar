<template>
  <footer class="site-footer" aria-label="Website information">
    <div class="footer-brand">WOW/</div>
    <nav aria-label="Legal and support links">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/privacy">Privacy</RouterLink>
      <RouterLink to="/terms">Terms</RouterLink>
      <RouterLink to="/cookies">Cookies</RouterLink>
      <RouterLink to="/support">Support</RouterLink>
    </nav>
    <p>Fast, focused utilities. Most processing stays in your browser.</p>
  </footer>
</template>

<style scoped lang="less">
.site-footer {
  width: min(920px, calc(100% - 36px));
  margin: 72px auto 0;
  padding: 28px 0 36px;
  border-top: 1px solid #203036;
  color: #789097;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;

  .footer-brand {
    margin-bottom: 14px;
    color: #eafff8;
    font-weight: 700;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
  }

  a {
    color: #9bb0b4;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      color: #46f0b4;
    }
  }

  p {
    margin: 14px 0 0;
    line-height: 1.6;
  }
}
</style>
