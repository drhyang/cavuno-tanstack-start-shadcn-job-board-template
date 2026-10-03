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
        className="hidden min-w-0 lg:sticky lg:top-20 lg:mt-20 lg:block lg:w-[340px] lg:shrink-0 lg:self-start"
        aria-label={m.companiesIndex_browseByMarketHeading()}
      >
          <div className="border-border rounded-lg border p-5">
          <h2 className="mb-3 text-sm font-semibold">
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
    <Page width="wide">
      <main data-layout="company-search-page">
        {customFilters?.fields.length ? (
          <Box border="bottom">
            <SearchResultsToolbar startAd={rails.startAd} endAd={rails.endAd}>
              <CompanyFilters {...customFilters} />
            </SearchResultsToolbar>
          </Box>
        ) : null}
        <div className="mx-auto w-full max-w-[calc(var(--layout-width)+4rem)] px-4 py-8 md:px-8">
          {/*
            Single-pane layout: wide company list on the left, narrow markets
            sidebar on the right. The page scrolls as a whole; the sidebar is
            sticky so it stays in view while the list scrolls past. Kept
            inline so the upstream SearchResultsLayout file stays untouched.
          */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            {/* Left column: company list. Scrolls with the page. */}
            <div className="min-w-0 flex-1">
              {companyVms.length === 0 ? (
                <div className="space-y-4">
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
              ) : (
                <SearchResultsList
                  label={m.companySearch_resultsRegionLabel()}
                  scrollRestorationId="companies-search-results"
                  className="md:h-auto md:min-h-0 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                      listingPageHref(currentHref, nextPage)
                    }
                    onPageChange={onPageChange}
                  />
                </SearchResultsList>
              )}
            </div>

            {/* Right column: markets sidebar. Sticky while page scrolls. */}
            {marketsSidebar}
          </div>
        </div>
      </main>
    </Page>
  );
}