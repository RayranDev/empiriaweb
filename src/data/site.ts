/**
 * Centralized site URL helper.
 * Uses process.env.NEXT_PUBLIC_SITE_URL or falls back to official production domain.
 */
export const getSiteUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, "");
  }
  return "https://centroterapeuticoempiria.com";
};
