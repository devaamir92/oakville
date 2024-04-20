import type { Metadata } from 'next';

import { FaShoppingCart } from 'react-icons/fa';

import storesData from '@assets/stores/file.json';

import MapPinLocation from '@components/MapPinLocation';

import StoreCard from '../_components/BankCard';

export const metadata: Metadata = {
  title: 'Convenient Stores Near The Preserve Oakville: Shopping Made Easy',
  description:
    'Explore places of worship near The Preserve Oakville. Find a welcoming spiritual community in this sought-after Canadian neighbourhood.',
};

const StoresPage = async () => {
  const getdata = () => {
    return storesData.map(store => {
      return {
        name: store.name,
        address: store.address,
        Lat: store.lat,
        Lng: store.lng,
        color: '#F5A623',
      };
    });
  };

  return (
    <div className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h1 className="text-center text-xl font-medium">
        The Preserve Oakville Stores
      </h1>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(90vh - 252px)',
          }}
        >
          <MapPinLocation
            icon={<FaShoppingCart size={16} />}
            data={getdata()}
          />
        </div>
      </section>

      <StoreCard id="banks" data={storesData} />
    </div>
  );
};

export default StoresPage;
