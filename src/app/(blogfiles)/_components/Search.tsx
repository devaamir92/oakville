'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDebouncedCallback } from 'use-debounce';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import cn from '@utils/cn';

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchText, setSearchText] = useState('');

  const handleSearchRoute = () => {
    const params = new URLSearchParams();
    params.set('search', searchText);
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <form className="">
        <label
          htmlFor="search"
          className="group flex h-[36px] items-center overflow-hidden  bg-white px-1.5 text-sm transition-all duration-300 ease-in-out lg:min-w-96"
        >
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search blogs..."
            onInput={e => {
              setSearchText(e.currentTarget.value);
              if (e.currentTarget.value.length === 0) {
                handleClear();
              }
            }}
            className={cn(
              'full bg-white-500 absolute right-[58px] hidden h-[36px] w-[calc(100%-72px)] pl-2 text-black placeholder:text-gray-700  focus:outline-none group-hover:block lg:relative lg:right-0 lg:block lg:flex-1'
            )}
          />
          <button
            type="button"
            aria-label="Search"
            className=" p-2"
            onClick={handleSearchRoute}
          >
            <FaSearch className="text-tertiary-500" />
          </button>
        </label>
      </form>
    </div>
  );
}

export default Search;
