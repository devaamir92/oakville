import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import type { Metadata } from 'next';

import Pagination from '@components/ui/Pagination';

import { getNewDevelopment } from '@lib/api/getNewDevelopment';

import Toolbar from './_components/toolbar';

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
        {data.data.length === 0 && (
          <div className="flex min-h-[calc(100vh-200px)]  items-center justify-center ">
            <h2 className="text-xl font-semibold text-gray-500">
              No New Homes Found. Clear Filters To View All Projects.
            </h2>
          </div>
        )}
        <div className="container mb-4 grid min-h-[calc(100vh-200px)] gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.data.map((item: any) => {
            return (
              <Link
                href={`/new-homes/${item.slug}`}
                key={item.slug}
                className="flex h-fit flex-col"
              >
                <div className="flex flex-col overflow-hidden rounded border border-gray-300 bg-white">
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={`https://api.preserveoakville.ca/public/gallery/${item?.gallery[0].name}/${item?.gallery[0].image}`}
                      fill
                      alt={item.gallery[0].name}
                      sizes="100vw, (min-width: 768px) 50vw"
                      className="size-full object-cover"
                    />
                    <div className="absolute right-3 top-3">
                      {/* <span className="rounded bg-white px-3 py-1.5 text-sm font-semibold uppercase text-primary-500 shadow">
                    {item.Status}
                  </span> */}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1 py-1">
                    <h2 className="text-lg font-medium text-primary-500">
                      {item.name}
                    </h2>

                    <div className="flex items-center gap-1 text-sm font-normal">
                      <p>Est. Completion: {item.estimatedCompletionDate}</p>
                      <div className="flex h-4 w-[1px] bg-primary-500" />
                      <p>Starting At: ${item.price}</p>
                    </div>
                    <h3 className="text-base font-medium capitalize text-primary-500">
                      {item.neighbourhood}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {data?.pageCount > 1 && (
        <Pagination
          totalPages={data.pageCount}
          currentPage={data.page}
          location="/new-homes"
        />
      )}
    </div>
  );
};

export default Developments;
