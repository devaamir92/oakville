import { RequestQueryBuilder } from '@nestjsx/crud-request';

import Pagination from '@components/ui/Pagination';
import Card from '@components/ListingCard';

const getProperties = async (page: number) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setFilter({
      field: 'Status',
      operator: '$eq',
      value: 'U',
    })
    .setFilter({
      field: 'Lsc',
      operator: '$eq',
      value: 'Sld',
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
    'Rooms_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
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

const Property: React.FC = async () => {
  const rows = await getProperties(0);

  return (
    <div className="container flex flex-col justify-center gap-4 py-4">
      <div className="flex-1 ">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Sold Properties in Oakville
        </h1>
      </div>
      <hr />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
      {rows.pageCount > 1 && (
        <Pagination
          totalPages={rows.pageCount}
          currentPage={rows.page}
          location="/sold-properties"
        />
      )}
    </div>
  );
};

export default Property;
