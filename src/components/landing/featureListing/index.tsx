import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/PropertyCard';

const data = [
  {
    location: 'Oakville Ontario L6X 5A6',
    bedrooms: '4 beds',
    bathrooms: '4 baths',
    parking: '0 parking',
    price: '1,250,000',
    imageUrl: '/jpg/listing/12.jpg',
    listingStatus: 'For Rent',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 beds',
    bathrooms: '2 baths',
    parking: '1 parking',
    price: '550,000',
    imageUrl: '/jpg/listing/4.jpg',
    listingStatus: 'For Rent',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4 beds',
    bathrooms: '4 baths',
    parking: '0 parking',
    price: '1,200,000',
    imageUrl: '/jpg/listing/6.jpg',
    listingStatus: 'For Sale',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 beds',
    bathrooms: '3 baths',
    parking: '1 parking',
    price: '750,000',
    imageUrl: '/jpg/listing/8.jpg',
    listingStatus: 'For Rent',
  },
];

function FeatureListing() {
  return (
    <section className="bg-[#f3f4f6] px-4">
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="py-6  text-2xl font-semibold">Feature Listing</h2>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(item => (
            <Card
              key={item.location}
              bathrooms={item.bathrooms}
              bedrooms={item.bedrooms}
              imageUrl={item.imageUrl}
              listingStatus={item.listingStatus}
              location={item.location}
              price={item.price}
              parking={item.parking}
              statusShow
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

export default FeatureListing;
