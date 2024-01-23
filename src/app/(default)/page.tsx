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
    bedrooms: '2 Beds',
    bathrooms: '4 Baths',
    price: '600,000',
    imageUrl: '/webp/photo1.webp',
    listingStatus: 'For Sale',
    parking: '0 Parking',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 Beds',
    bathrooms: '2 Baths',
    price: '750,000',
    imageUrl: '/webp/photo.webp',
    listingStatus: 'For Sale',
    parking: '1 Parking',
    propertyType: 'Townhouse',
  },
  {
    location: 'Oakville Ontario L6K 2H2',
    bedrooms: '4 Beds',
    bathrooms: '3 Baths',
    price: '950,000',
    imageUrl: '/webp/photo2.webp',
    listingStatus: 'For Sale',
    parking: '2 Parking',
    propertyType: 'Detached',
  },
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    price: '550,000',
    imageUrl: '/webp/photo3.webp',
    listingStatus: 'For Sale',
    parking: '1 Parking',
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
          <div className="flex flex-col gap-1">
            <h2 className="text-center text-2xl font-semibold">
              Neighborhood Guide
            </h2>
            <p className="text-center">
              Browse our neighborhood guides to learn about The Preserve
              Oakville.
            </p>
          </div>
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
