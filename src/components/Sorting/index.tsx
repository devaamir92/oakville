'use client';

import React from 'react';

import { BsChevronDown } from 'react-icons/bs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Item } from '@radix-ui/react-dropdown-menu';

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

const Sorting: React.FC = () => {
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
      icon={<BsChevronDown className="text-black" size={14} />}
      className="w-full rounded border border-gray-300 px-2 py-1 !text-black"
      ariaLabel="Sort by"
      title="Sort by"
      label={
        types.find(type => type.value === activeSort)?.name || 'New Listings'
      }
      align="end"
      contentClassName="border border-gray-500 rounded "
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
              'w-full rounded-sm px-3 py-1.5 text-sm transition-colors duration-200 ease-in-out hover:bg-primary-200',
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

export default Sorting;
