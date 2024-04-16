import getSlug from '@utils/getSlug';
import Card from '@components/ListingCard';
import { getSession } from '@lib/getsession';
import Pagination from '@components/ui/Pagination';
import getBedroomString from '@utils/getbedroomString';
import getFeatureProperty from '@lib/api/getFeatureProperty';

interface PropertyProps {
  page: number;
  location: string;
}

const Favourites: React.FC<PropertyProps> = async ({ page, location }) => {
  const rows = await getFeatureProperty(page);

  const session = await getSession();

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            slug={getSlug(item.Community, item.Slug)}
            isLocked={item.Is_locked}
            dom={item.Dom}
            tssql={item.Timestamp_sql}
          />
        ))}
        {rows?.data?.length === 0 && (
          <div className="col-span-full flex h-[calc(100vh-360px)] items-center justify-center">
            <p className="text-xl text-gray-500">No Favourites found</p>
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

export default Favourites;
