import data from '@assets/parks/file.json';

import MapPinLocation from '@components/MapPinLocation';

import ParksRec from '../_components/BankCard';

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
            height: 'calc(100vh - 252px)',
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
