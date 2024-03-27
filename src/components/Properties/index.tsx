import Sorting from '@components/Sorting';
import Card from '@components/ListingCard';
import Pagination from '@components/ui/Pagination';

import cn from '@utils/cn';
import getSlug from '@utils/getSlug';
import getBedroomString from '@utils/getbedroomString';

import { getSession } from '@lib/getsession';
import { getPropertiesForSale } from '@lib/api/properties/getPropertiesForSale';
import { Desktop, Mobile } from '@components/ua';
import Types from '@components/Toolbar/Types';

interface PropertyProps {
  view?: 'list' | 'map';
  page: number;
  min: number;
  max: number;
  type: any;
  bathrooms: any;
  bedrooms: any;
  basement: any;
  sort: any;
  title?: string;
  S_r: string;
  neighborhood?: string;
  location: string;
  classType?: string;
}

const Property: React.FC<PropertyProps> = async ({
  page,
  view,
  max,
  min,
  type,
  bedrooms,
  bathrooms,
  basement,
  sort,
  title,
  S_r,
  neighborhood,
  location,
  classType,
}) => {
  const rows = await getPropertiesForSale(
    page,
    max,
    min,
    type,
    bedrooms,
    bathrooms,
    basement,
    sort,
    S_r,
    neighborhood,
    classType
  );
  const session = await getSession();

  return (
    <div className="flex flex-col gap-4">
      <Desktop>
        <div className="flex justify-between gap-2">
          <h1
            className={cn(
              'flex-1 text-start text-xl font-semibold capitalize text-gray-800 lg:text-left'
            )}
          >
            {rows?.total.toLocaleString()} {title ?? 'Properties'}
          </h1>
          <div className="flex size-fit items-center justify-end gap-2">
            <span className="w-full">Sort by:</span>
            <Sorting />
          </div>
        </div>
      </Desktop>
      <Mobile>
        <h1 className="text-lg font-semibold capitalize text-gray-800">
          {rows?.total.toLocaleString()} {title ?? 'Properties'}
        </h1>
        <Types type={S_r === 'Lease' ? 'Lease' : 'Sale'} />
      </Mobile>
      <div
        className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', {
          'xl:grid-cols-4': view === 'list',
        })}
      >
        {rows?.data?.map((item: any) => (
          <Card
            session={session}
            mls={item.Ml_num}
            key={item.id}
            bathrooms={item.Bath_tot ?? 0}
            bedrooms={getBedroomString(Number(item.Br), Number(item.Br_plus))}
            imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
            location={item.Addr}
            price={Number(item.Lp_dol).toLocaleString() ?? '0'}
            parking={item.Park_spcs ?? '0'}
            slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
            isLocked={item.Is_locked}
            dom={item.Dom}
            tssql={item.Timestamp_sql}
          />
        ))}
      </div>

      {rows?.pageCount > 1 && (
        <Pagination
          totalPages={rows.pageCount}
          currentPage={rows.page}
          location={location}
        />
      )}
    </div>
  );
};

export default Property;
