'use client';

import Link from 'next/link';

import { FaSearch } from 'react-icons/fa';
import { useOnClickOutside } from 'usehooks-ts';
import React, { useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

import getSlug from '@utils/getSlug';

import { searchProperty } from '@lib/api/searchProperty';

const MobileSearch = () => {
  const [properties, setProperties] = useState<{ data: any[] } | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showList, setShowList] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setShowSearch(false);
    setShowList(false);
  });

  const getProperties = async (search: string) => {
    const res = await searchProperty(search, 1);
    return res;
  };
  const handleSearchRoute = () => {
    const search = searchParams.get('tag') || searchText;
    if (search) {
      push(`/search?tag=${search}`);
    }
    setShowSearch(false);
    setShowList(false);
  };

  const handleSearch = useDebouncedCallback(search => {
    if (search) {
      getProperties(search).then(data => {
        setProperties(data);
      });
      setShowList(true);
    } else {
      setProperties(null);
      setShowList(false);
    }
  }, 300);

  return (
    <>
      <div>
        <button
          type="button"
          aria-label="Search"
          className="flex size-10 items-center justify-center rounded bg-primary-600 text-white"
          onClick={() => setShowSearch(!showSearch)}
        >
          <FaSearch size={18} />
        </button>
        {showSearch && (
          <div className="container absolute inset-x-0 top-0 size-full">
            <div className="flex size-full items-center justify-center">
              <input
                type="text"
                placeholder="Search by address, MLS #..."
                className="h-full flex-1 rounded-l border-none bg-primary-600 px-2 text-white outline-none placeholder:text-gray-200"
                onChange={e => {
                  setSearchText(e.target.value);
                  handleSearch(e.target.value);
                }}
              />
              <button
                type="button"
                aria-label="Close Search"
                className="flex h-full w-10 items-center justify-center rounded-r bg-primary-600 text-white"
                onClick={() => handleSearchRoute()}
              >
                <FaSearch size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      {properties?.data && showList && (
        <div
          className="absolute left-1/2 top-11 z-50 w-[92%] -translate-x-1/2 rounded-b bg-white shadow-lg"
          ref={ref}
        >
          <ul className="flex flex-col divide-y-2">
            {properties?.data.slice(0, 5).map(property => (
              <li key={property.Ml_num} className="flex-1">
                <Link
                  className="flex w-full flex-col px-2"
                  href={getSlug(property.Community, property.Slug)}
                  onClick={() => setShowList(false)}
                >
                  <div className="flex items-center justify-between py-3">
                    <p className="text-xs font-semibold text-primary-500">
                      {(property.Unit_num ? `${property.Unit_num} - ` : '') ||
                        (property.Apt_num ? property.Apt_num : '')}
                      {property.Addr}
                    </p>
                    <span className="text-xs ">
                      {property.Ml_num} |{' '}
                      {(property.S_r === 'Sale' && 'For Sale') ||
                        (property.S_r === 'Lease' && 'For Rent')}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            {properties?.data.length > 5 && (
              <li className="flex-1">
                <Link
                  className="flex w-full flex-col justify-center  px-2"
                  href={`/search?tag=${searchText}`}
                  onClick={() => setShowList(false)}
                >
                  <div className="flex items-center justify-center py-3">
                    <p className="text-xs font-semibold text-gray-800">
                      View all results for &quot;{searchText}&quot;
                    </p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileSearch;
