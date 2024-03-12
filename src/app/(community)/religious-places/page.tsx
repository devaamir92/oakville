import type { Metadata } from 'next';

import data from '@assets/religious/file.json';

import MapPinLocation from '@components/MapPinLocation';

import Healthcare from '../_components/BankCard';

export const metadata: Metadata = {
  title: 'Places of Worship Near The Preserve Oakville: Spiritual Community',
  description:
    'Discover the best convenient stores near The Preserve, Oakville. From boutique shops to everyday essentials, enjoy great shopping options in the neighborhood.',
};

const ReligiousPage = async () => {
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Religious Places
      </h3>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(100vh - 252px)',
          }}
        >
          <MapPinLocation />
        </div>
      </section>
      <Healthcare id="banks" data={data.religious} />
    </main>
  );
};

export default ReligiousPage;
