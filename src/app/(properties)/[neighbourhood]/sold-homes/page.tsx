import type { Metadata } from 'next';

import { Suspense } from 'react';

import SoldTopBar from '@components/SoldTopBar';

import Loader from '@components/Loader';
import SoldProperty from '@app/(default)/sold-homes/_components/SoldProperty';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title:
    'Sold Homes |Recently Sold Homes and Sold Properties| Preserve Oakville',
  description:
    'Search recently sold homes, condos, land and more at The Preserve Oakville. Find sold properties from the most comprehensive source of real estate data online.',
};

interface PropertyProps {
  params: any;
  searchParams: { days?: string; page?: string };
}

const Property: React.FC<PropertyProps> = ({ params, searchParams }) => {
  return (
    <div className="flex flex-col">
      <div className="container flex flex-col justify-center gap-4 py-4">
        <SoldTopBar location={params?.neighbourhood} />
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
            location={`${params?.neighbourhood
              .split('-')
              .join(' ')}/sold-homes`}
            neighbourhood={params?.neighbourhood.split('-').join(' ')}
          />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
