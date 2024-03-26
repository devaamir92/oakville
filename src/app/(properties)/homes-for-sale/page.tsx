import React, { Suspense } from 'react';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import type { Metadata } from 'next';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Mapbox from '@components/Mapbox';

import sortlisting from '@utils/sort';

import { BedroomsParser } from '@utils/parsers/bedrooms-parser';
import { BathroomsParser } from '@utils/parsers/bathrooms-parser';

import Property from '@components/Properties';
import inPolygon from '@utils/inPolygon';
import { Desktop, Mobile } from '@components/ua';
import Footer from '@components/Footer';
import Tabbar from '@components/Tabbar';
import Toolbar from '@components/Toolbar';

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

const getProperties = async (
  max: number,
  min: number,
  type: string | string[],
  bedrooms: any,
  bathrooms: any,
  basement: string | string[],
  sort: string
) => {
  const queryBuilder = RequestQueryBuilder.create();

  let search = {};

  if (bedrooms) {
    search = {
      ...search,
      ...BedroomsParser.create(bedrooms).parse(),
    };
  }
  if (bathrooms) {
    search = {
      ...search,
      ...BathroomsParser.create(bathrooms).parse(),
    };
  }
  const propType = Array.isArray(type) ? type : [type];
  const propsBsmt = Array.isArray(basement) ? basement : [basement];

  const typeQuery: any =
    (type && {
      Type_own_srch: {
        $in: propType,
      },
    }) ||
    {};

  const bsmtQuery: any =
    (basement && {
      Bsmt1_out: {
        $in: propsBsmt,
      },
    }) ||
    {};

  queryBuilder
    .search({
      $and: [
        {
          Status: {
            $eq: 'A',
          },
          S_r: {
            $eq: 'Sale',
          },
          Lp_dol: {
            $gte: min,
            $lte: max,
          },
          ...typeQuery,
          ...bsmtQuery,
          ...search,
        },
      ],
    })
    .sortBy(sortlisting(sort))
    .setLimit(1000);

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Apt_num',
    'Lp_dol',
    'Br',
    'Br_plus',
    'Bath_tot',
    'Park_spcs',
    'Status',
    'Is_locked',
    'Slug',
    'Community',
    'Bsmt1_out',
    'Lat',
    'Lng',
  ]);

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['property'],
      },
      cache: 'no-cache',
    }
  );
  const data = await res.json();
  const responce = inPolygon(data.data);
  return responce;
};

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const rows = await getProperties(
    Number(searchParams?.max ?? 25000000),
    Number(searchParams?.min ?? 0),
    searchParams?.type,
    searchParams?.bedrooms,
    searchParams?.bathrooms,
    searchParams?.basement,
    searchParams?.sort
  );

  return (
    <div className="flex flex-1 flex-col">
      <Desktop>
        <Toolbar type="sale" />
        <div className="flex flex-1">
          {searchParams?.view !== 'list' && (
            <section
              style={{
                height: 'calc(100vh - 70px - 48px)',
                top: 'calc(70px + 48px)',
              }}
              className="sticky left-0 flex-1"
            >
              <Suspense
                fallback={
                  <div className="absolute left-0 top-0 z-0 flex size-full items-center justify-center">
                    <Loader />
                  </div>
                }
              >
                <Mapbox data={rows} />
              </Suspense>
            </section>
          )}

          <section
            className={cn(
              'container relative flex w-full flex-col gap-4 overflow-y-auto bg-white py-4 lg:w-1/2 2xl:w-2/5',
              {
                'w-full bg-transparent xl:w-full 2xl:w-full':
                  searchParams?.view === 'list',
                'mx-auto': searchParams?.view === 'list',
              }
            )}
          >
            <Suspense
              key={searchParams?.page ?? '1'}
              fallback={
                <div className="absolute left-0 top-0 z-0 flex size-full items-center justify-center">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.page ?? 1) ?? 1}
                view={searchParams?.view ?? 'map'}
                max={Number(searchParams?.max ?? 25000000)}
                min={Number(searchParams?.min ?? 0)}
                type={searchParams?.type}
                bedrooms={searchParams?.bedrooms}
                bathrooms={searchParams?.bathrooms}
                basement={searchParams?.basement}
                sort={searchParams?.sort}
                title="Homes for Sale in Rural Oakville & Uptown Core"
                S_r="Sale"
                location="/homes-for-sale"
              />
            </Suspense>
          </section>
        </div>
        <Footer />
      </Desktop>
      <Mobile>
        <section
          className={cn(
            'container relative flex w-full flex-col gap-4 overflow-y-auto bg-white py-4'
          )}
        >
          <Suspense
            key={searchParams?.page ?? '1'}
            fallback={
              <div className="absolute left-0 top-0 z-0 flex size-full items-center justify-center">
                <Loader />
              </div>
            }
          >
            <Property
              page={Number(searchParams?.page ?? 1) ?? 1}
              view={searchParams?.view ?? 'map'}
              max={Number(searchParams?.max ?? 25000000)}
              min={Number(searchParams?.min ?? 0)}
              type={searchParams?.type}
              bedrooms={searchParams?.bedrooms}
              bathrooms={searchParams?.bathrooms}
              basement={searchParams?.basement}
              sort={searchParams?.sort}
              title="Homes for Sale in Rural Oakville & Uptown Core"
              S_r="Sale"
              location="/homes-for-sale"
            />
          </Suspense>
        </section>
        <Footer />
        <Tabbar type="sale" />
      </Mobile>
    </div>
  );
};

export default Page;
