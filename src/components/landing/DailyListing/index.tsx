import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import Card from '@components/PropertyCard';

const data = [
  {
    location: 'Oakville Ontario L6H 0V2',
    bedrooms: '2 Beds',
    bathrooms: '4 Baths',
    parking: '1 Parking',
    price: '600,000',
    imageUrl: '/jpg/listing/1.jpg',
    listingStatus: 'For Sale',
  },
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/jpg/listing/2.jpg',
    listingStatus: 'For Rent',
  },

  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/jpg/listing/4.jpg',
    listingStatus: 'For Rent',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,200,000',
    imageUrl: '/jpg/listing/6.jpg',
    listingStatus: 'For Sale',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/jpg/listing/8.jpg',
    listingStatus: 'For Rent',
  },

  {
    location: 'Oakville Ontario L6V 4H6',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '600,000',
    imageUrl: '/jpg/listing/10.jpg',
    listingStatus: 'For Sale',
  },
  {
    location: 'Oakville Ontario L6W 1M8',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '850,000',
    imageUrl: '/jpg/listing/11.jpg',
    listingStatus: 'For Sale',
  },
  {
    location: 'Oakville Ontario L6X 5A6',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,250,000',
    imageUrl: '/jpg/listing/12.jpg',
    listingStatus: 'For Rent',
  },
];

function DailyListing() {
  return (
    <section className="bg-[#f3f4f6] px-4">
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="py-6  text-2xl font-semibold">New Listings</h2>
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

export default DailyListing;
