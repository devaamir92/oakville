import type { Metadata } from 'next';

import { Suspense } from 'react';

import SoldTopBar from '@components/SoldTopBar';

import Loader from '@components/Loader';

import SoldProperty from '../_components/SoldProperty';

interface PropertyProps {
  searchParams?: {
    page?: string;
    days?: string;
  };
}

export const metadata: Metadata = {
  title:
    'Sold Homes |Recently Sold Homes and Sold Properties| Preserve Oakville',
  description:
    'Search recently sold homes, condos, land and more at The Preserve Oakville. Find sold properties from the most comprehensive source of real estate data online.',
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
          location="/sold-homes"
        />
      </Suspense>
    </div>
  );
};

export default Property;
