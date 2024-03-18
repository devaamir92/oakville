import type { Metadata } from 'next';

import data from '@assets/healthcare/file.json';

import MapPinLocation from '@components/MapPinLocation';

import Healthcare from '../_components/BankCard';

export const metadata: Metadata = {
  title: 'Hospitals Near The Preserve Oakville: Healthcare Access',
  description:
    'Hospitals and medical facilities near The Preserve Oakville - With easy access to healthcare services, residents can rest assured knowing quality care is nearby.',
};

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
            height: 'calc(80vh - 252px)',
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
