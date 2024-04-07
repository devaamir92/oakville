import React, { Suspense } from 'react';
import type { Metadata } from 'next';

import { getNewDevelopment } from '@lib/api/getNewDevelopment';

import Loader from '@components/Loader';
import Pagination from '@components/ui/Pagination';

import Toolbar from './_components/toolbar';
import NewHomeCard from './_components/NewHomeCard';

export const metadata: Metadata = {
  title: 'New Homes in The Preserve Oakville | Discover Homes for Sale',
  description:
    'Explore New Homes in The Preserve Oakville, featuring luxury properties and homes. Stay updated on the latest properties by Mattamy Homes, Fernbrook, & more.',
};

const Developments = async ({ searchParams }: any) => {
  const data = await getNewDevelopment(
    searchParams.type,
    searchParams.status,
    searchParams.occupancy,
    searchParams.search,
    Number(searchParams?.page ?? 1) ?? 1
  );

  return (
    <div className="flex h-full flex-col pb-4">
      <div className="w-full">
        <Toolbar />
      </div>
      <div className="h-full">
        <div className="container mt-4 flex  flex-col">
          <h1 className="mb-3 text-center text-xl font-semibold md:text-2xl">
            The Preserve Oakville New Homes
          </h1>
          <div className="mb-4 h-[1px] bg-gray-300" />
        </div>
        <Suspense
          key={searchParams?.page ?? '1'}
          fallback={
            <div className="flex h-[calc(100vh-210px)] items-center justify-center">
              <Loader />
            </div>
          }
        >
          {data.data.length === 0 && (
            <div className="flex min-h-[calc(100vh-210px)]  items-center justify-center ">
              <h2 className="text-xl font-semibold text-gray-500">
                No New Homes Found. Clear Filters To View All Projects.
              </h2>
            </div>
          )}
          {data.data.length > 0 && (
            <div className="container mb-4 grid min-h-[calc(100vh-200px)] gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {data.data.map((item: any) => {
                return <NewHomeCard key={item.id} item={item} />;
              })}
            </div>
          )}
          {data?.pageCount > 1 && (
            <Pagination
              totalPages={data.pageCount}
              currentPage={data.page}
              location="/new-homes"
            />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Developments;
