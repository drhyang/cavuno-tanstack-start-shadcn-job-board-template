import { searchNumber } from '@/lib/pagination';
import type { RelatedSearch } from '@cavuno/board';

export type TaxonomyTermForTiles = {
  canonicalSlug: string;
  displayName: string;
  jobCount?: unknown;
};

/**
 * The 15 top-level academic subject areas shown on the Jobs.ac.cn homepage.
 * Matching on `canonicalSlug` keeps this list stable across Cavuno ID changes
 * and readable next to the `taxonomy` keys in messages/{en,zh-cn}.json.
 */
const TOP_SUBJECT_SLUGS = new Set([
  'architecture-and-design',
  'arts',
  'business',
  'communication',
  'computing',
  'education',
  'engineering',
  'humanities',
  'interdisciplinary-studies',
  'law-and-legal-studies',
  'life-sciences',
  'management-admin-and-support',
  'medicine-and-health',
  'physical-sciences-and-mathematics',
  'social-sciences',
]);

export function topCategoriesFromTaxonomy(
  terms: ReadonlyArray<TaxonomyTermForTiles> | undefined,
): RelatedSearch[] | null {
  if (!terms || terms.length === 0) return null;
  const tiles: RelatedSearch[] = [];
  for (const term of terms) {
    if (!TOP_SUBJECT_SLUGS.has(term.canonicalSlug)) continue;
    const jobCount = searchNumber(term.jobCount);
    if (jobCount === undefined) return null;
    tiles.push({
      type: 'category',
      slug: term.canonicalSlug,
      term: term.displayName,
      count: jobCount,
    });
  }
  const LAST_SLUG = 'management-admin-and-support';
  return tiles.sort((a, b) => {
    if (a.slug === LAST_SLUG) return 1;
    if (b.slug === LAST_SLUG) return -1;
    return a.term.localeCompare(b.term);
  });
}
