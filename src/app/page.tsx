/* eslint-disable react/no-danger */
import React from 'react';
import type { Metadata } from 'next';
import type { WebPage, WithContext } from 'schema-dts';

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
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The Preserve Oakville | Luxury Homes for Sale, Homes in Canada',
    template: '%s | The Preserve Oakville',
  },
  description:
    "Explore The Preserve Oakville for luxury property for sale in Canada. Discover serene living in one of Oakville's best neighborhoods. Find your dream home today!",
  openGraph: {
    title: {
      default: 'The Preserve Oakville | Luxury Homes for Sale, Homes in Canada',
      template: '%s | The Preserve Oakville',
    },
    description:
      'Luxury real estate listings in Oakville, Ontario. Discover your dream home with The Preserve Oakville.',
    url: 'https://preserveoakville.ca/',
    siteName: 'The Preserve Oakville',
    type: 'website',
    countryName: 'Canada',
    alternateLocale: 'en_CA',
    emails: ['info@preserveoakville.com'],
    locale: 'en_CA',
    phoneNumbers: ['+1-416-837-2000', '+1-647-929-9072'],
    images: [
      {
        url: 'https://preserveoakville.ca/images/png/oakville-logo.png',
        width: 800,
        height: 600,
        alt: 'The Preserve Oakville',
      },
    ],
  },
  twitter: {
    site: '@preserveoakville',
    images: [
      {
        url: 'https://preserveoakville.ca/images/png/oakville-logo.png',
        width: 800,
        height: 600,
        alt: 'The Preserve Oakville',
      },
    ],
    card: 'summary_large_image',
    title: 'The Preserve Oakville | Luxury Homes for Sale, Homes in Canada',
    description:
      'Luxury real estate listings in Oakville, Ontario. Discover your dream home with The Preserve Oakville.',
  },
};

const jsonLd: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://preserveoakville.ca/',
  name: 'The Preserve Oakville',
  description:
    'Luxury real estate listings in Oakville, Ontario. Discover your dream home with The Preserve Oakville.',
};
const data = [
  {
    title: 'Schools For The Preserve Oakville',
    imageUrl: '/images/jpg/community/school.jpg',
    href: '/schools',
    alt: 'Schools',
  },
  {
    title: 'Banks For The Preserve Oakville',
    imageUrl: '/images/jpg/community/banks.jpg',
    href: '/banks',
    alt: 'Banks',
  },
  {
    title: 'Healthcare For The Preserve Oakville.',
    imageUrl: '/images/jpg/community/hospitals-walk-in-clinics-vets.jpg',
    href: '/healthcare-facilities',
    alt: 'Healthcare',
  },
  {
    title: 'Parks & Rec in The Preserve Oakville',
    imageUrl: '/images/jpg/community/parks-&-Rec.jpg',
    href: '/parks-rec',
    alt: 'Parks',
  },
  {
    title: 'Religious Places For The Preserve Oakville',
    imageUrl: '/images/jpg/community/religious-places.jpg',
    href: '/religious-places',
    alt: 'Religious Places',
  },
  {
    title: 'Stores For The Preserve Oakville',
    imageUrl: '/images/jpg/community/stores.jpg',
    href: '/stores',
    alt: 'Stores',
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
    <>
      <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
              <h6 className="text-center text-xl font-semibold md:text-2xl">
                Neighborhood Guide
              </h6>
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
      </div>
      <Footer />
    </>
  );
};

export default page;
