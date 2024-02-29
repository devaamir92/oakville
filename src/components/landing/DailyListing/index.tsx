import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/ListingCard';

interface DailyListingProps {
  rows: any;
}

const DailyListing: React.FC<DailyListingProps> = ({ rows }) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="pb-8  text-2xl font-semibold">New Listings</h2>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rows?.map((item: any) => (
            <Card
              key={item.id}
              bathrooms={item.Bath_tot ?? 0}
              bedrooms={`${item.Br}${
                item.Br_plus !== '0' ? ` + ${item.Br_plus}` : ''
              }`}
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
              location={item.Addr}
              price={Number(item.Lp_dol).toLocaleString() ?? '0'}
              parking={item.Park_spcs ?? '0'}
              slug={`/property-for-sale/${item.Community.toLowerCase().replace(
                ' ',
                '-'
              )}/${item.Slug}`}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            href="/property-for-sale"
            className="inline-flex items-center justify-center gap-1 rounded bg-primary-200 px-3 py-1.5 text-center text-sm font-medium text-primary-700"
          >
            View all latest listings <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DailyListing;
