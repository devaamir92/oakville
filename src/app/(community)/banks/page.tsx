import banksData from '@assets/banks/file.json';

import MapPinLocation from '@components/MapPinLocation';

import BankCard from '../_components/BankCard';

const BanksPage = async () => {
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Banks
      </h3>
      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(100vh - 252px)',
          }}
        >
          <MapPinLocation
            data={[
              {
                Lng: '-79.7976',
                Lat: '43.4328',
              },
            ]}
          />
        </div>
      </section>

      <BankCard id="banks" data={banksData.banks} />
    </main>
  );
};

export default BanksPage;
