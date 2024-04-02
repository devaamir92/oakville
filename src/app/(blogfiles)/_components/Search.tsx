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

  const handleSearchRoute = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  }, 200);

  return (
    <div>
      <form onSubmit={e => handleSearchRoute(e)}>
        <label
          htmlFor="search"
          className="group flex h-[36px] items-center overflow-hidden rounded bg-white px-1.5 text-sm hover:rounded-l-none hover:rounded-r lg:min-w-96 hover:lg:rounded"
        >
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search blogs..."
            value={searchText}
            onChange={e => {
              setSearchText(e.currentTarget.value);
            }}
            onInput={
              searchText
                ? () => {
                    handleClear();
                  }
                : undefined
            }
            className={cn(
              'full absolute right-[58px] hidden h-[36px] w-[calc(100%-72px)] rounded-l bg-transparent pl-2  text-black placeholder:text-gray-700 focus:outline-none group-hover:block lg:relative lg:right-0 lg:block lg:flex-1'
            )}
          />
          <button type="submit" aria-label="Search" className=" p-2">
            <FaSearch className="text-tertiary-500" />
          </button>
        </label>
      </form>
    </div>
  );
}

export default Search;
