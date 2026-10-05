/**
 * Location display names localized for zh-CN and zh-HK.
 *
 * SEO-only: used to build Chinese <title> and <meta description> on the
 * /jobs/locations/* surfaces. The visible page body, cards, and breadcrumb
 * keep the API's original English copy.
 *
 * Data lives in two sibling JSON files under `data/`. Missing entries fall
 * back to the API's English value, so partial coverage is safe.
 *
 * Server-only: never import this from a client component or route.
 */
import { getLocale } from '@/paraglide/runtime';

import zhCnData from './data/location-zh-cn.json';
import zhHkData from './data/location-zh-hk.json';

type Table = Record<string, string>;

const ZH_CN = zhCnData as Table;
const ZH_HK = zhHkData as Table;

function pickTable(): Table | null {
  const locale: string = getLocale();
  if (locale === 'zh-cn') return ZH_CN;
  if (locale === 'zh-hk') return ZH_HK;
  return null;
}

/** Chinese display name for a location slug, or `fallback` if none exists. */
export function zhLocationName(
  slug: string | null | undefined,
  fallback: string,
): string {
  if (!slug) return fallback;
  const table = pickTable();
  if (!table) return fallback;
  return table[slug] ?? fallback;
}
