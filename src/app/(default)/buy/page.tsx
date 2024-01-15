import React from 'react';

import Card from '@components/PropertyCard';
import Toolbar from '@components/Toolbar';

const data = [
  {
    location: 'Oakville Ontario L6H 0V2',
    bedrooms: '2',
    bathrooms: '4',
    price: '600,000',
    imageUrl: '/jpg/listing/1.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3',
    bathrooms: '2',
    price: '750,000',
    imageUrl: '/jpg/listing/2.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6K 2H2',
    bedrooms: '4',
    bathrooms: '3',
    price: '950,000',
    imageUrl: '/jpg/listing/3.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2',
    bathrooms: '2',
    price: '550,000',
    imageUrl: '/jpg/listing/4.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6M 4P1',
    bedrooms: '3',
    bathrooms: '3',
    price: '800,000',
    imageUrl: '/jpg/listing/5.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Par',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4',
    bathrooms: '4',
    price: '1,200,000',
    imageUrl: '/jpg/listing/6.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6R 0R3',
    bedrooms: '2',
    bathrooms: '2',
    price: '550,000',
    imageUrl: '/jpg/listing/7.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3',
    bathrooms: '3',
    price: '750,000',
    imageUrl: '/jpg/listing/8.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Par',
  },
  {
    location: 'Oakville Ontario L6T 3R5',
    bedrooms: '4',
    bathrooms: '4',
    price: '1,100,000',
    imageUrl: '/jpg/listing/9.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6V 4H6',
    bedrooms: '2',
    bathrooms: '2',
    price: '600,000',
    imageUrl: '/jpg/listing/10.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6W 1M8',
    bedrooms: '3',
    bathrooms: '3',
    price: '850,000',
    imageUrl: '/jpg/listing/11.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Par',
  },
  {
    location: 'Oakville Ontario L6X 5A6',
    bedrooms: '4',
    bathrooms: '4',
    price: '1,250,000',
    imageUrl: '/jpg/listing/12.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Detached',
  },
];

function page() {
  return (
    <div>
      <Toolbar />
      <div className="flex justify-between">
        <div className="flex-1 bg-gray-200" />
        <div className="mb-2 w-2/5 bg-white px-2">
          <h6 className="py-3 text-xl font-medium">
            Bungalows for sale in Mississauga , 126 Listings
          </h6>
          <div className="grid grid-cols-2 gap-3">
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
        </div>
      </div>
    </div>
  );
}

export default page;
