import { getSession } from '@lib/getsession';
import { getFeaturedListing } from '@lib/api/properties/getFeaturedListing';

import Search from './_components/Search';

const popularSearches = [
  {
    query: 'Homes in Rural Oakville',
    link: '/search?tag=Rural Oakville',
  },
  { query: 'Properties in Uptown Core', link: '/search?tag=Uptown Core' },
  {
    query: 'Homes on Preserve Dr',
    link: '/search?tag=On Preserve Dr',
  },
  {
    query: 'Homes in the Preserve',
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
