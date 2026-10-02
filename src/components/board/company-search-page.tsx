'use client';
import { companyMarketPath } from '@cavuno/board/paths';
import { Link, useLocation } from '@tanstack/react-router';
import { Building2 } from 'lucide-react';

import { m } from '../../paraglide/messages';
import { getLocale } from '../../paraglide/runtime';
import { ListingAdResults } from './listing-ad-results';

import type { CompanyCardVM } from '@/board/company-view-model';
import type { BreadcrumbData } from '@/components/board/breadcrumb';
import {
  CompanyFilters,
  type CompanyCustomFilters,
} from '@/components/board/company-filters';
import { CompanySearchResult } from '@/components/board/company-search-result';
import {
  useListingAdRails,
  type AdPlacement,
} from '@/components/board/listing-ad-rail';
import { ListingPagination } from '@/components/board/listing-pagination';
import { Box } from '@/components/layout/box';
import { Page } from '@/components/layout/page';
import {
  SearchResultsLayout,
  SearchResultsList,
  SearchResultsToolbar,
} from '@/components/search-results/search-results';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { ADS_OFF, type BoardAdsConfig } from '@/lib/board-ads';
import { entityCount } from '@/lib/entity-count';
import { clampPage, listingPageHref } from '@/lib/pagination';
import { chromeEntity } from '@/lib/site-chrome';

export function CompanySearchPage({
  companies,
  count,
  page: requestedPage,
  pageSize,
  heading,
  breadcrumb,
  query,
  searchUnavailable = false,
  markets,
  customFilters,
  onPageChange,
  // Kept for API compatibility; page now renders a single-pane layout.
  selectedCompany: _selectedCompany,
  onSelectedCompanyReplace: _onSelectedCompanyReplace,
  onSelectedCompanyPush: _onSelectedCompanyPush,
  detail: _detail,
  startAd,
  endAd,
  ads = ADS_OFF,
}: {
  companies: CompanyCardVM[];
  count: number;
  page: number;
  pageSize: number;
  heading?: string;
  breadcrumb?: BreadcrumbData;
  query?: string;
  searchUnavailable?: boolean;
  markets: Array<{ slug: string; name: string }>;
  /** Public company profile fields for the "All filters" sheet; omit for none. */
  customFilters?: CompanyCustomFilters;
  onPageChange: (page: number) => void;
  selectedCompany?: string;
  onSelectedCompanyReplace: (companySlug: string) => void;
  onSelectedCompanyPush: (companySlug: string) => void;
  detail: React.ReactNode;
  startAd?: AdPlacement;
  endAd?: AdPlacement;
  ads?: BoardAdsConfig;
}) {
  // The loader served the last API-reachable page for anything deeper, so
  // the range label, the active page and Next/Previous must agree with it.
  const page = clampPage(requestedPage, pageSize);
  const rails = useListingAdRails(ads, startAd, endAd);
  const currentHref = useLocation({ select: (location) => location.href });
  const hasCustomFilters = Boolean(customFilters?.active.length);
  const hasActiveSearch = Boolean(query || breadcrumb || hasCustomFilters);
  const companyVms = companies;
  const locale = getLocale();
  const resultCountLabel = entityCount(count, locale, m.count_companies, {
    singular: chromeEntity().companySingular,
    plural: chromeEntity().companyPlural,
  });
  // Both browse and free-text search are offset-paginated with a total `count`,
  // so the description line always renders the exact "Showing X–Y of N" range —
  // the same honest range as the jobs results header.
  const resultDescription =
    count > 0
      ? m.companySearch_resultsShowingRange({
          from: ((page - 1) * pageSize + 1).toLocaleString(locale),
          to: Math.min(page * pageSize, count).toLocaleString(locale),
          count: count.toLocaleString(locale),
        })
      : null;
  const resultsBar = (
    <div data-slot="company-results-bar" className="pb-3">
      <h1 className="text-foreground text-lg font-semibold tracking-tight">
        {resultCountLabel}
      </h1>
      {resultDescription ? (
        <p className="text-muted-foreground text-xs">{resultDescription}</p>
      ) : null}
    </div>
  );
  const marketsSidebar =
    markets.length > 0 ? (
      <aside
        aria-label={m.companiesIndex_browseByMarketHeading()}
        className="hidden md:block"
      >
        <div className="space-y-3">
          <h2 className="text-sm font-semibold">
            {m.companiesIndex_browseByMarketHeading()}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {markets.map((market) => (
              <Badge
                key={market.slug}
                variant="outline"
                render={<Link to={companyMarketPath(market.slug)} />}
              >
                {market.name}
              </Badge>
            ))}
          </div>
        </div>
      </aside>
    ) : null;
  return (
    <Page width="wide" fill>
      <main
        data-layout="company-search-page"
        className="md:flex md:h-full md:min-h-0 md:flex-col"
      >
        {customFilters?.fields.length ? (
          <Box border="bottom">
            <SearchResultsToolbar startAd={rails.startAd} endAd={rails.endAd}>
              <CompanyFilters {...customFilters} />
            </SearchResultsToolbar>
          </Box>
        ) : null}
        <div
          data-slot="company-search-viewport"
          className="min-w-0 overflow-x-clip md:flex md:min-h-0 md:flex-1 md:overflow-hidden"
        >
          {companyVms.length === 0 ? (
            <SearchResultsLayout
              startAd={rails.startAd}
              endAd={rails.endAd}
              list={
                <div className="space-y-4 px-4 pt-4 pb-4 md:col-span-2 md:px-0">
                  {searchUnavailable ? null : (
                    <div className="space-y-4">{resultsBar}</div>
                  )}
                  <Empty className="min-h-[calc(100dvh-16rem)] border-0">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <Building2 aria-hidden="true" />
                      </EmptyMedia>
                      <EmptyTitle>
                        {searchUnavailable
                          ? m.companySearch_unavailableTitle()
                          : (heading ?? m.companiesIndex_metaTitle())}
                      </EmptyTitle>
                      <EmptyDescription>
                        {searchUnavailable
                          ? m.companySearch_unavailableDescription()
                          : query
                            ? m.companiesIndex_noMatchText({ query })
                            : hasCustomFilters
                              ? m.companiesIndex_filterNoMatchText()
                              : m.companiesIndex_emptyText()}
                      </EmptyDescription>
                    </EmptyHeader>
                    {hasActiveSearch && !searchUnavailable ? (
                      <EmptyContent>
                        <Link to="/companies" className={buttonVariants()}>
                          {m.jobSearch_resetFiltersAction()}
                        </Link>
                      </EmptyContent>
                    ) : null}
                  </Empty>
                </div>
              }
              detail={null}
            />
          ) : (
            <SearchResultsLayout
              reverse
              startAd={rails.startAd}
              endAd={rails.endAd}
              list={
                <SearchResultsList
                  label={m.companySearch_resultsRegionLabel()}
                  scrollRestorationId="companies-search-results"
                >
                  <div className="space-y-4">{resultsBar}</div>

                  <ListingAdResults ads={ads}>
                    {companyVms.map((vm) => (
                      <div key={vm.id}>
                        <CompanySearchResult vm={vm} />
                      </div>
                    ))}
                  </ListingAdResults>

                  <ListingPagination
                    compact
                    page={page}
                    count={count}
                    pageSize={pageSize}
                    hrefForPage={(nextPage) =>
                      listingPageHref(currentHref, nextPage, [
                        'selectedCompany',
                      ])
                    }
                    onPageChange={onPageChange}
                  />

                  {markets.length > 0 ? (
                    <section
                      aria-label={m.companiesIndex_browseByMarketHeading()}
                      className="border-border space-y-3 border-t pt-4"
                    >
                      <h2 className="text-sm font-semibold">
                        {m.companiesIndex_browseByMarketHeading()}
                      </h2>
                      <div className="flex flex-wrap gap-1.5">
                        {markets.map((market) => (
                          <Badge
                            key={market.slug}
                            variant="outline"
                            render={
                              <Link to={companyMarketPath(market.slug)} />
                            }
                          >
                            {market.name}
                          </Badge>
                        ))}
                      </div>
                    </section>
                  ) : null}
                </SearchResultsList>
              }
              detail={marketsSidebar}
            />
          )}
        </div>
      </main>
    </Page>
  );
}
