import storesData from '@assets/stores/file.json';

import MapPinLocation from '@components/MapPinLocation';

import StoreCard from '../_components/BankCard';

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
            height: 'calc(100vh - 252px)',
          }}
        >
          <MapPinLocation />

          {/* <Map lat={43.487113} lng={-79.720562} zoom={12.27} /> */}
        </div>
      </section>

      <StoreCard id="banks" data={storesData.stores} />
    </main>
  );
};

export default StoresPage;
