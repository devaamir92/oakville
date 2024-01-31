import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/ListingCard';

const data = [
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/jpg/listing/3.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Townhouse',
  },

  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/jpg/listing/5.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,200,000',
    imageUrl: '/jpg/listing/7.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Townhouse',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/jpg/listing/9.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Detached',
  },
];

function JustSold() {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex flex-col items-center justify-center gap-1 pb-8">
          <h2 className="text-2xl font-semibold">Sold</h2>
          <p className="">
            Real estate boards require you to be signed in to access sold prices
            history.
          </p>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(item => (
            <Card
              key={item.location}
              bathrooms={item.bathrooms}
              bedrooms={item.bedrooms}
              imageUrl={item.imageUrl}
              location={item.location}
              price={item.price}
              parking={item.parking}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 rounded bg-primary-200 px-3 py-1.5 text-center text-sm font-medium text-primary-700"
          >
            See More <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JustSold;
