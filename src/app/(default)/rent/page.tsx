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
    location: 'Oakville Ontario L6K 2H2',
    bedrooms: '4 Beds',
    bathrooms: '3 Baths',
    parking: '0 Parking',
    price: '950,000',
    imageUrl: '/jpg/listing/3.jpg',
    listingStatus: 'For Sale',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/jpg/listing/4.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6M 4P1',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '800,000',
    imageUrl: '/jpg/listing/5.jpg',
    listingStatus: 'For Sale',
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
    location: 'Oakville Ontario L6R 0R3',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/jpg/listing/7.jpg',
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
    location: 'Oakville Ontario L6T 3R5',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,100,000',
    imageUrl: '/jpg/listing/9.jpg',
    listingStatus: 'For Sale',
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
    propertyType: 'Par',
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

const Page: React.FC<PageProps> = ({ searchParams }) => {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 overflow-y-auto bg-white px-4 py-4 xl:w-1/2 2xl:w-2/5',
        {
          'w-full bg-transparent px-0 xl:w-full 2xl:w-full':
            searchParams?.view === 'list',
          'container mx-auto': searchParams?.view === 'list',
        }
      )}
    >
      <h6
        className={cn('text-2xl font-semibold text-gray-800', {
          'text-center': searchParams?.view === 'list',
        })}
      >
        Properties for Rent
      </h6>
      <div
        className={cn('grid grid-cols-2 gap-4', {
          'xl:grid-cols-4': searchParams?.view === 'list',
        })}
      >
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
          />
        ))}
      </div>
      <Pagination totalPages={11} currentPage={3} />
    </section>
  );
};

export default Page;
