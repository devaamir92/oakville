'use client';

/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

// import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { Button } from '@components/ui/Button';
import { searchProperty } from '@lib/api/searchProperty';

interface SearchProps {
  handleSearchData: (data: any) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearchData }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const getProperties = async (search: string, page: number) => {
    const res = await searchProperty(search, page);
    return res;
  };

  useEffect(() => {
    const serach = searchParams.get('tag');
    if (serach) {
      getProperties(serach.toString(), Number(searchParams.get('page'))).then(
        data => {
          handleSearchData(data);
        }
      );
    } else {
      handleSearchData(null);
    }
  }, [searchParams.get('tag'), searchParams.get('page')]);

  const handleSearch = useDebouncedCallback(term => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('tag', term);
      params.set('page', '1');
    } else {
      params.delete('tag');
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
    if (term) {
      getProperties(term, Number(params.get('page'))).then(data => {
        handleSearchData(data);
      });
    } else {
      handleSearchData(null);
    }
  }, 300);

  return (
    <div className="mt-4 flex h-10 w-[90%] gap-2 overflow-hidden rounded bg-white lg:w-1/2">
      <label htmlFor="search" className="flex flex-1 items-center gap-2 p-1">
        <input
          id="search"
          type="text"
          onChange={e => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('tag')?.toString()}
          className="size-full focus:outline-none"
          placeholder="
      Search for a neighbourhood
      "
        />
        <Button
          variant="default"
          className="h-full rounded-[3px] py-0 text-base"
          onClick={() => {
            handleSearch(searchParams.get('tag')?.toString());
          }}
        >
          Search
        </Button>
      </label>
    </div>
  );
};

export default Search;
