// import { promises as fs } from 'fs';

import geojsonData from '@assets/map/map.json';

import Mapbox from '@components/Mapbox';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
  };
}

// const getGeoJson = async () => {
//   const geoJson = await fs.readFile(
//     `${process.cwd()}/src/assets/map/map.json`,
//     'utf-8'
//   );

//   return JSON.parse(geoJson);
// };

const page: React.FC<PageProps> = async ({ searchParams }) => {
  if (searchParams?.view === 'list') return null;

  // const geojsonData = await getGeoJson();

  return (
    <section
      style={{
        height: 'calc(100vh - 70px - 48px)',
        top: 'calc(70px + 48px)',
      }}
      className="sticky left-0 flex-1"
    >
      <Mapbox
        geojson={geojsonData}
        lat={43.47151010338547}
        lng={-79.74806084049912}
        zoom={11.9}
      />
    </section>
  );
};

export default page;
