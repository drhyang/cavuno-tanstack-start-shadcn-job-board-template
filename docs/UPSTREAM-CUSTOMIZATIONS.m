# Upstream Customisations

This file tracks local Jobs.ac.cn changes that need special care when syncing with `origin/main`.

## Merge rules

- **Do not overwrite a listed file wholesale without reviewing its diff.** Merge local changes with new upstream functionality.
- Keep existing translations, Chinese localisation, site content, branding and deployment settings unless intentionally changed.
- When adding English message keys, add corresponding Chinese translations in `messages/zh-cn.json`.
- For localisation changes, review related routes, server helpers and data files together.
- After merging, inspect `git diff`, run relevant tests and `pnpm typecheck`. Update this list when customisations change.

## Files to review

**Translations**
- `project.inlang/settings.json`
- `messages/en.json`
- `messages/zh-cn.json` *(local-only)*

**Branding, layout and employer workflow**
- `public/QRCode.png` *(local-only)*
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/board/home-landing.tsx`
- `src/components/employer-job-form.tsx`
- `src/components/language-switcher.tsx`
- `src/components/marketing/dither-canvas.tsx`
- `src/routes/contact.tsx`
- `src/server/home-copy.ts`
- `src/server/home-page.ts`

**Plans and categories**
- `src/board/plan-benefits.ts` — custom attribute translation mapping
- `src/board/plan-labels.ts` — plan label translation mapping
- `src/board/top-categories.ts`

**Legal content and HTML**
- `src/content/legal/about.json`
- `src/content/legal/cookie-policy.json`
- `src/content/legal/privacy-policy.json`
- `src/content/legal/terms-of-service.json`
- `src/content/legal/render.ts` — preserve allowed `class` attributes without weakening sanitisation

**Routes and SEO**
- `src/lib/job-og.ts`
- `src/routes/-home-page.tsx`
- `src/routes/companies.index.tsx`
- `src/routes/jobs.$keyword.tsx` — taxonomy localisation and special category heading
- `src/routes/jobs.locations.$location.$keyword.tsx`
- `src/routes/jobs.locations.index.tsx`
- `src/server/companies-pages.ts`
- `src/server/jobs-listing-pages.ts` — Chinese location/category names and locale-aware SEO

**Chinese company and location data**
- `src/server/company-zh.ts` *(local-only)*
- `src/server/location-zh.ts` *(local-only)*
- `src/server/data/company-zh-cn.json` *(local-only)*
- `src/server/data/company-zh-hk.json` *(local-only)*
- `src/server/data/location-zh-cn.json` *(local-only)*
- `src/server/data/location-zh-hk.json` *(local-only)*

**Deployment**
- `wrangler.jsonc` — check environment-specific settings and bindings before merging.

## Quick review commands

```bash
git fetch origin
git diff --name-status origin/main
git diff origin/main -- path/to/file
git status --short
```

The list is a review aid, not a rule to reject upstream changes. Keep useful upstream fixes and merge them with the local customisations.

