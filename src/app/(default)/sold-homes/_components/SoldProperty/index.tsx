import { RequestQueryBuilder } from '@nestjsx/crud-request';

import moment from 'moment';

import Pagination from '@components/ui/Pagination';
import Card from '@components/ListingCard';
import { getSession } from '@lib/getsession';
import getBedroomString from '@utils/getbedroomString';
import getSlug from '@utils/getSlug';

interface PropertyProps {
  page: number;
  days: number;
  location: string;
}

const getProperties = async (page: number, days: number) => {
  const queryBuilder = RequestQueryBuilder.create();
  const date = new Date();
  date.setDate(date.getDate() - days);

  const daysfilter: any =
    (days > 0 && {
      Cd: {
        $gte: moment(date).utc().format('YYYY-MM-DDT HH:mm:ss:SSS[Z]'),
      },
    }) ||
    {};

  queryBuilder
    .search({
      $and: [
        {
          Status: {
            $eq: 'U',
          },
          Lsc: {
            $eq: 'Sld',
          },
          ...daysfilter,
        },
      ],
    })
    .sortBy({
      field: 'Cd',
      order: 'DESC',
    });

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Unit_num',
    'Apt_num',
    'Lp_dol',
    'Lsc',
    'Br',
    'Bath_tot',
    'Park_spcs',
    'Br_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
    'Community',
    'Cd',
    'Timestamp_sql',
  ]);

  queryBuilder.setPage(page ?? 1);

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['property'],
      },
      cache: 'no-cache',
    }
  );
  return res.json();
};

const SoldProperty: React.FC<PropertyProps> = async ({
  page,
  days,
  location,
}) => {
  const rows = await getProperties(page, days);
  const session = await getSession();
  // console.log(rows)
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
            slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
            isLocked
            status={item.Status}
            dom={item.Dom}
            tssql={item.Cd}
          />
        ))}
        {!rows?.data?.length && (
          <div className="col-span-full flex min-h-[calc(100vh-135px)] items-center justify-center">
            <h1 className="text-center text-xl md:text-2xl">
              No properties found
            </h1>
          </div>
        )}
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

export default SoldProperty;
