export interface SupportTier {
  amount: string;
  label: string;
  description: string;
  url?: string;
}

export interface AffiliatePartner {
  name: string;
  description: string;
  url: string;
}

export const supportTiers: SupportTier[] = [
  {
    amount: import.meta.env.VITE_SUPPORT_AMOUNT_1 || '20',
    label: 'Coffee',
    description: 'A small boost for the next useful tool.',
    url: import.meta.env.VITE_SUPPORT_URL_1,
  },
  {
    amount: import.meta.env.VITE_SUPPORT_AMOUNT_2 || '68',
    label: 'Build fuel',
    description: 'Help fund maintenance and new utilities.',
    url: import.meta.env.VITE_SUPPORT_URL_2,
  },
  {
    amount: import.meta.env.VITE_SUPPORT_AMOUNT_3 || '168',
    label: 'Studio backer',
    description: 'Keep WowToolbar fast, private, and independent.',
    url: import.meta.env.VITE_SUPPORT_URL_3,
  },
];

export const supportCurrency = import.meta.env.VITE_SUPPORT_CURRENCY || '¥';

export const enterpriseSponsorUrl = import.meta.env.VITE_ENTERPRISE_SPONSOR_URL;

export const affiliatePartners: AffiliatePartner[] = [
  {
    name: 'Cloud hosting',
    description: 'Infrastructure selected for developer-friendly deployment.',
    url: import.meta.env.VITE_AFFILIATE_CLOUD_URL,
  },
  {
    name: 'Domains',
    description: 'Domain services for launching your next project.',
    url: import.meta.env.VITE_AFFILIATE_DOMAIN_URL,
  },
  {
    name: 'Developer APIs',
    description: 'APIs and services that save development time.',
    url: import.meta.env.VITE_AFFILIATE_API_URL,
  },
  {
    name: 'Password manager',
    description: 'Security tools for developers and small teams.',
    url: import.meta.env.VITE_AFFILIATE_SECURITY_URL,
  },
].filter((partner): partner is AffiliatePartner => Boolean(partner.url));
