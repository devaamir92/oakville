import React from 'react';

import Card from '@components/ListingCard';
import getSlug from '@utils/getSlug';

interface FeatureListingProps {
  rows: any;
}

const getBedroomString = (Br: any, Br_plus: any) => {
  if (Br === null) {
    return '0';
  }
  if (Br_plus > 0) {
    return `${Br} + ${Br_plus}`;
  }
  return `${Br}`;
};

const FeatureListing: React.FC<FeatureListingProps> = ({ rows }) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="pb-8  text-2xl font-semibold">Featured Listings</h2>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rows.map((item: any) => (
            <Card
              key={item.property.id}
              bathrooms={item.property.Bath_tot ?? 0}
              bedrooms={getBedroomString(
                item.property.Br,
                item.property.Br_plus
              )}
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.property.Ml_num}/photo_1.webp`}
              location={item.property.Addr}
              price={Number(item.property.Lp_dol).toLocaleString() ?? '0'}
              parking={item.property.Park_spcs ?? '0'}
              slug={getSlug(
                item.property.S_r,
                item.property.Status,
                item.property.Community,
                item.property.Slug
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureListing;
