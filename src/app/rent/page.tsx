import React from 'react';

import cn from '@utils/cn';
import Card from '@components/ListingCard';
import Pagination from '@components/ui/Pagination';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
  };
}

const data = [
  {
    location: 'Oakville Ontario L6H 0V2',
    bedrooms: '2 Beds',
    bathrooms: '4 Baths',
    parking: '1 Parking',
    price: '600,000',
    imageUrl: '/images/webp/listing/1.webp',
  },
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/images/webp/listing/2.webp',
  },
  {
    location: 'Oakville Ontario L6K 2H2',
    bedrooms: '4 Beds',
    bathrooms: '3 Baths',
    parking: '0 Parking',
    price: '950,000',
    imageUrl: '/images/webp/listing/3.webp',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/images/webp/listing/4.webp',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6M 4P1',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '800,000',
    imageUrl: '/images/webp/listing/5.webp',
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
    location: 'Oakville Ontario L6R 0R3',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/images/webp/listing/7.webp',
  },
  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/images/webp/listing/8.webp',
  },
  {
    location: 'Oakville Ontario L6T 3R5',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,100,000',
    imageUrl: '/images/webp/listing/9.webp',
  },
  {
    location: 'Oakville Ontario L6V 4H6',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '600,000',
    imageUrl: '/images/webp/listing/10.webp',
  },
  {
    location: 'Oakville Ontario L6W 1M8',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '850,000',
    imageUrl: '/images/webp/listing/11.webp',
    propertyType: 'Par',
  },
  {
    location: 'Oakville Ontario L6X 5A6',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,250,000',
    imageUrl: '/images/webp/listing/12.webp',
  },
];

const Page: React.FC<PageProps> = ({ searchParams }) => {
  return (
    <section
      className={cn(
        'container flex w-full flex-col gap-4 overflow-y-auto bg-white py-4 lg:w-1/2 2xl:w-2/5',
        {
          'w-full bg-transparent xl:w-full 2xl:w-full':
            searchParams?.view === 'list',
          ' mx-auto': searchParams?.view === 'list',
        }
      )}
    >
      <h1
        className={cn(
          'text-center text-2xl font-semibold text-gray-800 lg:text-left',
          {
            'text-center': searchParams?.view === 'list',
          }
        )}
      >
        Properties for Rent
      </h1>
      <div
        className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', {
          'xl:grid-cols-4': searchParams?.view === 'list',
        })}
      >
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
      <Pagination totalPages={11} currentPage={3} />
    </section>
  );
};

export default Page;
