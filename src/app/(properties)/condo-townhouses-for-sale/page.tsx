import React, { Suspense } from 'react';

import type { Metadata } from 'next';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Mapbox from '@components/Mapbox';

import Property from '@components/Properties';
import { Desktop, Mobile } from '@components/ua';

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
  title: 'Homes for Sale in The Preserve Oakville: Luxury Property for Sale',
  description:
    'Explore homes for sale in The Preserve Oakville, featuring luxury properties for every lifestyle. Find your dream home in this desirable Canadian neighborhood.',
};

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const rows = await getProperties({
    limit: 1000,
    S_r: 'Sale',
    usePolygon: true,
    max: Number(searchParams?.max ?? 25000000),
    min: Number(searchParams?.min ?? 0),
    type: '.T.',
    bedrooms: searchParams?.bedrooms,
    bathrooms: searchParams?.bathrooms,
    basement: searchParams?.basement,
  });

  return (
    <div className="flex flex-1 flex-col">
      <Desktop>
        <div className="flex flex-1">
          {searchParams?.view !== 'list' && (
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
              'flex  w-full flex-col gap-4 overflow-y-auto bg-transparent xl:w-full 2xl:w-full',
              {
                'lg:w-1/2 xl:w-1/2 2xl:w-2/5': searchParams?.view !== 'list',
              }
            )}
          >
            <Suspense
              key={searchParams?.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-white">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.page ?? 1) ?? 1}
                view={searchParams?.view ?? 'map'}
                max={Number(searchParams?.max ?? 25000000)}
                min={Number(searchParams?.min ?? 0)}
                type=".T."
                bedrooms={searchParams?.bedrooms}
                bathrooms={searchParams?.bathrooms}
                basement={searchParams?.basement}
                sort={searchParams?.sort}
                title="Condo Townhouses for Sale in Rural Oakville & Uptown Core"
                S_r="Sale"
                location="/condo-townhouses-for-sale"
              />
            </Suspense>
          </section>
        </div>
      </Desktop>
      <Mobile>
        <div className="flex flex-1">
          <section
            className={cn(
              'relative flex w-full flex-col gap-4 overflow-y-auto bg-white  lg:w-1/2 2xl:w-2/5'
            )}
          >
            <Suspense
              key={searchParams?.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-56px)] items-center justify-center bg-white">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.page ?? 1) ?? 1}
                view={searchParams?.view ?? 'map'}
                max={Number(searchParams?.max ?? 25000000)}
                min={Number(searchParams?.min ?? 0)}
                type=".T."
                bedrooms={searchParams?.bedrooms}
                bathrooms={searchParams?.bathrooms}
                basement={searchParams?.basement}
                sort={searchParams?.sort}
                title="Condo Townhouses for Sale in Rural Oakville & Uptown Core"
                S_r="Sale"
                location="/condo-townhouses-for-sale"
              />
            </Suspense>
          </section>
        </div>
      </Mobile>
    </div>
  );
};

export default Page;
