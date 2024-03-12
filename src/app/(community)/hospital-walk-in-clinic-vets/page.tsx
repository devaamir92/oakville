import data from '@assets/healthcare/file.json';

import MapPinLocation from '@components/MapPinLocation';

import Healthcare from '../_components/BankCard';

const HealthcarePage = async () => {
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Healthcare
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
      <Healthcare id="banks" data={data.healthcare} />
    </main>
  );
};

export default HealthcarePage;
