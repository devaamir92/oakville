import React from 'react';
import dynamic from 'next/dynamic';

import Hero from '@components/landing/Hero';
import CTASection from '@components/landing/CTA';
import Listing from '@components/landing/Listing';
import ListingTypes from '@components/landing/ListingTypes/Index';
import Card from '@components/PropertyCard';

const BlogSection = dynamic(() => import('@components/landing/Blog'));

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
    listingStatus: 'For Sale',
    propertyType: 'Townhouse',
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
    listingStatus: 'For Sale',
    propertyType: 'Condo',
  },
];

function page() {
  return (
    <main>
      <Hero />
      <ListingTypes />
      <Listing />
      <CTASection />

      <section className="bg-[#f3f4f6] px-4 py-10">
        <div className="container flex flex-col gap-10">
          <h2 className="text-center text-2xl font-semibold">
            Per-Con Assignment
          </h2>
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
                propertyType={item.propertyType}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
