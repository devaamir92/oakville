import React, { Suspense } from 'react';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Property from './property';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
    page?: string;
  };
}

const Page: React.FC<PageProps> = async ({ searchParams }) => {
  return (
    <section
      className={cn(
        'container relative flex w-full flex-col gap-4 overflow-y-auto bg-white py-4 lg:w-1/2 2xl:w-2/5',
        {
          'w-full bg-transparent xl:w-full 2xl:w-full':
            searchParams?.view === 'list',
          'mx-auto': searchParams?.view === 'list',
        }
      )}
    >
      <Suspense
        key={searchParams?.page ?? '1'}
        fallback={
          <div className="absolute left-0 top-0 z-0 flex size-full items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Property
          page={Number(searchParams?.page ?? 1) ?? 1}
          view={searchParams?.view ?? 'map'}
        />
      </Suspense>
    </section>
  );
};

export default Page;
