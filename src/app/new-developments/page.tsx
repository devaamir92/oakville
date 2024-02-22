import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Pagination from '@components/ui/Pagination';

import Toolbar from './_components/toolbar';

const Property = [
  {
    Addr: 'Kilworth Heights West',
    Status: 'Selling Now',
    EstCompletion: 'TBA',
    StartingAt: '$1,350,000',
    Location: 'Middlesex Centre',
    ImageUrl: '/images/webp/newconstruction/medium.webp',
  },
  {
    Addr: 'Clarehaven Estates',
    Status: 'Selling Now',
    EstCompletion: 'NA',
    StartingAt: '$2,419,900',
    Location: 'Pickering',
    ImageUrl: '/images/webp/newconstruction/medium2.webp',
  },
  {
    Addr: 'Embrun Central',
    Status: 'Coming Soon',
    EstCompletion: 'TBA',
    StartingAt: '$689,900',
    Location: 'Embrun',
    ImageUrl: '/images/webp/newconstruction/medium3.webp',
  },
  {
    Addr: 'Mount Elgin Meadow Lands',
    Status: 'Selling Now',
    EstCompletion: 'TBA',
    StartingAt: '$478,000',
    Location: 'Mount Elgin',
    ImageUrl: '/images/webp/newconstruction/medium4.webp',
  },
  {
    Addr: 'South of Main',
    Status: 'Selling Now',
    EstCompletion: 'O',
    StartingAt: '$733,800',
    Location: 'Lambton Shores',
    ImageUrl: '/images/webp/newconstruction/medium5.webp',
  },
  {
    Addr: 'Creekside Valley',
    Status: 'Selling Now',
    EstCompletion: '2024',
    StartingAt: '$959,900',
    Location: 'Kingston',
    ImageUrl: '/images/webp/newconstruction/medium6.webp',
  },
  {
    Addr: 'The Preserve at Bancroft Ridge',
    Status: 'Coming Soon',
    EstCompletion: 'TBA',
    StartingAt: '$0',
    Location: 'Bancroft',
    ImageUrl: '/images/webp/newconstruction/medium7.webp',
  },
  {
    Addr: 'The Residences at Watershore',
    Status: 'Selling Now',
    EstCompletion: '2025',
    StartingAt: '$1,500,000',
    Location: 'Hamilton',
    ImageUrl: '/images/webp/newconstruction/medium8.webp',
  },
  {
    Addr: 'Ashgrove Meadows - Phase 3',
    Status: 'Coming Soon',
    EstCompletion: 'TBA',
    StartingAt: '$0',
    Location: 'Ashgrove Meadows',
    ImageUrl: '/images/webp/newconstruction/medium9.webp',
  },
];

const Developments = () => {
  return (
    <div className="flex flex-col pb-4">
      <div className="flex-1">
        <Toolbar />
      </div>
      <div className="container mt-4 flex flex-col">
        <h1 className="mb-3 text-center text-2xl font-semibold">
          The Preserve Oakville
        </h1>
        <div className="mb-4 h-[1px] bg-gray-300" />
      </div>

      <div className="container mb-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Property.map(item => {
          const slug = item.Addr.toLowerCase().split(' ').join('-');
          return (
            <Link
              href={`/new-developments/${slug}`}
              key={slug}
              className="flex flex-col"
            >
              <div className="flex flex-col overflow-hidden rounded border border-gray-300 bg-white">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={item.ImageUrl}
                    alt={item.Addr}
                    fill
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
                    {item.Addr}
                  </h2>

                  <div className="flex items-center gap-1 text-sm font-normal">
                    <p>Est. Completion: {item.EstCompletion}</p>
                    <div className="flex h-4 w-[1px] bg-primary-500" />
                    <p>Starting At: {item.StartingAt}</p>
                  </div>
                  <h3 className="text-base font-medium text-primary-500">
                    {item.Location}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <Pagination currentPage={1} totalPages={12} /> */}
    </div>
  );
};

export default Developments;
