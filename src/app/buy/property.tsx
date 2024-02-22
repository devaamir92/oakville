import { RequestQueryBuilder } from '@nestjsx/crud-request';

import Pagination from '@components/ui/Pagination';
import Card from '@components/ListingCard';
import cn from '@utils/cn';

interface PropertyProps {
  view?: 'list' | 'map';
  page: number;
}

const getProperties = async (page: number) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.setFilter({
    field: 'Status',
    operator: '$eq',
    value: 'A',
  });

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Apt_num',
    'Lp_dol',
    'Br',
    'Bath_tot',
    'Park_spcs',
    'Rooms_plus',
    'Status',
    'Is_locked',
    'Slug',
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

const Property: React.FC<PropertyProps> = async ({ page, view }) => {
  const rows = await getProperties(page);

  return (
    <div className="flex flex-col gap-4">
      <h1
        className={cn(
          'text-center text-2xl font-semibold text-gray-800 lg:text-left',
          {
            'text-center': view === 'list',
          }
        )}
      >
        Buy Properties in Oakville - ({rows?.total.toLocaleString()} Results)
      </h1>
      <div
        className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', {
          'xl:grid-cols-4': view === 'list',
        })}
      >
        {rows?.data?.map((item: any) => (
          <Card
            key={item.id}
            bathrooms={item.Bath_tot ?? 0}
            bedrooms={
              Number(
                Number(item.Br) + Number(item.Rooms_plus)
              ).toLocaleString() ?? '0'
            }
            imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
            location={item.Addr}
            price={Number(item.Lp_dol).toLocaleString() ?? '0'}
            parking={item.Park_spcs ?? '0'}
            slug={item.Slug}
          />
        ))}
      </div>
      <Pagination
        totalPages={rows.pageCount}
        currentPage={rows.page}
        location="/buy"
      />
    </div>
  );
};

export default Property;