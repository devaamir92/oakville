'use client';

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@components/ui/Button';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('tag')?.toString()
  );
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set('tag', searchTerm);
      params.set('page', '1');
    } else {
      params.delete('tag');
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-4 flex h-10 w-[90%] gap-2 overflow-hidden rounded bg-white lg:w-1/2">
      <label htmlFor="search" className="flex flex-1 items-center gap-2 p-1">
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="size-full focus:outline-none"
          placeholder="
      Search for a neighbourhood
      "
        />
        <Button
          variant="default"
          className="h-full rounded-[3px] py-0 text-base"
          onClick={handleSearch}
        >
          Search
        </Button>
      </label>
    </div>
  );
};

export default SearchInput;
