'use client';

import React from 'react';

import { useSearchParams } from 'next/navigation';

import getSlug from '@utils/getSlug';
import Pagination from '@components/ui/Pagination';

import ItemCard from '../ItemCard';

interface RightSideProps {
  searchData: any;
  session: any;
}

const RightSide: React.FC<RightSideProps> = ({ searchData, session }) => {
  const searchParams = useSearchParams();

  return (
    <>
      <div className="flex  flex-col gap-1">
        {searchData?.total >= 0 && (
          <p className="text-lg font-semibold text-gray-800">
            {searchData?.total} Results for {searchParams.get('tag')}
          </p>
        )}

        <hr className="border-gray-300" />
      </div>
      <div className="flex flex-col items-start divide-y-[1px] divide-gray-300 ">
        {searchData === null && (
          <p className="w-full text-center text-lg font-semibold text-gray-800">
            No results found
          </p>
        )}
        {searchData?.data?.map((property: any) => (
          <ItemCard
            Status={property.Status}
            Ml_num={property.Ml_num}
            address={property.Addr}
            price={property.Lp_dol}
            beds={property.Br}
            baths={property.Bath_tot}
            parking={property.Park_spcs}
            sqft={property.Sqft}
            key={property.Ml_num}
            Lsc={property.Lsc}
            url={getSlug(property.Community, property.Slug)}
            session={session}
            isLocked={property.Is_locked}
          />
        ))}
      </div>
      {searchData?.pageCount > 1 && (
        <Pagination
          totalPages={searchData.pageCount}
          currentPage={searchData.page}
          location="/search"
        />
      )}
    </>
  );
};

export default RightSide;
