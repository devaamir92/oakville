import React, { Suspense } from 'react';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import type { Metadata } from 'next';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Toolbar from '@components/Toolbar';
import Mapbox from '@components/Mapbox';

import sortlisting from '@utils/sort';

import { BedroomsParser } from '@utils/parsers/bedrooms-parser';
import { BathroomsParser } from '@utils/parsers/bathrooms-parser';

import Property from '@components/Properties';
import inPolygon from '@utils/inPolygon';

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
  title: 'Discover Best Properties for Rent in The Preserve Oakville',
  description:
    'Browse our listings for properties for rent in The Preserve Oakville neighbourhood. Find luxury properties and homes for rent - Start your search today.',
};

const getProperties = async (
  max: number,
  min: number,
  type: string | string[],
  bedrooms: any,
  bathrooms: any,
  basement: string | string[],
  sort: string,
  neighborhood: string
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
  // console.log(search);
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
          Community: {
            $eqL: neighborhood,
          },
          S_r: {
            $eq: 'Lease',
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

const Page: React.FC<PageProps> = async (searchParams: any) => {
  const rows = await getProperties(
    Number(searchParams?.searchParams.max ?? 25000000),
    Number(searchParams?.searchParams.min ?? 0),
    searchParams?.searchParams.type,
    searchParams?.searchParams.bedrooms,
    searchParams?.searchParams.bathrooms,
    searchParams?.searchParams.basement,
    searchParams?.searchParams.sort,
    searchParams.params.neighbourhood.split('-').join(' ')
  );

  return (
    <main className="flex flex-1 flex-col">
      <Toolbar />
      <div className="flex flex-1">
        {searchParams?.searchParams.view !== 'list' && (
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
                searchParams?.searchParams.view === 'list',
              'mx-auto': searchParams?.searchParams.view === 'list',
            }
          )}
        >
          <Suspense
            key={searchParams?.searchParams.page ?? '1'}
            fallback={
              <div className="absolute left-0 top-0 z-0 flex size-full items-center justify-center">
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
              title={`Properties for Rent in ${searchParams.params.neighbourhood
                .split('-')
                .join(' ')}`}
              S_r="Lease"
              neighborhood={searchParams.params.neighbourhood
                .split('-')
                .join(' ')}
              location={`/homes-for-rent/${searchParams.params.neighbourhood}`}
            />
          </Suspense>
        </section>
      </div>
    </main>
  );
};

export default Page;