'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Item } from '@radix-ui/react-dropdown-menu';

import Dropdown from '@components/ui/Dropdown';
import cn from '@utils/cn';

const days = [
  { id: 1, value: '', name: 'All' },
  { id: 2, value: '1', name: '1 Day Ago' },
  { id: 3, value: '7', name: '7 Days Ago' },
  { id: 4, value: '14', name: '14 Days Ago' },
  { id: 5, value: '30', name: '30 Days Ago' },
  { id: 6, value: '90', name: '90 Days Ago' },
  { id: 7, value: '180', name: '180 Days Ago' },
  { id: 8, value: '365', name: '365 Days Ago' },
];

const SoldTopBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeSort = searchParams.get('days');

  const handleSort = (value: string) => {
    const search = new URLSearchParams(searchParams.toString());
    search.set('days', value);
    search.set('page', '1');

    replace(`${pathname}?${search.toString()}`);
  };

  return (
    <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
      <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">
        Sold Properties in Preserve Oakville
      </h1>
      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap font-medium">Sort by:</span>
        <Dropdown
          ariaLabel="Sort by"
          title="Sort by"
          label={
            activeSort
              ? days.find(day => day.value === activeSort)?.name
              : 'All'
          }
          className="w-full rounded border border-gray-300  px-2 py-1 !text-black md:w-40"
          contentClassName="p-2"
        >
          {days.map(day => (
            <Item
              key={day.id}
              asChild
              className="flex flex-col gap-2 border-none outline-none"
            >
              <button
                type="button"
                onClick={() => handleSort(day.value)}
                className={cn(
                  'w-full rounded-sm px-3 py-1.5 text-start text-sm transition-colors duration-200 ease-in-out hover:bg-primary-200',
                  activeSort === day.value && 'bg-primary-500 text-white'
                )}
              >
                {day.name}
              </button>
            </Item>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default SoldTopBar;
