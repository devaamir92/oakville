import { promises as fs } from 'fs';

// import Map from '@components/Mapbox';

import BankCard from '../_components/BankCard';
import MapPinLocation from '@components/MapPinLocation';

const BanksPage = async () => {
  const file = await fs.readFile(
    `${process.cwd()}/src/assets/banks/file.json`,
    'utf8'
  );
  const banksData = JSON.parse(file);

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
          {/* <MapPinLocation
            data={[
              {
                Lng: '-79.7976',
                Lat: '43.4328',
              },
            ]}
          /> */}
        </div>
      </section>

      <BankCard id="banks" data={banksData.banks} />
    </main>
  );
};

export default BanksPage;
