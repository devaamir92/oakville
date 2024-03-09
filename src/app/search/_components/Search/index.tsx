'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { Button } from '@components/ui/Button';

interface SearchProps {
  handleSearchData: (data: any) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearchData }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const getProperties = async (search: string, page: number) => {
    const queryBuilder = RequestQueryBuilder.create();

    if (search) {
      queryBuilder.search({
        $or: [
          {
            Addr: {
              $contL: search,
            },
          },
          {
            Ml_num: {
              $contL: search,
            },
          },
          {
            Community: {
              $contL: search,
            },
          },
        ],
      });
    }

    queryBuilder.select([
      'Ml_num',
      'Addr',
      'Unit_num',
      'Apt_num',
      'Lp_dol',
      'Br',
      'Bath_tot',
      'Park_spcs',
      'Br_plus',
      'Status',
      'Is_locked',
      'Slug',
      'Dom',
      'Community',
      'Lsc',
      'Sqft',
    ]);

    queryBuilder.setPage(page ?? 1);

    const res = await fetch(
      `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
      {
        method: 'GET',
        next: {
          tags: ['property'],
        },
        cache: 'no-cache',
      }
    );

    const response = await res.json();

    return response;
  };

  useEffect(() => {
    if (searchParams.get('tag')) {
      getProperties(
        searchParams.get('tag').toString(),
        Number(searchParams.get('page'))
      ).then(data => {
        handleSearchData(data);
      });
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
