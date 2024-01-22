import React from 'react';

import Hero from '@components/landing/Hero';
import ListingTypes from '@components/landing/ListingTypes/Index';
import DailyListing from '@components/landing/DailyListing';
import JustSold from '@components/landing/JustSold';
import CTASection from '@components/landing/CTA';
import Card from '@components/PropertyCard';
import FeatureListing from '@components/landing/featureListing';

const data = [
  {
    location: 'Oakville Ontario L6H 0V2',
    bedrooms: '2 beds',
    bathrooms: '4 baths',
    price: '600,000',
    imageUrl: '/webp/photo1.webp',
    listingStatus: 'For Sale',
    parking: '0 parking',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 beds',
    bathrooms: '2 baths',
    price: '750,000',
    imageUrl: '/webp/photo.webp',
    listingStatus: 'For Sale',
    parking: '1 parking',
    propertyType: 'Townhouse',
  },
  {
    location: 'Oakville Ontario L6K 2H2',
    bedrooms: '4 beds',
    bathrooms: '3 baths',
    price: '950,000',
    imageUrl: '/webp/photo2.webp',
    listingStatus: 'For Sale',
    parking: '2 parking',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 beds',
    bathrooms: '2 baths',
    price: '550,000',
    imageUrl: '/webp/photo3.webp',
    listingStatus: 'For Sale',
    parking: '1 parking',
    propertyType: 'Condo',
  },
];

function page() {
  return (
    <div>
      <Hero />
      <ListingTypes />
      <FeatureListing />
      <DailyListing />
      <JustSold />
      <CTASection />

      <section className="px-4 py-10">
        <div className="container flex flex-col gap-10">
          <h2 className="text-center text-2xl font-semibold">
            Neighborhood Guide
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
                parking={item.parking}
                statusShow
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
