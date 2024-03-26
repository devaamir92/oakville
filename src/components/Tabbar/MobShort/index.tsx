'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Item } from '@radix-ui/react-dropdown-menu';

import { FaShuffle } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import cn from '@utils/cn';

const types = [
  {
    id: 1,
    name: 'New Listings',
    value: 'lts',
  },
  {
    id: 2,
    name: 'Old Listings',
    value: 'ols',
  },
  {
    id: 3,
    name: 'Price (High to Low)',
    value: 'htl',
  },
  {
    id: 4,
    name: 'Price (Low to High)',
    value: 'lth',
  },
];

const Mobsort: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeSort = searchParams.get('sort');

  const handleSort = (value: string) => {
    const search = new URLSearchParams(searchParams.toString());
    search.set('sort', value);
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
      {types.map(type => (
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

export default Mobsort;
