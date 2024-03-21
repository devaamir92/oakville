import type { Metadata } from 'next';

import { FaTree } from 'react-icons/fa';

import data from '@assets/parks/file.json';

import MapPinLocation from '@components/MapPinLocation';

import ParksRec from '../_components/BankCard';

export const metadata: Metadata = {
  title: 'Parks & Recreation in The Preserve Oakville: Outdoor Enjoyment',
  description:
    'Experience the beauty of parks and recreation in The Preserve Oakville. From scenic trails to family-friendly parks, this area offers great outdoor enjoyment.',
};

const ParksPage = async () => {
  const getdata = () => {
    return data.map(park => {
      return {
        name: park.name,
        address: park.address,
        Lat: park.lat,
        Lng: park.lng,
      };
    });
  };
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Parks & Rec
      </h3>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(90vh - 252px)',
          }}
        >
          <MapPinLocation icon={<FaTree size={16} />} data={getdata()} />
        </div>
      </section>
      <ParksRec id="parks" data={data} />
    </main>
  );
};

export default ParksPage;
