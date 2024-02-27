import React, { Suspense } from 'react';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Toolbar from '@components/Toolbar';
import Mapbox from '@components/Mapbox';

import Property from './property';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
    page?: string;
  };
}

const getProperties = async (page: number) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setFilter({
      field: 'Status',
      operator: '$eq',
      value: 'A',
    })
    .setFilter({
      field: 'S_r',
      operator: '$eq',
      value: 'Sale',
    })
    .setLimit(1000);

  queryBuilder.select(['Ml_num', 'Lp_dol', 'Slug', 'Lat', 'Lng']);

  queryBuilder.setPage(page ?? 1);

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
  return res.json();
};

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  const rows = await getProperties(0);
  return (
    <main className="flex flex-1 flex-col">
      <Toolbar />
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
              <Mapbox data={rows.data} />
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
            />
          </Suspense>
        </section>
      </div>
    </main>
  );
};

export default Page;
