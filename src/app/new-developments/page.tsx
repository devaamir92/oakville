import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { RequestQueryBuilder } from '@nestjsx/crud-request';

import Pagination from '@components/ui/Pagination';

import Toolbar from './_components/toolbar';

const getNewDevelopment = async () => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder.setJoin({
    field: 'gallery',
  });
  const res = await fetch(
    `${
      process.env.API_HOST
    }/api/v1/development/project?${queryBuilder.query()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return res.json();
};

const Developments = async () => {
  const data = await getNewDevelopment();

  return (
    <div className="flex h-full flex-col pb-4">
      <div className="w-full">
        <Toolbar />
      </div>
      <div className="h-full">
        <div className="container mt-4 flex  flex-col">
          <h1 className="mb-3 text-center text-2xl font-semibold">
            The Preserve Oakville
          </h1>
          <div className="mb-4 h-[1px] bg-gray-300" />
        </div>

        <div className="container mb-4 grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((item: any) => {
            return (
              <Link
                href={`/new-developments/${item.slug}`}
                key={item.slug}
                className="flex flex-col"
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
                      <p>Starting At: ${Number(item.price).toLocaleString()}</p>
                    </div>
                    <h3 className="text-base font-medium text-primary-500">
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
          location="/new-developments"
        />
      )}
    </div>
  );
};

export default Developments;
