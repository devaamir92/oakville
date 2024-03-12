import React from 'react';
import type { Metadata } from 'next';

import data from '@assets/schools/file.json';

import MapPinLocation from '@components/MapPinLocation';

import SchoolTable from '../_components/SchoolTable';
import SchoolsLinks from '../_components/SchoolsLinks';

export const metadata: Metadata = {
  title: 'Schools Near The Preserve Oakville: A Great Place for Education',
  description:
    'Discover the best schools near The Preserve Oakville, making it an ideal place for families. Explore top-rated public and private schools in the area. Read more.',
};

export default async function Page() {
  return (
    <main className="container mx-auto flex flex-col gap-8 py-4 lg:max-w-[1140px]">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Schools
      </h3>

      <section className="-mt-4 flex flex-col gap-8">
        <div className="h-96 overflow-hidden rounded lg:h-[calc(100vh-252px)]">
          <MapPinLocation />
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
