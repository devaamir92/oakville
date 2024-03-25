'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import Pagination from '@components/ui/Pagination';

import getSlug from '@utils/getSlug';

import ItemCard from './_components/ItemCard';
import Search from './_components/Search';

const recentSearches = [
  { query: 'preserve oakville', link: '/search?q=preserve%20oakville' },
  { query: 'homes for sale', link: '/search?q=homes%20for%20sale' },
  { query: 'neighbourhood site', link: '/search?q=neighbourhood%20site' },
  {
    query: 'brand new homes for sale in oakville',
    link: '/search?q=brand%20new%20homes%20oakville',
  },
  { query: 'home sale in oakville', link: '/search?q=neighbourhood%20site' },
];

const popularSearches = [
  { query: 'popular search 1', link: '/search?q=popular%20search%201' },
  { query: 'popular search 2', link: '/search?q=popular%20search%202' },
  { query: 'popular search 3', link: '/search?q=popular%20search%203' },
  {
    query: 'popular search 4',
    link: '/search?q=popular%20search%204',
  },
  { query: 'popular search 5', link: '/search?q=popular%20search%205' },
];

const AdvancedSearch = () => {
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState<any>({});
  const handleSearchData = (data: any) => {
    setSearchData(data);
  };

  return (
    <main className="container mx-auto flex flex-col gap-6 py-4 lg:max-w-[1140px]">
      <div className="relative h-40 w-full overflow-hidden rounded">
        <div className="absolute inset-0 bg-tertiary-500 opacity-80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-medium text-white">
            Explore, Discover, Own
          </h1>
          <Search handleSearchData={handleSearchData} />
        </div>
      </div>

      <div className="flex  flex-col-reverse gap-6 lg:flex-row">
        <div className="flex h-fit flex-col gap-6 lg:w-[360px]">
          <div className="flex-1 rounded bg-secondary-400 px-8 py-4">
            <h2 className="text-center text-xl font-medium text-gray-800">
              Recent Searches
            </h2>

            <div className="mt-4 flex w-full flex-wrap gap-2">
              {recentSearches.map(search => (
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
            <h3 className="text-center text-xl font-medium text-gray-800">
              Popular Searches
            </h3>
            <div className="mt-4 flex w-full flex-wrap gap-2">
              {popularSearches.map(search => (
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
              Recently Viewed Property
            </h4>
            <div className="flex flex-col divide-y-[1px] divide-gray-300">
              <div className="flex gap-2 py-3">
                <div className="relative size-16">
                  <Image
                    src="/images/webp/listing/1.webp"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Oakville Ontario L6X 5A6</p>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>Price:</span>
                    <span>$ 600,000</span>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>2 Beds</span>
                    <span>4 Baths</span>
                    <span>1 Parking</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 py-3">
                <div className="relative size-16">
                  <Image
                    src="/images/webp/listing/1.webp"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Oakville Ontario L6X 5A6</p>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>Price:</span>
                    <span>$ 600,000</span>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>2 Beds</span>
                    <span>4 Baths</span>
                    <span>1 Parking</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 py-3">
                <div className="relative size-16">
                  <Image
                    src="/images/webp/listing/1.webp"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Oakville Ontario L6X 5A6</p>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>Price:</span>
                    <span>$ 600,000</span>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>2 Beds</span>
                    <span>4 Baths</span>
                    <span>1 Parking</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 py-3">
                <div className="relative size-16">
                  <Image
                    src="/images/webp/listing/1.webp"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Oakville Ontario L6X 5A6</p>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>Price:</span>
                    <span>$ 600,000</span>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>2 Beds</span>
                    <span>4 Baths</span>
                    <span>1 Parking</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 py-3">
                <div className="relative size-16">
                  <Image
                    src="/images/webp/listing/1.webp"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Oakville Ontario L6X 5A6</p>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>Price:</span>
                    <span>$ 600,000</span>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>2 Beds</span>
                    <span>4 Baths</span>
                    <span>1 Parking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex  flex-col gap-1">
            {searchData?.total >= 0 && (
              <p className="text-lg font-semibold text-gray-800">
                {searchData?.total} Results for {searchParams.get('tag')}
              </p>
            )}

            <hr className="border-gray-300" />
          </div>
          <div className="flex flex-col items-start divide-y-[1px] divide-gray-300 ">
            {searchData === null && (
              <p className="w-full text-center text-lg font-semibold text-gray-800">
                No results found
              </p>
            )}
            {searchData?.data?.map((property: any) => (
              <ItemCard
                Status={property.Status}
                Ml_num={property.Ml_num}
                address={property.Addr}
                price={property.Lp_dol}
                beds={property.Br}
                baths={property.Bath_tot}
                parking={property.Park_spcs}
                sqft={property.Sqft}
                key={property.Ml_num}
                Lsc={property.Lsc}
                url={getSlug(
                  property.S_r,
                  property.Status,
                  property.Community,
                  property.Slug
                )}
              />
            ))}
          </div>
          {searchData?.pageCount > 1 && (
            <Pagination
              totalPages={searchData.pageCount}
              currentPage={searchData.page}
              location="/search"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default AdvancedSearch;
