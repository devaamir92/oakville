'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import getSlug from '@utils/getSlug';

import getBedroomString from '@utils/getbedroomString';

import { searchProperty } from '@lib/api/searchProperty';

import Loader from '@components/Loader';

import SearchInput from '../SearchInput';
import RightSide from '../Rightside';

interface SearchProps {
  session: any;
  featuredProperties: any;
  popularSearches: any;
  params?: any;
}

const Search: React.FC<SearchProps> = ({
  session,
  featuredProperties,
  popularSearches,
  params,
}) => {
  const [searchListing, setSearchListing] = useState<any>([]);

  const getProperties = async (search: string, page: number) => {
    const res = await searchProperty(search, page);
    return res;
  };

  useEffect(() => {
    const serach = params.tag;
    if (serach) {
      getProperties(serach.toString(), Number(params.page ?? 1)).then(data => {
        setSearchListing(data);
      });
    } else {
      setSearchListing(null);
    }
  }, [params.tag, params.page]);

  return (
    <div className="container mx-auto flex flex-col gap-6 py-4 lg:max-w-[1140px]">
      <div className="relative h-40 w-full overflow-hidden rounded">
        <div className="absolute inset-0 bg-tertiary-500 opacity-80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="text-xl font-medium text-white md:text-2xl">
            Explore, Discover, Own
          </h1>
          <SearchInput />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-6 lg:flex-row">
        <div className="flex h-fit flex-col gap-6 lg:w-[360px]">
          <div className="flex-1 rounded bg-secondary-400 px-8 py-4">
            <h3 className="text-center text-xl font-medium text-gray-800">
              Popular Searches
            </h3>
            <div className="mt-4 flex w-full flex-wrap gap-2">
              {popularSearches.map((search: any) => (
                <Link
                  key={search.query}
                  href={search.link}
                  className="rounded bg-primary-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 ease-in-out hover:bg-primary-500 lg:px-2.5 lg:py-0.5"
                >
                  {search.query}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded bg-secondary-400 px-8 py-4">
            <h4 className="mb-2 text-center text-xl font-medium text-gray-800">
              Featured Listings
            </h4>
            {featuredProperties ? (
              <div className="flex flex-col divide-y-[1px] divide-gray-300">
                {featuredProperties.map((property: any) => (
                  <Link
                    href={getSlug(
                      property.property.Community,
                      property.property.Slug
                    )}
                    className="flex gap-2 py-3"
                    key={property.property.Ml_num}
                  >
                    <div className="relative size-16">
                      <Image
                        src={`https://api.preserveoakville.ca/api/v1/stream/${property.property.Ml_num}/photo_1.webp`}
                        width={150}
                        height={150}
                        className="size-full overflow-hidden object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold">{property.property.Addr}</p>
                      <div className="flex gap-2 text-sm text-gray-600">
                        <span>Price:</span>
                        <span>
                          $
                          {Number(property.property.Lp_dol).toLocaleString() ??
                            '0'}
                        </span>
                      </div>
                      <div className="flex justify-between gap-1 text-center text-gray-500">
                        <div className="flex items-center gap-2 divide-x-[1px] divide-gray-300">
                          <div className="flex items-center gap-1">
                            <span className="text-sm">
                              {getBedroomString(
                                Number(property.property.Br),
                                Number(property.property.Br_plus)
                              )}
                            </span>
                            <span className="text-sm">Beds</span>
                          </div>

                          <div className="flex items-center gap-1 pl-2">
                            <span className="text-sm">
                              {Number(property.property.Bath_tot)}
                            </span>
                            <span className="text-sm">Baths</span>
                          </div>
                          <div className="flex items-center gap-1 pl-2">
                            <span className="text-sm">
                              {Number(property.property.Park_spcs)}
                            </span>
                            <span className="text-sm">Parking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-lg font-semibold text-gray-800">
                No featured listings found
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <Suspense
            fallback={
              <div className="flex size-full items-center justify-center bg-white">
                <Loader />
              </div>
            }
            key={params.tag}
          >
            <RightSide searchData={searchListing} session={session} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Search;
