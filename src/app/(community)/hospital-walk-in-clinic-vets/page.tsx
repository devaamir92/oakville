import { promises as fs } from 'fs';

// import Map from '@components/Mapbox';

import Healthcare from '../_components/BankCard';

const HealthcarePage = async () => {
  const file = await fs.readFile(
    `${process.cwd()}/src/assets/healthcare/file.json`,
    'utf8'
  );
  const data = JSON.parse(file);

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
          {/* <Map lat={43.487113} lng={-79.720562} zoom={12.27} /> */}
        </div>
      </section>
      <Healthcare id="banks" data={data.healthcare} />
    </main>
  );
};

export default HealthcarePage;
