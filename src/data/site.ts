/**
 * Centralized site URL helper.
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — explicit override, set this once a custom domain is live.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — Vercel system env var, available at build time;
 *    it automatically becomes the custom domain once one is attached to the project.
 * 3. `https://empiriaweb.vercel.app` — known-good Vercel fallback (no custom domain owned yet).
 */
export const getSiteUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, "");
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl && vercelUrl.trim().length > 0) {
    return `https://${vercelUrl.trim()}`.replace(/\/+$/, "");
  }

  return "https://empiriaweb.vercel.app";
};
