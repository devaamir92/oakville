/* eslint-disable react/no-danger */
import React, { Suspense } from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Loader from '@components/Loader';
import cn from '@utils/cn';

import Toolbar from '@components/Toolbar';
import Mapbox from '@components/Mapbox';

import Property from '@components/Properties';
import Footer from '@components/Footer';
import { Desktop, Mobile } from '@components/ua';
import Tabbar from '@components/Tabbar';
import { getProperties } from '@lib/api/properties/getProperties';
import uptownCoreHtmlContent from '@assets/discriptions/uptownCore';
import ruralOakvilleHtmlContent from '@assets/discriptions/ruralOakville';

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

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  return {
    title: `${
      params?.neighbourhood === 'uptown-core' ? 'Top' : 'Best'
    } Homes For Sale In ${params?.neighbourhood
      .split('-')
      .join(' ')} | The Preserve Oakville`,
    description: `Discover luxury homes for sale in ${params?.neighbourhood
      .split('-')
      .join(
        ' '
      )},  neighborhood. Find your ideal houses or condos for sale in The Preserve Oakville sought-after location.`,
  };
}

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

  if (
    searchParams.params.neighbourhood !== 'rural-oakville' &&
    searchParams.params.neighbourhood !== 'uptown-core' &&
    searchParams.params.neighbourhood !== 'iroquois-ridge-north'
  ) {
    return notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Desktop>
        <Toolbar type="sale" rows={rows.data} />
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
                  <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-white">
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
                <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-white">
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
            {searchParams?.params.neighbourhood === 'uptown-core' && (
              <div
                className="element container w-full text-justify"
                dangerouslySetInnerHTML={{ __html: uptownCoreHtmlContent }}
              />
            )}
            {searchParams?.params.neighbourhood === 'rural-oakville' && (
              <div
                className="element container w-full text-justify"
                dangerouslySetInnerHTML={{ __html: ruralOakvilleHtmlContent }}
              />
            )}
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
