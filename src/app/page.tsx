import React from 'react';
import type { Metadata } from 'next';

import { Desktop, Mobile } from '@components/ua';

import Hero from '@components/landing/Hero';
import Community from '@components/Community';
import CTASection from '@components/landing/CTA';
import JustSold from '@components/landing/JustSold';
import HeroMobile from '@components/landing/Hero/Mobile';
import DailyListing from '@components/landing/DailyListing';
import FeatureListing from '@components/landing/FeatureListing';
import ListingTypes from '@components/landing/ListingTypes/Index';

import { getSession } from '@lib/getsession';
import { getRecentlySold } from '@lib/api/properties/getRecentlySold';
import { getDailyListing } from '@lib/api/properties/getDailyListing';
import { getFeaturedListing } from '@lib/api/properties/getFeaturedListing';

export const metadata: Metadata = {
  title: 'The Preserve Oakville | Luxury Homes for Sale, Homes in Canada',
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
    title: 'Banks near The Preserve Oakville',
    imageUrl: '/images/jpg/community/banks.jpg',
    href: '/banks',
    alt: 'Banks near The Preserve Oakville',
  },
  {
    title: 'Healthcare near The Preserve, Oakville.',
    imageUrl: '/images/jpg/community/hospitals-walk-in-clinics-vets.jpg',
    href: '/healthcare-facilities',
    alt: 'Healthcare facilities near The Preserve Oakville',
  },
  {
    title: 'Parks & Rec in The Preserve Oakville',
    imageUrl: '/images/jpg/community/parks-&-Rec.jpg',
    href: '/parks-rec',
    alt: 'Parks & Rec in The Preserve Oakville',
  },
  {
    title: 'Religious Places near The Preserve Oakville',
    imageUrl: '/images/jpg/community/religious-places.jpg',
    href: '/religious-places',
    alt: '',
  },
  {
    title: 'Stores near the preserve Oakville',
    imageUrl: '/images/jpg/community/stores.jpg',
    href: '/stores',
    alt: 'stores near the preserve Oakville',
  },
];

const page = async () => {
  const [dailyListing, recentlySold, featureListing] = await Promise.all([
    getDailyListing(),
    getRecentlySold(),
    getFeaturedListing(),
  ]);

  const session = await getSession();
  return (
    <main className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <Desktop>
        <Hero />
      </Desktop>
      <Mobile>
        <HeroMobile />
      </Mobile>
      <ListingTypes />
      <div className="flex flex-col gap-4 bg-[#f3f4f6] py-4 md:gap-8 md:py-8">
        <FeatureListing rows={featureListing} session={session} />
        <DailyListing rows={dailyListing.data} session={session} />
      </div>
      <JustSold rows={recentlySold.data} session={session} />
      <CTASection />

      <section>
        <div className="container flex flex-col gap-4 md:gap-8">
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
