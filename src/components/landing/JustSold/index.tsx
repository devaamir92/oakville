import React from 'react';
import Link from 'next/link';

import Card from '@components/PropertyCard';

const data = [
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3',
    bathrooms: '2',
    price: '750,000',
    imageUrl: '/jpg/listing/3.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Townhouse',
  },

  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2',
    bathrooms: '2',
    price: '550,000',
    imageUrl: '/jpg/listing/5.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4',
    bathrooms: '4',
    price: '1,200,000',
    imageUrl: '/jpg/listing/7.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Townhouse',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3',
    bathrooms: '3',
    price: '750,000',
    imageUrl: '/jpg/listing/9.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Detached',
  },
];

function JustSold() {
  return (
    <section className="bg-[#f3f4f6] px-4 pb-10">
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="py-6  text-2xl font-semibold">Just Sold</h2>
        </div>
        <div className="mb-2 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(item => (
            <Card
              key={item.location}
              bathrooms={item.bathrooms}
              bedrooms={item.bedrooms}
              imageUrl={item.imageUrl}
              listingStatus={item.listingStatus}
              location={item.location}
              price={item.price}
              propertyType={item.propertyType}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            href="/"
            className="inline-block rounded-md  text-center text-base font-medium text-primary-500 hover:text-primary-700"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JustSold;
