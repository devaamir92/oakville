import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/ListingCard';

const data = [
  {
    location: 'Oakville Ontario L6X 5A6',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,250,000',
    imageUrl: '/images/webp/listing/12.webp',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/images/webp/listing/4.webp',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,200,000',
    imageUrl: '/images/webp/listing/6.webp',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/images/webp/listing/8.webp',
  },
];

function FeatureListing() {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="pb-8  text-2xl font-semibold">Featured Listings</h2>
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
        {/* <div className="mt-3 flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 rounded bg-primary-200 px-3 py-1.5 text-center text-sm font-medium text-primary-700"
          >
            See More <FaArrowRight size={12} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default FeatureListing;
