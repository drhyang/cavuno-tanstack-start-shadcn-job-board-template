/**
 * Company display names and summaries localized for zh-CN and zh-HK.
 *
 * SEO-only: this module is used to build Chinese <title>, <meta description>,
 * and Organization JSON-LD on the company detail page. The visible page body,
 * cards, breadcrumb, and other UI keep the API's original English copy — we
 * only touch fields that search engines index.
 *
 * Data lives in two sibling JSON files under `data/`. Add new companies at
 * the end of those files. A missing entry falls back to the API's English
 * value, so partial coverage is safe.
 *
 * Server-only: never import this module from a client component, route, or
 * anything reachable from the browser entry.
 */
import { getLocale } from '@/paraglide/runtime';

import zhCnData from './data/company-zh-cn.json';
import zhHkData from './data/company-zh-hk.json';

type Entry = { name?: string; summary?: string };
type Table = Record<string, Entry>;

// SAFETY: Vite inlines the JSON as a plain object literal; the shape is
// enforced by the type alias because JSON files cannot carry a type annotation.
const ZH_CN = zhCnData as Table;
const ZH_HK = zhHkData as Table;

function pickTable(): Table {
  const locale: string = getLocale();
  return locale === 'zh-hk' ? ZH_HK : ZH_CN;
}

export function zhCompanyName(
  slug: string | null | undefined,
  fallback: string,
): string {
  if (!slug) return fallback;
  return pickTable()[slug]?.name ?? fallback;
}

export function zhCompanySummary(
  slug: string | null | undefined,
  fallback: string | null | undefined,
): string | null {
  if (!slug) return fallback ?? null;
  return pickTable()[slug]?.summary ?? fallback ?? null;
}