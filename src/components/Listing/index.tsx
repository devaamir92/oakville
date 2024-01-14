import React from 'react';
import Image from 'next/image';

import { FaLocationDot } from 'react-icons/fa6';

import BedIcon from '@icons/bedIcon';
import BathIcon from '@icons/bathIcon';
import CondoHome from '@icons/condoHome';

const data = [
  {
    address: 'Oakville Ontario L6H 0V2',
    bed: '2 Bed',
    bath: '4 Bath',
    price: '600,000',
    imageUrl: '/jpg/listing/1.jpg',
    for: 'For Sale',
    type: 'Condo',
  },
  {
    address: 'Oakville Ontario L8N 1E9',
    bed: '3 Bed',
    bath: '2 Bath',
    price: '750,000',
    imageUrl: '/jpg/listing/2.jpg',
    for: 'For Rent',
    type: 'House',
  },
  {
    address: 'Oakville Ontario L6K 2H2',
    bed: '4 Bed',
    bath: '3 Bath',
    price: '950,000',
    imageUrl: '/jpg/listing/3.jpg',
    for: 'For Sale',
    type: 'Townhouse',
  },
  {
    address: 'Oakville Ontario L6L 2Y4',
    bed: '2 Bed',
    bath: '2 Bath',
    price: '550,000',
    imageUrl: '/jpg/listing/4.jpg',
    for: 'For Rent',
    type: 'Condo',
  },
  {
    address: 'Oakville Ontario L6M 4P1',
    bed: '3 Bed',
    bath: '3 Bath',
    price: '800,000',
    imageUrl: '/jpg/listing/5.jpg',
    for: 'For Sale',
    type: 'House',
  },
  {
    address: 'Oakville Ontario L6P 1W1',
    bed: '4 Bed',
    bath: '4 Bath',
    price: '1,200,000',
    imageUrl: '/jpg/listing/6.jpg',
    for: 'For Sale',
    type: 'Townhouse',
  },
  {
    address: 'Oakville Ontario L6R 0R3',
    bed: '2 Bed',
    bath: '2 Bath',
    price: '550,000',
    imageUrl: '/jpg/listing/7.jpg',
    for: 'For Sale',
    type: 'Condo',
  },
  {
    address: 'Oakville Ontario L6S 2G5',
    bed: '3 Bed',
    bath: '3 Bath',
    price: '750,000',
    imageUrl: '/jpg/listing/8.jpg',
    for: 'For Rent',
    type: 'House',
  },
  {
    address: 'Oakville Ontario L6T 3R5',
    bed: '4 Bed',
    bath: '4 Bath',
    price: '1,100,000',
    imageUrl: '/jpg/listing/9.jpg',
    for: 'For Sale',
    type: 'Townhouse',
  },
  {
    address: 'Oakville Ontario L6V 4H6',
    bed: '2 Bed',
    bath: '2 Bath',
    price: '600,000',
    imageUrl: '/jpg/listing/10.jpg',
    for: 'For Sale',
    type: 'Condo',
  },
  {
    address: 'Oakville Ontario L6W 1M8',
    bed: '3 Bed',
    bath: '3 Bath',
    price: '850,000',
    imageUrl: '/jpg/listing/11.jpg',
    for: 'For Sale',
    type: 'House',
  },
  {
    address: 'Oakville Ontario L6X 5A6',
    bed: '4 Bed',
    bath: '4 Bath',
    price: '1,250,000',
    imageUrl: '/jpg/listing/12.jpg',
    for: 'For Rent',
    type: 'Townhouse',
  },
];

function Listing() {
  return (
    <section className="bg-[#f3f4f6] px-4 py-10">
      <div className="container flex flex-col gap-10">
        <h2 className="text-center text-2xl font-semibold">Recent Listings</h2>
        <div className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(item => (
            <div
              key={item.address}
              className="group flex flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-200 ease-in-out hover:shadow-xl"
            >
              <div className="relative h-60">
                <Image src={item.imageUrl} fill alt={item.address} />
                <div className="absolute right-3 top-3">
                  <span className="rounded bg-primary-500 px-3 py-1.5 text-sm uppercase text-white">
                    {item.for}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="rounded bg-primary px-3 py-1.5 text-sm uppercase text-white">
                    $ {item.price}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-3">
                <div className="relative flex items-center gap-1 text-base font-medium text-gray-700">
                  <FaLocationDot size={16} className="mb-1" />
                  <span>{item.address}</span>
                </div>
                <div className="flex justify-start gap-1 text-center text-gray-500">
                  <div className="flex items-center gap-1 border-r border-gray-300 pr-4">
                    <BedIcon className="mt-1 fill-gray-500" />
                    <span className="mt-0.5 text-sm">{item.bed}</span>
                  </div>
                  <div className="flex items-center gap-1 border-r border-gray-300 px-4">
                    <BathIcon className="fill-gray-500" />
                    <span className="mt-0.5 text-sm">{item.bath}</span>
                  </div>
                  <div className="flex items-center gap-1 pl-4">
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
