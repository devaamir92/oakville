import React from 'react';
import Image from 'next/image';

import { FaLocationDot } from 'react-icons/fa6';

import SizeIcon from '@icons/sizeIcon';
import BedIcon from '@icons/bedIcon';
import BathIcon from '@icons/bathIcon';
import CondoHome from '@icons/condoHome';

const item = {
  name: '123 ABC Ave, XYZ, ON',
  bed: '2 Bed',
  bath: '4 Bath',
  sqft: '1199 sqft',
  price: '600,000',
  Imageurl: '/jpg/listing/1.jpeg',
  forSale: true,
  type: 'Condo',
};

function Listing() {
  return (
    <section className="bg-[#f3f4f6] px-4 py-10">
      <div className="container flex flex-col gap-10">
        <h2 className="text-center text-2xl font-semibold">Recent Listings</h2>
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map(index => (
            <div
              key={item.name + index}
              className="group flex flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-200 ease-in-out hover:shadow-xl"
            >
              <div className="relative h-60">
                <Image src={item.Imageurl} fill alt={item.name} />
                <div className="absolute right-3 top-3">
                  <span className="rounded bg-primary-500 px-3 py-1.5 text-sm uppercase text-white">
                    {item.forSale ? 'For Sale' : 'Sold'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="rounded bg-primary px-3 py-1.5 text-sm uppercase text-white">
                    $ {item.price}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-3">
                <div className="relative flex items-center gap-1 text-base font-medium text-gray-700">
                  <FaLocationDot size={16} className="mb-1" />
                  <span>{item.name}</span>
                </div>
                <div className="flex justify-between gap-4 text-center text-gray-500">
                  <div className="flex flex-1 items-center gap-1 border-r border-gray-300">
                    <SizeIcon className="fill-gray-500" />
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <div className="flex flex-1 items-center gap-1 border-r border-gray-300">
                    <BedIcon className="mt-1 fill-gray-500" />
                    <span className="mt-0.5 text-sm">{item.bed}</span>
                  </div>
                  <div className="flex flex-1 items-center gap-1 border-r border-gray-300">
                    <BathIcon className="fill-gray-500" />
                    <span className="mt-0.5 text-sm">{item.bath}</span>
                  </div>
                  <div className="flex flex-1 items-center gap-1">
                    <CondoHome className="fill-gray-500" />
                    <span className="text-sm">{item.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Listing;
