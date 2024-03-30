import React, { Suspense } from 'react';

import type { Metadata } from 'next';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Toolbar from '@components/Toolbar';
import Mapbox from '@components/Mapbox';

import Property from '@components/Properties';
import Footer from '@components/Footer';
import { Desktop, Mobile } from '@components/ua';
import Tabbar from '@components/Tabbar';
import { getProperties } from '@lib/api/properties/getProperties';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
    page?: string;
    min?: string;
    max?: string;
    type?: any;
    bedrooms?: any;
    bathrooms?: any;
    basement?: any;
    sort?: any;
  };
}

export const metadata: Metadata = {
  title: 'Homes for Sale in The Preserve Oakville Neighbourhood',
  description:
    "Discover luxury homes for sale in The Preserve Oakville neighbourhood. Find your ideal Oakville house or condo for sale in Canada's sought-after location.",
};

// const getProperties = async (
//   max: number,
//   min: number,
//   type: string | string[],
//   bedrooms: any,
//   bathrooms: any,
//   basement: string | string[],
//   sort: string,
//   neighborhood: string
// ) => {
//   const queryBuilder = RequestQueryBuilder.create();

//   let search = {};

//   if (bedrooms) {
//     search = {
//       ...search,
//       ...BedroomsParser.create(bedrooms).parse(),
//     };
//   }
//   if (bathrooms) {
//     search = {
//       ...search,
//       ...BathroomsParser.create(bathrooms).parse(),
//     };
//   }
//   const propType = Array.isArray(type) ? type : [type];
//   const propsBsmt = Array.isArray(basement) ? basement : [basement];

//   const typeQuery: any =
//     (type && {
//       Type_own_srch: {
//         $in: propType,
//       },
//     }) ||
//     {};

//   const bsmtQuery: any =
//     (basement && {
//       Bsmt1_out: {
//         $in: propsBsmt,
//       },
//     }) ||
//     {};

//   queryBuilder
//     .search({
//       $and: [
//         {
//           Status: {
//             $eq: 'A',
//           },
//           Community: {
//             $eqL: neighborhood,
//           },
//           S_r: {
//             $eq: 'Sale',
//           },
//           Lp_dol: {
//             $gte: min,
//             $lte: max,
//           },
//           ...typeQuery,
//           ...bsmtQuery,
//           ...search,
//         },
//       ],
//     })
//     .sortBy(sortlisting(sort))
//     .setLimit(1000);

//   queryBuilder.select([
//     'Ml_num',
//     'Addr',
//     'Apt_num',
//     'Lp_dol',
//     'Br',
//     'Br_plus',
//     'Bath_tot',
//     'Park_spcs',
//     'Status',
//     'Is_locked',
//     'Slug',
//     'Community',
//     'Bsmt1_out',
//     'Lat',
//     'Lng',
//     'Dom',
//   ]);

//   const res = await fetch(
//     `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
//     {
//       method: 'GET',
//       next: {
//         tags: ['property'],
//       },
//       cache: 'no-cache',
//     }
//   );
//   const data = await res.json();
//   const responce = inPolygon(data.data);
//   return responce;
// };

const Page: React.FC<PageProps> = async (searchParams: any) => {
  const rows = await getProperties({
    limit: 1000,
    page: Number(searchParams?.searchParams.page ?? 1) ?? 1,
    max: Number(searchParams?.searchParams.max ?? 25000000),
    min: Number(searchParams?.searchParams.min ?? 0),
    type: searchParams?.searchParams.type,
    bedrooms: searchParams?.searchParams.bedrooms,
    bathrooms: searchParams?.searchParams.bathrooms,
    basement: searchParams?.searchParams.basement,
    sort: searchParams?.searchParams.sort,
    neighborhood: searchParams.params.neighbourhood.split('-').join(' '),
    usePolygon: true,
    S_r: 'Sale',
  });

  return (
    <div className="flex flex-1 flex-col">
      <Desktop>
        <Toolbar type="sale" />
        <div className="flex flex-1">
          {searchParams?.searchParams.view !== 'list' && (
            <section
              style={{
                height: 'calc(100vh - 70px)',
                top: '70px',
              }}
              className="sticky left-0 flex-1"
            >
              <Suspense
                fallback={
                  <div className="flex h-[calc(100vh-73px)] items-center justify-center bg-white">
                    <Loader />
                  </div>
                }
              >
                <Mapbox data={rows.data} />
              </Suspense>
            </section>
          )}

          <section
            className={cn(
              'relative flex w-full flex-col gap-4 overflow-y-auto bg-white  lg:w-1/2 2xl:w-2/5',
              {
                'w-full bg-transparent xl:w-full 2xl:w-full':
                  searchParams?.searchParams.view === 'list',
                'mx-auto': searchParams?.searchParams.view === 'list',
              }
            )}
          >
            <Suspense
              key={searchParams?.searchParams.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-73px)] items-center justify-center bg-white">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.searchParams.page ?? 1) ?? 1}
                view={searchParams?.searchParams.view ?? 'map'}
                max={Number(searchParams?.searchParams.max ?? 25000000)}
                min={Number(searchParams?.searchParams.min ?? 0)}
                type={searchParams?.searchParams.type}
                bedrooms={searchParams?.searchParams.bedrooms}
                bathrooms={searchParams?.searchParams.bathrooms}
                basement={searchParams?.searchParams.basement}
                sort={searchParams?.searchParams.sort}
                title={`Homes for Sale in ${searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}`}
                S_r="Sale"
                neighborhood={searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}
                location={`/${searchParams.params.neighbourhood}`}
              />
            </Suspense>
          </section>
        </div>
        <Footer />
      </Desktop>
      <Mobile>
        <div className="flex flex-1">
          <section
            className={cn(
              'relative flex w-full flex-col gap-4 overflow-y-auto bg-white  lg:w-1/2 2xl:w-2/5'
            )}
          >
            <Suspense
              key={searchParams?.searchParams.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-56px)] items-center justify-center bg-white">
                  <Loader />
                </div>
              }
            >
              <Property
                page={Number(searchParams?.searchParams.page ?? 1) ?? 1}
                view={searchParams?.searchParams.view ?? 'map'}
                max={Number(searchParams?.searchParams.max ?? 25000000)}
                min={Number(searchParams?.searchParams.min ?? 0)}
                type={searchParams?.searchParams.type}
                bedrooms={searchParams?.searchParams.bedrooms}
                bathrooms={searchParams?.searchParams.bathrooms}
                basement={searchParams?.searchParams.basement}
                sort={searchParams?.searchParams.sort}
                title={`Homes for Sale in ${searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}`}
                S_r="Sale"
                neighborhood={searchParams.params.neighbourhood
                  .split('-')
                  .join(' ')}
                location={`/${searchParams.params.neighbourhood}`}
              />
            </Suspense>
          </section>
        </div>
        <Footer />
        <Tabbar />
      </Mobile>
    </div>
  );
};

export default Page;
