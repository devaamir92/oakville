'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Item } from '@radix-ui/react-dropdown-menu';

import { FaShuffle } from 'react-icons/fa6';

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

const DaySort: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeSort = searchParams.get('days') || '';

  const handleSort = (value: string) => {
    const search = new URLSearchParams(searchParams.toString());
    search.set('days', value);
    search.set('page', '1');

    replace(`${pathname}?${search.toString()}`);
  };

  return (
    <Dropdown
      icon={<FaShuffle className="text-white" size={20} />}
      className="flex-col-reverse items-center justify-center gap-1 text-sm "
      ariaLabel="Sort by"
      title="Sort by"
      label="Sort"
      align="center"
      contentClassName="w-screen p-4"
    >
      {days.map(type => (
        <Item
          key={type.id}
          asChild
          data-state="closed"
          className="flex flex-col gap-2 border-none outline-none"
        >
          <button
            type="button"
            onClick={() => handleSort(type.value)}
            className={cn(
              'w-full rounded px-3 py-2 text-start text-base transition-colors duration-200 ease-in-out hover:bg-primary-200',
              {
                'bg-primary-500 text-white': activeSort === type.value,
              }
            )}
          >
            {type.name}
          </button>
        </Item>
      ))}
    </Dropdown>
  );
};

export default DaySort;
