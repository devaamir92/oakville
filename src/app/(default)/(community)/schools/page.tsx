import { promises as fs } from 'fs';

import React from 'react';

import Map from '@components/Mapbox';

import SchoolTable from '../_components/SchoolTable';
import SchoolsLinks from '../_components/SchoolsLinks';

export default async function Page() {
  const file = await fs.readFile(
    `${process.cwd()}/src/assets/schools/schools.json`,
    'utf8'
  );
  const data = JSON.parse(file);

  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Schools
      </h3>

      <section className="-mt-4 flex flex-col gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(100vh - 252px)',
          }}
        >
          <Map lat={43.487113} lng={-79.720562} zoom={12.27} />
        </div>
      </section>
      <SchoolsLinks />
      <SchoolTable
        id="publicschools"
        schoolType="Public Schools"
        data={data.publicSchools}
      />
      <SchoolTable
        id="catholicschools"
        schoolType="Catholic Schools"
        data={data.catholicSchools}
      />
      <SchoolTable
        id="montessorischools"
        schoolType="Montessori Schools"
        data={data.montessoriSchools}
      />
      <SchoolTable
        id="privateschools"
        schoolType="Private Schools"
        data={data.privateSchools}
      />
    </main>
  );
}
