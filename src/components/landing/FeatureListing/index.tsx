import React from 'react';

import Card from '@components/ListingCard';

interface FeatureListingProps {
  rows: any;
}

const FeatureListing: React.FC<FeatureListingProps> = ({ rows }) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="pb-8  text-2xl font-semibold">Featured Listings</h2>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rows.map(item => (
            <Card
              key={item.property.id}
              bathrooms={item.property.Bath_tot ?? 0}
              bedrooms={
                Number(
                  Number(item.property.Br) + Number(item.property.Rooms_plus)
                ).toLocaleString() ?? '0'
              }
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.property.Ml_num}/photo_1.webp`}
              location={item.property.Addr}
              price={Number(item.property.Lp_dol).toLocaleString() ?? '0'}
              parking={item.property.Park_spcs ?? '0'}
              slug={item.property.Slug}
            />
          ))}
        </div>
        {/* <div className="mt-3 flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1 rounded bg-primary-200 px-3 py-1.5 text-center text-sm font-medium text-primary-700"
          >
            See More <FaArrowRight size={12} />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeatureListing;
