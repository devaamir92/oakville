import React from 'react';

import Map from '@components/Mapbox';
import Link from 'next/link';

const schoolsTypes = [
  {
    type: 'Montessori',
    link: 'montessori',
  },
  {
    type: 'Public',
    link: 'public?grade=elementary',
  },
  {
    type: 'Private',
    link: 'private?grade=elementary',
  },
  {
    type: 'Catholic',
    link: 'catholic?grade=elementary',
  },
];

const Schools = () => {
  return (
    <main className="container flex h-full flex-col gap-4 py-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">Schools in the community</h2>
        <hr className="my-2 border-gray-300" />
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(100vh - 228px)',
          }}
        >
          <Map />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {schoolsTypes.map(schoolType => (
          <Link
            key={schoolType.type}
            href={`/schools/${schoolType.link}`}
            className="flex flex-col items-center justify-center rounded border border-gray-300 bg-white p-4 transition-colors duration-300 ease-in-out hover:bg-gray-100"
          >
            <h3 className="text-lg font-medium">{schoolType.type}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Schools;
