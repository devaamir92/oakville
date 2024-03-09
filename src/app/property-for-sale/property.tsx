import { RequestQueryBuilder } from '@nestjsx/crud-request';

import Pagination from '@components/ui/Pagination';
import Card from '@components/ListingCard';
import cn from '@utils/cn';
import { BedroomsParser } from '@utils/parsers/bedrooms-parser';
import { BathroomsParser } from '@utils/parsers/bathrooms-parser';
import Sorting from '@components/Sorting';
import sortlisting from '@utils/sort';

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
}

const getProperties = async (
  page: number,
  max: number,
  min: number,
  type: string | string[],
  bedrooms: any,
  bathrooms: any,
  basement: string | string[],
  sort: string
) => {
  const queryBuilder = RequestQueryBuilder.create();

  let search = {};

  if (bedrooms) {
    search = {
      ...search,
      ...BedroomsParser.create(bedrooms).parse(),
    };
  }
  if (bathrooms) {
    search = {
      ...search,
      ...BathroomsParser.create(bathrooms).parse(),
    };
  }
  // console.log(search);
  const propType = Array.isArray(type) ? type : [type];
  const propsBsmt = Array.isArray(basement) ? basement : [basement];

  const typeQuery: any =
    (type && {
      Type_own_srch: {
        $in: propType,
      },
    }) ||
    {};

  const bsmtQuery: any =
    (basement && {
      Bsmt1_out: {
        $in: propsBsmt,
      },
    }) ||
    {};

  queryBuilder
    .search({
      $and: [
        {
          Status: {
            $eq: 'A',
          },
          S_r: {
            $eq: 'Sale',
          },
          Lp_dol: {
            $gte: min,
            $lte: max,
          },
          ...typeQuery,
          ...bsmtQuery,
          ...search,
        },
      ],
    })
    .sortBy(sortlisting(sort));

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Apt_num',
    'Lp_dol',
    'Br',
    'Br_plus',
    'Bath_tot',
    'Park_spcs',
    'Status',
    'Is_locked',
    'Slug',
    'Community',
    'Bsmt1_out',
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
}) => {
  const rows = await getProperties(
    page,
    max,
    min,
    type,
    bedrooms,
    bathrooms,
    basement,
    sort
  );
  const getBedroomString = (Br: any, Br_plus: any) => {
    if (Br === null) {
      return '0';
    }
    if (Br_plus > 0) {
      return `${Br} + ${Br_plus}`;
    }
    return `${Br}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <h1
          className={cn(
            'flex-1 text-center text-xl font-semibold text-gray-800 lg:text-left',
            {
              'text-center': view === 'list',
            }
          )}
        >
          {rows?.total.toLocaleString()} Properties for Sale in Oakville
        </h1>
        <div className="flex size-fit items-center justify-end gap-2">
          <span className="w-full">Sort by:</span>
          <Sorting />
        </div>
      </div>
      <div
        className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', {
          'xl:grid-cols-4': view === 'list',
        })}
      >
        {rows?.data?.map((item: any) => (
          <Card
            key={item.id}
            bathrooms={item.Bath_tot ?? 0}
            bedrooms={getBedroomString(item.Br, item.Br_plus)}
            imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
            location={item.Addr}
            price={Number(item.Lp_dol).toLocaleString() ?? '0'}
            parking={item.Park_spcs ?? '0'}
            slug={`/property-for-sale/${item.Community.toLowerCase().replaceAll(
              ' ',
              '-'
            )}/${item.Slug}`}
            isLocked={item.Is_locked}
          />
        ))}
      </div>

      {rows?.pageCount > 1 && (
        <Pagination
          totalPages={rows.pageCount}
          currentPage={rows.page}
          location="/property-for-sale"
        />
      )}
    </div>
  );
};

export default Property;
