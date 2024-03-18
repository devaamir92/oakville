import type { Metadata } from 'next';

import data from '@assets/parks/file.json';

import MapPinLocation from '@components/MapPinLocation';

import ParksRec from '../_components/BankCard';

export const metadata: Metadata = {
  title: 'Parks & Recreation in The Preserve Oakville: Outdoor Enjoyment',
  description:
    'Experience the beauty of parks and recreation in The Preserve Oakville. From scenic trails to family-friendly parks, this area offers great outdoor enjoyment.',
};

const ParksPage = async () => {
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Parks & Rec
      </h3>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(80vh - 252px)',
          }}
        >
          <MapPinLocation />
        </div>
      </section>
      <ParksRec id="parks" data={data.parks} />
    </main>
  );
};

export default ParksPage;
