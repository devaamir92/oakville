import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/ListingCard';
import getBedroomString from '@utils/getbedroomString';
import getSlug from '@utils/getSlug';
import { Desktop, Mobile } from '@components/ua';

interface JustSoldProps {
  rows: any;
  session: any;
}

const JustSold: React.FC<JustSoldProps> = ({ rows, session }) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex flex-col items-center justify-center gap-1 pb-4 md:pb-8">
          <h4 className="text-xl font-semibold md:text-2xl">Recently Sold</h4>
          <p className="">
            Real estate boards require you to be signed in to access sold prices
            history.
          </p>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <Desktop>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows?.map((item: any) => (
              <Card
                session={session}
                mls={item.Ml_num}
                key={item.id}
                bathrooms={item.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.Br),
                  Number(item.Br_plus)
                )}
                imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
                location={item.Addr}
                price={Number(item.Lp_dol).toLocaleString() ?? '0'}
                parking={item.Park_spcs ?? '0'}
                slug={getSlug(item.Community, item.Slug)}
                isLocked
                status={item.Status}
                tssql={item.Cd}
                soldPrice={Number(item.Sp_dol).toLocaleString() ?? '0'}
              />
            ))}
          </div>
        </Desktop>
        <Mobile>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows.slice(0, 3).map((item: any) => (
              <Card
                session={session}
                mls={item.Ml_num}
                key={item.id}
                bathrooms={item.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.Br),
                  Number(item.Br_plus)
                )}
                imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
                location={item.Addr}
                price={Number(item.Lp_dol).toLocaleString() ?? '0'}
                parking={item.Park_spcs ?? '0'}
                slug={getSlug(item.Community, item.Slug)}
                isLocked
                status={item.Status}
                tssql={item.Cd}
                soldPrice={Number(item.Sp_dol).toLocaleString() ?? '0'}
              />
            ))}
          </div>
        </Mobile>
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
