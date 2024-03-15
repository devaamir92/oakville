import React from 'react';
import type { Metadata } from 'next';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { Desktop, Mobile } from '@components/ua';

import Hero from '@components/landing/Hero';
import CTASection from '@components/landing/CTA';
import JustSold from '@components/landing/JustSold';
import DailyListing from '@components/landing/DailyListing';
import FeatureListing from '@components/landing/FeatureListing';
import ListingTypes from '@components/landing/ListingTypes/Index';
import HeroMobile from '@components/landing/Hero/Mobile';
import { getSession } from '@lib/getsession';
import Community from '@components/Community';

export const metadata: Metadata = {
  title: 'The Preserve Oakville | Luxury properties for Sale, Homes in Canada',
  description:
    "Explore The Preserve Oakville for luxury property for sale in Canada. Discover serene living in one of Oakville's best neighborhoods. Find your dream home today!",
};

const data = [
  {
    title: 'Schools in The Preserve Oakville',
    imageUrl: '/images/jpg/community/school.jpg',
    href: '/schools',
    alt: 'Schools in The Preserve Oakville',
  },
  {
    title: 'Banks in The Preserve Oakville',
    imageUrl: '/images/jpg/community/banks.jpg',
    href: '/banks',
    alt: 'Banks in The Preserve Oakville',
  },
  {
    title: 'Healthcare Facilities in The Preserve Oakville',
    imageUrl: '/images/jpg/community/hospitals-walk-in-clinics-vets.jpg',
    href: '/healthcare-facilities',
    alt: 'Healthcare Facilities in The Preserve Oakville',
  },
  {
    title: 'Parks & Rec in The Preserve Oakville',
    imageUrl: '/images/jpg/community/parks-&-Rec.jpg',
    href: '/parks-rec',
    alt: 'Parks & Rec in The Preserve Oakville',
  },
  {
    title: 'Religious Places in The Preserve Oakville',
    imageUrl: '/images/jpg/community/religious-places.jpg',
    href: '/religious-places',
    alt: '',
  },
  {
    title: 'Stores in The Preserve Oakville',
    imageUrl: '/images/jpg/community/stores.jpg',
    href: '/stores',
    alt: 'Stores in The Preserve Oakville',
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
    'Br_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
    'Community',
    'S_r',
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
    'Br_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
    'Community',
    'S_r',
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

const getFeaturedProperties = async () => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.setJoin({
    field: 'property',
    select: [
      'Ml_num',
      'Addr',
      'Unit_num',
      'Apt_num',
      'Lp_dol',
      'Br',
      'Bath_tot',
      'Park_spcs',
      'Br_plus',
      'Status',
      'Is_locked',
      'Slug',
      'Dom',
      'Community',
      'S_r',
      'Is_locked',
    ],
  });

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/featured?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['featured'],
      },
      cache: 'no-cache',
    }
  );

  const responce = await res.json();
  const shortData = responce.slice(0, 4);
  return shortData;
};

const page = async () => {
  const [newData, soldData, featureData] = await Promise.all([
    getProperties(),
    getSoldProperties(),
    getFeaturedProperties(),
  ]);

  const session = await getSession();

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
        <FeatureListing rows={featureData} session={session} />
        <DailyListing rows={newData} session={session} />
      </div>
      <JustSold rows={soldData} session={session} />
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
          <div className="flex-1">
            <Community data={data} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
