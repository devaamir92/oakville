import React from 'react';

import Card from '@components/ListingCard';
import getSlug from '@utils/getSlug';
import getBedroomString from '@utils/getbedroomString';
import { Desktop, Mobile } from '@components/ua';

interface FeatureListingProps {
  rows: any;
  session: any;
}

const FeatureListing: React.FC<FeatureListingProps> = async ({
  rows,
  session,
}) => {
  return (
    <section>
      <div className="container flex flex-col">
        <div className="flex items-center justify-center">
          <h2 className="pb-4 text-2xl  font-semibold md:pb-8">
            Featured Listings
          </h2>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <Desktop>
          <div className="grid  grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows.map((item: any) => (
              <Card
                session={session}
                mls={item.property.Ml_num}
                key={item.property.id}
                bathrooms={item.property.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.property.Br),
                  Number(item.property.Br_plus)
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
                isLocked={item.property.Is_locked}
              />
            ))}
          </div>
        </Desktop>
        <Mobile>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows.slice(0, 3).map((item: any) => (
              <Card
                session={session}
                mls={item.property.Ml_num}
                key={item.property.id}
                bathrooms={item.property.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.property.Br),
                  Number(item.property.Br_plus)
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
                isLocked={item.property.Is_locked}
              />
            ))}
          </div>
        </Mobile>
      </div>
    </section>
  );
};

export default FeatureListing;
