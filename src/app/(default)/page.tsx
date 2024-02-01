import React from 'react';

import { Desktop, Mobile } from '@components/ua';

import Card from '@components/ListingCard';
import Hero from '@components/landing/Hero';
import CTASection from '@components/landing/CTA';
import JustSold from '@components/landing/JustSold';
import DailyListing from '@components/landing/DailyListing';
import FeatureListing from '@components/landing/FeatureListing';
import ListingTypes from '@components/landing/ListingTypes/Index';
import HeroMobile from '@components/landing/Hero/Mobile';

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

function page() {
  return (
    <main className="flex flex-col gap-8 pb-8">
      <Desktop>
        <Hero />
      </Desktop>
      <Mobile>
        <HeroMobile />
      </Mobile>
      <ListingTypes />
      <div className="flex flex-col gap-8 bg-[#f3f4f6] py-8">
        <FeatureListing />
        <DailyListing />
      </div>
      <JustSold />
      <CTASection />

      <section>
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
                location={item.location}
                price={item.price}
                parking={item.parking}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
