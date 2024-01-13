import React from 'react';

import Image from 'next/image';

function ListingTypes() {
  return (
    <section className="px-4 py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-center justify-center rounded bg-gray-100 p-6">
            <div className="flex items-center gap-5 ">
              <Image
                src="/png/building.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <h3 className="mt-2 text-xl font-semibold">Condos</h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-100 p-6">
            <div className="flex items-center gap-5 ">
              <Image
                src="/png/townhouse.png"
                alt="Picture of the author"
                width={60}
                height={60}
              />
              <h3 className="mt-2 text-lg font-semibold">Townhouses</h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-100 p-6">
            <div className="flex items-center gap-5 ">
              <Image
                src="/png/detached.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <h3 className="mt-2 text-lg font-semibold">Detached</h3>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-100 p-6">
            <div className="flex items-center gap-5 ">
              <Image
                src="/png/sold.png"
                alt="Picture of the author"
                width={60}
                height={60}
              />
              <h3 className="mt-2 text-lg font-semibold">Sold</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListingTypes;
