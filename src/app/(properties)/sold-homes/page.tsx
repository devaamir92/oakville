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
    days?: string;
  };
}

export const metadata: Metadata = {
  title:
    'Sold Homes | Recently Sold Homes and Sold Properties| Preserve Oakville',
  description:
    'Search recently sold homes, condos, land and more at The Preserve Oakville. Find sold properties from the most comprehensive source of real estate data online.',
};

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const rows = await getProperties({
    limit: 1000,
    usePolygon: true,
    max: Number(searchParams?.max ?? 25000000),
    min: Number(searchParams?.min ?? 0),
    bedrooms: searchParams?.bedrooms,
    bathrooms: searchParams?.bathrooms,
    basement: searchParams?.basement,
    status: 'U',
    Lsc: 'Sld',
    // days: Number(searchParams?.days ?? 30) ?? 30,
  });
  return (
    <div className="flex flex-1 flex-col">
      <Desktop>
        <div className="flex flex-1">
          {searchParams?.view === 'map' && (
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
              'flex  w-full flex-col gap-4 overflow-y-auto bg-red-500 bg-transparent xl:w-full 2xl:w-full',
              {
                'lg:w-1/2 2xl:w-2/5': searchParams?.view === 'map',
                // 'mx-auto': searchParams?.view === 'list',
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
                view={searchParams?.view ?? 'list'}
                max={Number(searchParams?.max ?? 25000000)}
                min={Number(searchParams?.min ?? 0)}
                bedrooms={searchParams?.bedrooms}
                bathrooms={searchParams?.bathrooms}
                basement={searchParams?.basement}
                title="Sold Homes in Preserve Oakville"
                location="/sold-homes"
                Status="U"
                Lsc="Sld"
                sort="Cd"
                // days={Number(searchParams?.days ?? 30) ?? 30}
              />
            </Suspense>
          </section>
        </div>
      </Desktop>
      <Mobile>
        <section
          className={cn(
            'flex w-full flex-1 flex-col gap-4 overflow-y-auto bg-white lg:w-1/2 2xl:w-2/5'
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
              view={searchParams?.view ?? 'list'}
              max={Number(searchParams?.max ?? 25000000)}
              min={Number(searchParams?.min ?? 0)}
              bedrooms={searchParams?.bedrooms}
              bathrooms={searchParams?.bathrooms}
              basement={searchParams?.basement}
              title="Sold Homes in Preserve Oakville"
              location="/sold-homes"
              Status="U"
              Lsc="Sld"
              sort="Cd"
            />
          </Suspense>
        </section>
      </Mobile>
    </div>
  );
};

export default Page;
