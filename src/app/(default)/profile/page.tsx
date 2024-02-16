import Image from 'next/image';
import React from 'react';
import {
  BsEnvelopeFill,
  BsKey,
  BsPencil,
  BsTelephoneFill,
} from 'react-icons/bs';

import { Button } from '@components/ui/Button';

import Card from '@components/ListingCard';

const data = [
  {
    location: 'Oakville Ontario L6H 0V2',
    bedrooms: '2 Beds',
    bathrooms: '4 Baths',
    price: '600,000',
    imageUrl: '/images/webp/photo1.webp',
    parking: '0 Parking',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 Beds',
    bathrooms: '2 Baths',
    price: '750,000',
    imageUrl: '/images/webp/photo.webp',
    parking: '1 Parking',
    propertyType: 'Townhouse',
  },
  {
    location: 'Oakville Ontario L6K 2H2',
    bedrooms: '4 Beds',
    bathrooms: '3 Baths',
    price: '950,000',
    imageUrl: '/images/webp/photo2.webp',
    parking: '2 Parking',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    price: '550,000',
    imageUrl: '/images/webp/photo3.webp',
    parking: '1 Parking',
    propertyType: 'Condo',
  },
];

const Page = () => {
  return (
    <main className="container flex flex-col gap-6 py-10">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative aspect-square size-32">
            <Image
              src="/images/webp/user.webp"
              alt="Profile"
              fill
              className="object-fill"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium">User Name</h1>
            <p className="flex items-center gap-1 text-gray-500">
              <BsEnvelopeFill /> user.text@gmail.com
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <BsTelephoneFill /> 905-884-8800
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="gap-2">
            <BsPencil />
            Edit Profile
          </Button>
          <Button variant="default" size="sm" className="gap-2 bg-primary-400">
            <BsKey />
            Reset Password
          </Button>
        </div>
      </section>
      <div className="flex flex-1 flex-col gap-2">
        <h2 className="text-lg ">Favourites</h2>
        <hr />
      </div>

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
    </main>
  );
};

export default Page;
