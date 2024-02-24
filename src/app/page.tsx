import React from 'react';

import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { Desktop, Mobile } from '@components/ua';

import Card from '@components/ListingCard';
import Hero from '@components/landing/Hero';
import CTASection from '@components/landing/CTA';
import JustSold from '@components/landing/JustSold';
import DailyListing from '@components/landing/DailyListing';
import FeatureListing from '@components/landing/FeatureListing';
import ListingTypes from '@components/landing/ListingTypes/Index';
import HeroMobile from '@components/landing/Hero/Mobile';

export const metadata = {
  title: 'The Oakville Preserve',
  description: 'The Oakville Preserve is a real estate website.',
};

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

const getProperties = async () => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setFilter({
      field: 'Status',
      operator: '$eq',
      value: 'A',
    })
    .setFilter({
      field: 'S_r',
      operator: '$eq',
      value: 'Sale',
    });

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Unit_num',
    'Apt_num',
    'Lp_dol',
    'Br',
    'Bath_tot',
    'Park_spcs',
    'Rooms_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
  ]);

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['property'],
      },
      cache: 'no-cache',
    }
  );

  const responce = await res.json();
  const shortData = responce.data
    .sort((a: any, b: any) => a.Dom - b.Dom)
    .slice(0, 8);
  return shortData;
};
const getSoldProperties = async () => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setFilter({
      field: 'Status',
      operator: '$eq',
      value: 'U',
    })
    .setFilter({
      field: 'Lsc',
      operator: '$eq',
      value: 'Sld',
    });

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Unit_num',
    'Apt_num',
    'Lp_dol',
    'Lsc',
    'Br',
    'Bath_tot',
    'Park_spcs',
    'Rooms_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
  ]);

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['property'],
      },
      cache: 'no-cache',
    }
  );

  const responce = await res.json();
  const shortData = responce.data.slice(0, 4);
  return shortData;
};

const page = async () => {
  const [newData, soldData] = await Promise.all([
    getProperties(),
    getSoldProperties(),
  ]);

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
        <DailyListing rows={newData} />
      </div>
      <JustSold rows={soldData} />
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
};

export default page;
