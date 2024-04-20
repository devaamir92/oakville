import React, { Suspense } from 'react';

import type { Metadata } from 'next';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Mapbox from '@components/Mapbox';

import Property from '@components/Properties';
import { Desktop, Mobile } from '@components/ua';

import { getProperties } from '@lib/api/properties/getProperties';
import Footer from '@components/Footer';
import Tabbar from '@components/Tabbar';

interface PropertyProps {
  params: any;
  searchParams: {
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
    neighbourhood: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  return {
    title: `Recently Sold Homes In ${params?.neighbourhood
      .split('-')
      .join(' ')} | The Preserve Oakville`,
    description: `Search recently sold homes in ${params?.neighbourhood
      .split('-')
      .join(
        ' '
      )}, at The Preserve Oakville. Find sold properties from the most comprehensive source of real estate data online.`,
  };
}

const SoldPage: React.FC<PropertyProps> = async ({ params, searchParams }) => {
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
    neighborhood: params?.neighbourhood.split('-').join(' '),

    days: Number(searchParams?.days ?? 0),
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
                title={`Sold Homes in ${params?.neighbourhood
                  .split('-')
                  .join(' ')}`}
                location={`/${params?.neighbourhood}/sold-homes`}
                Status="U"
                Lsc="Sld"
                sort="Cd"
                neighborhood={params?.neighbourhood.split('-').join(' ')}
                days={Number(searchParams?.days ?? 0)}
              />
            </Suspense>
          </section>
        </div>
        <Footer />
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
              title={`Sold Homes in ${params?.neighbourhood
                .split('-')
                .join(' ')}`}
              location={`/${params?.neighbourhood}/sold-homes`}
              Status="U"
              Lsc="Sld"
              sort="Cd"
              neighborhood={params?.neighbourhood.split('-').join(' ')}
              days={Number(searchParams?.days ?? 0)}
            />
          </Suspense>
        </section>
        <Footer />
        <Tabbar />
      </Mobile>
    </div>
  );
};

export default SoldPage;
