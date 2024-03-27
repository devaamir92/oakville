import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/ListingCard';
import { Desktop, Mobile } from '@components/ua';

import getSlug from '@utils/getSlug';
import getBedroomString from '@utils/getbedroomString';

interface DailyListingProps {
  rows: any;
  session: any;
}

const DailyListing: React.FC<DailyListingProps> = async ({ rows, session }) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h5 className="pb-4 text-xl font-semibold  md:pb-8 md:text-2xl">
            New Listings
          </h5>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <Desktop>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows?.map((item: any) => (
              <Card
                session={session}
                key={item.id}
                mls={item.Ml_num}
                bathrooms={item.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.Br),
                  Number(item.Br_plus)
                )}
                imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
                location={item.Addr}
                price={Number(item.Lp_dol).toLocaleString() ?? '0'}
                parking={item.Park_spcs ?? '0'}
                slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
                isLocked={item.Is_locked}
              />
            ))}
          </div>
        </Desktop>
        <Mobile>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows.slice(0, 4).map((item: any) => (
              <Card
                session={session}
                key={item.id}
                mls={item.Ml_num}
                bathrooms={item.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.Br),
                  Number(item.Br_plus)
                )}
                imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
                location={item.Addr}
                price={Number(item.Lp_dol).toLocaleString() ?? '0'}
                parking={item.Park_spcs ?? '0'}
                slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
                isLocked={item.Is_locked}
              />
            ))}
          </div>
        </Mobile>
        <div className="mt-3 flex justify-end">
          <Link
            href="/homes-for-sale"
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
