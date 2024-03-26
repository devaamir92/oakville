import React from 'react';
import type { Metadata } from 'next';

import { RiGraduationCapFill } from 'react-icons/ri';

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
  // const getdata = () => {
  //   const schools = [
  //     ...data.publicSchools,
  //     ...data.catholicSchools,
  //     ...data.montessoriSchools,
  //     ...data.privateSchools,
  //   ];

  //   return schools.map(school => {
  //     return {
  //       name: school.name,
  //       address: school.address,
  //       Lat: school.lat,
  //       Lng: school.lng,
  //     };
  //   });
  // };

  const getdata = () => {
    const schools = [
      ...data.publicSchools.map(school => ({
        ...school,
        type: 'Public Schools',
      })),
      ...data.catholicSchools.map(school => ({
        ...school,
        type: 'Catholic Schools',
      })),
      ...data.montessoriSchools.map(school => ({
        ...school,
        type: 'Montessori Schools',
      })),
      ...data.privateSchools.map(school => ({
        ...school,
        type: 'Private Schools',
      })),
    ];

    return schools.map(school => {
      return {
        name: school.name,
        address: school.address,
        Lat: school.lat,
        Lng: school.lng,
        type: school.type,
      };
    });
  };

  return (
    <div className="container mx-auto flex flex-col gap-8 py-4 lg:max-w-[1140px]">
      <h1 className="text-center text-xl font-medium">
        Schools for The Preserve Oakville
      </h1>

      <section className="-mt-4 flex flex-col gap-8">
        <div className="h-96 overflow-hidden rounded lg:h-[calc(90vh-252px)]">
          <MapPinLocation
            icon={<RiGraduationCapFill size={16} />}
            data={getdata()}
          />
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
    </div>
  );
}
