import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/ListingCard';
import getBedroomString from '@utils/getbedroomString';
import getSlug from '@utils/getSlug';

interface JustSoldProps {
  rows: any;
  session: any;
}

const JustSold: React.FC<JustSoldProps> = ({ rows, session }) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex flex-col items-center justify-center gap-1 pb-4 md:pb-8">
          <h2 className="text-2xl font-semibold">Recently Sold</h2>
          <p className="">
            Real estate boards require you to be signed in to access sold prices
            history.
          </p>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rows?.map((item: any) => (
            <Card
              session={session}
              mls={item.Ml_num}
              key={item.id}
              bathrooms={item.Bath_tot ?? 0}
              bedrooms={getBedroomString(Number(item.Br), Number(item.Br_plus))}
              imageUrl="/images/jpg/property-sold-out.jpg"
              location={item.Addr}
              price={Number(item.Lp_dol).toLocaleString() ?? '0'}
              parking={item.Park_spcs ?? '0'}
              slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
              isLocked
              status={item.Status}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            href="/sold-homes"
            className="inline-flex items-center justify-center gap-1 rounded bg-primary-200 px-3 py-1.5 text-center text-sm font-medium text-primary-700"
          >
            View all sold listings <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JustSold;
