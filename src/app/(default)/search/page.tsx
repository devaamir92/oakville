import type { Metadata } from 'next';

import { getSession } from '@lib/getsession';
import { getFeaturedListing } from '@lib/api/properties/getFeaturedListing';

import Search from './_components/Search';

export const metadata: Metadata = {
  title: 'All New Modern listings Homes for Sale in Preserve Oakville',
  description:
    'Search all New Modern listings Homes for sale in The Preserve Oakville. Find your new houses & condos for sale in Oakville and surrounding area. Get Now!',
};

const popularSearches = [
  {
    query: 'oakville houses for sale',
    link: '/search?tag=Rural Oakville',
  },
  { query: 'homes for sale', link: '/search?tag=Uptown Core' },
  {
    query: 'New Homes',
    link: '/search?tag=On Preserve Dr',
  },
  {
    query: 'homes for sale in oakville',
    link: '/search?tag=The Preserve',
  },
  {
    query: 'oakville ontario real estate',
    link: '/search?tag=Rural Oakville',
  },
  { query: 'oakville house for sale', link: '/search?tag=Uptown Core' },
  {
    query: 'oakville homes',
    link: '/search?tag=On Preserve Dr',
  },
  {
    query: 'new developments',
    link: '/search?tag=The Preserve',
  },
  {
    query: 'houses for rent',
    link: '/search?tag=Rural Oakville',
  },
  { query: 'real estate oakville', link: '/search?tag=Uptown Core' },
  {
    query: 'drive in oakville',
    link: '/search?tag=On Preserve Dr',
  },
  {
    query: 'apartments for rent oakville',
    link: '/search?tag=The Preserve',
  },
  {
    query: 'oakville properties for sale',
    link: '/search?tag=Rural Oakville',
  },
  { query: 'oakville rentals', link: '/search?tag=Uptown Core' },
  {
    query: 'fernbrook homes',
    link: '/search?tag=On Preserve Dr',
  },
  {
    query: 'house for sale oakville',
    link: '/search?tag=The Preserve',
  },
];

const AdvancedSearch = async ({ searchParams }: any) => {
  const featuresProperties = await getFeaturedListing();
  const session = await getSession();
  return (
    <Search
      session={session}
      featuredProperties={featuresProperties}
      popularSearches={popularSearches}
      params={searchParams}
    />
  );
};

export default AdvancedSearch;
