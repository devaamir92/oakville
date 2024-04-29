import { headers } from 'next/headers';

import Sorting from '@components/Sorting';
import Card from '@components/ListingCard';
import Pagination from '@components/ui/Pagination';

import cn from '@utils/cn';
import getSlug from '@utils/getSlug';
import getBedroomString from '@utils/getbedroomString';

import { getSession } from '@lib/getsession';
import { Desktop, Mobile } from '@components/ua';
import Types from '@components/Toolbar/Types';
import { getProperties } from '@lib/api/properties/getProperties';
import Toolbar from '@components/Toolbar';
import SoldSorting from '@components/SoldSorting';
import { pageVisit } from '@lib/api/pageVisit';

interface PropertyProps {
  view?: 'list' | 'map';
  page: number;
  min: number;
  max: number;
  Status?: string;
  type?: any;
  bathrooms: any;
  bedrooms: any;
  basement: any;
  sort: any;
  title?: string;
  S_r?: string;
  neighborhood?: string;
  location: string;
  classType?: string;
  Lsc?: string;
  days?: number;
}

const getTypes = (status?: string, sr?: string) => {
  if (status === 'U') {
    return 'Sold';
  }
  if (sr === 'Lease') {
    return 'Lease';
  }
  return 'Sale';
};

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
  Status,
  Lsc,
  days,
}) => {
  const rows = await getProperties({
    limit: 12,
    S_r,
    usePolygon: false,
    max,
    min,
    type,
    bedrooms,
    bathrooms,
    basement,
    classType,
    sort,
    page,
    neighborhood,
    status: Status,
    Lsc,
    days,
  });
  const session = await getSession();
  const currentUrl = headers().get('next-url');
  if (currentUrl) {
    await pageVisit(currentUrl);
  }
  return (
    <div className="relative min-h-[calc(100vh-70px)]">
      <div className="container flex flex-col gap-4 p-4">
        <Desktop>
          <Toolbar type="sale" view={view} rows={rows?.data} />
          <div className="mt-[48px] flex items-center justify-between gap-4">
            <div className=" flex flex-1 flex-col">
              <h1
                className={cn(
                  'flex-1 text-start text-xl font-semibold capitalize text-gray-800 lg:text-left'
                )}
              >
                {Status !== 'U' && rows?.total.toLocaleString()}{' '}
                {title ?? 'Properties'}
              </h1>
              {Status === 'U' && !session && (
                <p className="text-gray-500">
                  Real estate boards require you to be signed in to access sold
                  prices history.
                </p>
              )}
            </div>
            <div className="flex size-fit items-center justify-end gap-2">
              <span className="flex-1 whitespace-nowrap">Sort by:</span>
              {Status === 'U' ? <SoldSorting /> : <Sorting />}
            </div>
          </div>
          <Types type={getTypes(Status, S_r)} />
        </Desktop>
        <Mobile>
          <h1 className="text-lg font-semibold capitalize text-gray-800">
            {rows?.total.toLocaleString()} {title ?? 'Properties'}
          </h1>
          <Types type={getTypes(Status, S_r)} />
        </Mobile>
        <div
          className={cn('grid grid-cols-1 gap-4 md:grid-cols-2 ', {
            'lg:grid-cols-3 xl:grid-cols-4': view === 'list',
          })}
        >
          {rows?.data?.map((item: any) => (
            <Card
              session={session}
              mls={item.Ml_num}
              key={item.id}
              bathrooms={item.Bath_tot ?? 0}
              bedrooms={getBedroomString(Number(item.Br), Number(item.Br_plus))}
              // imageUrl="/images/jpg/property-sold-out.jpg"
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
              location={item.Addr}
              price={Number(item.Lp_dol).toLocaleString() ?? '0'}
              parking={item.Park_spcs ?? '0'}
              slug={getSlug(item.Community, item.Slug)}
              isLocked={item.Status === 'U' ? true : item.Is_locked}
              dom={item.Dom}
              tssql={item.Status === 'U' ? item.Cd : item.Timestamp_sql}
              Lat={item.Lat}
              Lng={item.Lng}
              status={item.Status}
              soldPrice={Number(item.Sp_dol).toLocaleString() ?? '0'}
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
    </div>
  );
};

export default Property;
