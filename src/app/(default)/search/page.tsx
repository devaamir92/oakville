import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@components/ui/Button';

import ItemCard from './_components/ItemCard';

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
  return (
    <main className="mx-auto flex max-w-[1140px] flex-col gap-6 py-4">
      <div className="relative h-80 w-full overflow-hidden rounded">
        <Image
          src="/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg"
          className="z-0 object-cover"
          alt="banner"
          fill
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-medium text-white">
            Explore, Discover, Own
          </h1>
          <p className="text-lg font-medium text-white">
            Navigate the world of real estate with our comprehensive advanced
            search tool.
          </p>
          <div className="mt-4 flex h-10 w-2/5 gap-2 overflow-hidden rounded bg-white">
            <label
              htmlFor="search"
              className="flex flex-1 items-center gap-2 p-1"
            >
              <input
                id="search"
                type="text"
                className="size-full focus:outline-none"
                placeholder="
                Search for a neighbourhood
                "
              />
              <Button
                variant="default"
                className="h-full rounded-[3px] py-0 text-base"
              >
                Search
              </Button>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex h-fit w-[360px] flex-col gap-6">
          <div className="flex-1 rounded bg-secondary-400 px-8 py-4">
            <h3 className="text-center text-xl font-medium text-gray-800">
              Recent Searches
            </h3>

            <ul className="flex flex-col gap-1 py-2">
              {recentSearches.map(search => (
                <li key={search.query} className="">
                  <Link href={search.link} className="flex text-sm capitalize">
                    {search.query}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 rounded bg-secondary-400 px-8 py-4">
            <h3 className="text-center text-xl font-medium text-gray-800">
              Popular Searches
            </h3>
            <ul className="flex flex-col gap-1 py-2">
              {popularSearches.map(search => (
                <li key={search.query} className="">
                  <Link href={search.link} className="flex text-sm capitalize">
                    {search.query}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 rounded bg-secondary-400 px-8 py-4">
            <h3 className="mb-2 text-center text-xl font-medium text-gray-800">
              Recently Viewed Property
            </h3>
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
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-xl font-semibold">
              9 Developments, 56 Available Floor Plans
            </p>
            <hr className="border-gray-300" />
          </div>
          <div className="flex flex-col divide-y-[1px] divide-gray-300">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdvancedSearch;
