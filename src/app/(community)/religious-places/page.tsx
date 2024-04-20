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
  const getdata = () => {
    return data.map(reg => {
      return {
        name: reg.name,
        address: reg.address,
        Lat: reg.lat,
        Lng: reg.lng,
        religion: reg.religion,
        color: '#8B0000',
      };
    });
  };

  return (
    <div className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h1 className="text-center text-xl font-medium">
        The Preserve Oakville Religious Places
      </h1>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(90vh - 252px)',
          }}
        >
          <MapPinLocation data={getdata()} />
        </div>
      </section>
      <Healthcare id="banks" data={data} />
    </div>
  );
};

export default ReligiousPage;
