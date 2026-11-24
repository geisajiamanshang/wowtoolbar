/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  VITE_PLAUSIBLE_API_HOST: string;
  VITE_PLAUSIBLE_DOMAIN: string;
  VITE_SUPPORT_URL_1?: string;
  VITE_SUPPORT_URL_2?: string;
  VITE_SUPPORT_URL_3?: string;
  VITE_SUPPORT_CURRENCY?: string;
  VITE_SUPPORT_AMOUNT_1?: string;
  VITE_SUPPORT_AMOUNT_2?: string;
  VITE_SUPPORT_AMOUNT_3?: string;
  VITE_ENTERPRISE_SPONSOR_URL?: string;
  VITE_AFFILIATE_CLOUD_URL?: string;
  VITE_AFFILIATE_DOMAIN_URL?: string;
  VITE_AFFILIATE_API_URL?: string;
  VITE_AFFILIATE_SECURITY_URL?: string;
  PACKAGE_VERSION: string;
  GIT_SHORT_SHA: string;
  PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
