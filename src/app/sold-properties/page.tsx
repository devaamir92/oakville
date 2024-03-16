import type { Metadata } from 'next';

import { Suspense } from 'react';

import SoldTopBar from '@components/SoldTopBar';

import Loader from '@components/Loader';

import SoldProperty from './_components/SoldProperty';

interface PropertyProps {
  searchParams?: {
    page?: string;
    days?: string;
  };
}

export const metadata: Metadata = {
  title: 'Sell Your Property in The Preserve Oakville ',
  description:
    'Ready to sell your property in The Preserve Oakville? We specialize in selling luxury properties- Let us help you reach buyers looking for Oakville real estate. ',
};

const Property: React.FC<PropertyProps> = async ({ searchParams }) => {
  return (
    <div className="container flex flex-col justify-center gap-4 py-4">
      <SoldTopBar />
      <hr />

      <Suspense
        key={searchParams?.page ?? '1'}
        fallback={
          <div className="flex min-h-[calc(100vh-135px)]  items-center justify-center">
            <Loader />
          </div>
        }
      >
        <SoldProperty
          days={Number(searchParams?.days ?? 0) ?? 0}
          page={Number(searchParams?.page ?? 1) ?? 1}
          location="/sold-properties"
        />
      </Suspense>
    </div>
  );
};

export default Property;
