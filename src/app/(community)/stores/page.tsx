import type { Metadata } from 'next';

import { FaStore } from 'react-icons/fa';

import storesData from '@assets/stores/file.json';

import MapPinLocation from '@components/MapPinLocation';

import StoreCard from '../_components/BankCard';

export const metadata: Metadata = {
  title: 'Convenient Stores Near The Preserve Oakville: Shopping Made Easy',
  description:
    'Explore places of worship near The Preserve Oakville. Find a welcoming spiritual community in this sought-after Canadian neighbourhood.',
};

const StoresPage = async () => {
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Stores
      </h3>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(90vh - 252px)',
          }}
        >
          <MapPinLocation icon={<FaStore />} />

          {/* <Map lat={43.487113} lng={-79.720562} zoom={12.27} /> */}
        </div>
      </section>

      <StoreCard id="banks" data={storesData.stores} />
    </main>
  );
};

export default StoresPage;
