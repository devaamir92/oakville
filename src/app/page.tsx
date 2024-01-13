import React from 'react';
import dynamic from 'next/dynamic';

import Header from '@components/Header';
import Hero from '@components/Hero';
import Footer from '@components/Footer';

import CTASection from '@components/CTA';
import Listing from '@components/Listing';
import ListingTypes from '@components/ListingTypes/Index';

const BlogSection = dynamic(() => import('@components/Blog'));

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <ListingTypes />
      <Listing />
      <CTASection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default page;
