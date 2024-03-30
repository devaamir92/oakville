import React, { Suspense } from 'react';

import type { Metadata } from 'next';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Mapbox from '@components/Mapbox';

import Property from '@components/Properties';
import { Desktop, Mobile } from '@components/ua';
import Footer from '@components/Footer';
import Tabbar from '@components/Tabbar';
import { getProperties } from '@lib/api/properties/getProperties';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
    page?: string;
    min?: string;
    max?: string;
    type?: any;
    bedrooms?: any;
    bathrooms?: any;
    basement?: any;
    sort?: any;
  };
}

export const metadata: Metadata = {
  title: 'Discover Best Homes for Rent in The Preserve Oakville',
  description:
    'Browse our listings for homes for rent in The Preserve Oakville neighbourhood. Find luxury properties and homes for rent - Start your search today.',
};

const Page: React.FC<PageProps> = async (searchParams: any) => {
  const rows = await getProperties({
    limit: 1000,
    page: Number(searchParams?.searchParams.page ?? 1) ?? 1,
    max: Number(searchParams?.searchParams.max ?? 25000000),
    min: Number(searchParams?.searchParams.min ?? 0),
    type: searchParams?.searchParams.type,
    bedrooms: searchParams?.searchParams.bedrooms,
    bathrooms: searchParams?.searchParams.bathrooms,
    basement: searchParams?.searchParams.basement,
    sort: searchParams?.searchParams.sort,
    neighborhood: searchParams.params.neighbourhood.split('-').join(' '),
    usePolygon: true,
    S_r: 'Lease',
  });

  return (
    <div className="flex flex-1 flex-col">
      <Desktop>
        <div className="flex flex-1">
          {searchParams?.searchParams.view !== 'list' && (
            <section
              style={{
                height: 'calc(100vh - 70px)',
                top: '70px',
              }}
              className="sticky left-0 flex-1"
            >
              <Suspense
                fallback={
                  <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-white">
                    <Loader />
                  </div>
                }
              >
                <Mapbox data={rows.data} />
              </Suspense>
            </section>
          )}

          <section
            className={cn(
              'relative flex w-full flex-col gap-4 overflow-y-auto bg-white  lg:w-1/2 2xl:w-2/5',
              {
                'w-full bg-transparent xl:w-full 2xl:w-full':
                  searchParams?.searchParams.view === 'list',
                'mx-auto': searchParams?.searchParams.view === 'list',
              }
            )}
          >
            <Suspense
              key={searchParams?.searchParams.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-white">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.searchParams.page ?? 1) ?? 1}
                view={searchParams?.searchParams.view ?? 'map'}
                max={Number(searchParams?.searchParams.max ?? 25000000)}
                min={Number(searchParams?.searchParams.min ?? 0)}
                type={searchParams?.searchParams.type}
                bedrooms={searchParams?.searchParams.bedrooms}
                bathrooms={searchParams?.searchParams.bathrooms}
                basement={searchParams?.searchParams.basement}
                sort={searchParams?.searchParams.sort}
                title={`Homes for Rent in ${searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}`}
                S_r="Lease"
                neighborhood={searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}
                location={`/${searchParams.params.neighbourhood}/homes-for-rent`}
              />
            </Suspense>
          </section>
        </div>
        <Footer />
      </Desktop>
      <Mobile>
        <div className="flex flex-1">
          <section
            className={cn(
              'relative flex w-full flex-col gap-4 overflow-y-auto bg-white  lg:w-1/2 2xl:w-2/5'
            )}
          >
            <Suspense
              key={searchParams?.searchParams.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-56px)] items-center justify-center bg-white">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.searchParams.page ?? 1) ?? 1}
                view={searchParams?.searchParams.view ?? 'map'}
                max={Number(searchParams?.searchParams.max ?? 25000000)}
                min={Number(searchParams?.searchParams.min ?? 0)}
                type={searchParams?.searchParams.type}
                bedrooms={searchParams?.searchParams.bedrooms}
                bathrooms={searchParams?.searchParams.bathrooms}
                basement={searchParams?.searchParams.basement}
                sort={searchParams?.searchParams.sort}
                title={`Homes for Rent in ${searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}`}
                S_r="Lease"
                neighborhood={searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}
                location={`/${searchParams.params.neighbourhood}/homes-for-rent`}
              />
            </Suspense>
          </section>
        </div>

        <Footer />
        <Tabbar />
      </Mobile>
    </div>
  );
};

export default Page;
