'use client';

import React from 'react';
import { FaChevronDown, FaRepeat } from 'react-icons/fa6';
import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';

import Dropdown from '@components/ui/Dropdown';
import { Button } from '@components/ui/Button';

import cn from '@utils/cn';

import Price from './Price';
import Filters from './Filters';
import ListAlert from './ListAlert';
import ViewChanger from './View';

interface Props {
  type: string;
}

const FiltersData = {
  bedrooms: [
    {
      id: 1,
      name: '1BD',
      value: '1',
    },
    {
      id: 2,
      name: '2BD',
      value: '2',
    },
    {
      id: 3,
      name: '3BD',
      value: '3',
    },
    {
      id: 4,
      name: '4BD',
      value: '4',
    },
    {
      id: 5,
      name: '5BD+',
      value: '5',
    },
  ],
  bathrooms: [
    {
      id: 1,
      name: '1BTH+',
      value: '1',
    },
    {
      id: 2,
      name: '2BTH+',
      value: '2',
    },
    {
      id: 3,
      name: '3BTH+',
      value: '3',
    },
    {
      id: 4,
      name: '4BTH+',
      value: '4',
    },
    {
      id: 5,
      name: '5BTH+',
      value: '5',
    },
  ],
  basement: [
    {
      id: 1,
      name: 'Apt',
      value: 'Apartment',
    },
    {
      id: 2,
      name: 'Unfinished',
      value: 'Unfinished',
    },
    {
      id: 3,
      name: 'Finished',
      value: 'Finished',
    },

    {
      id: 4,
      name: 'Part Fin',
      value: 'Part Fin',
    },
    {
      id: 5,
      name: 'W/O',
      value: 'W/O',
    },
    {
      id: 6,
      name: 'Fin W/O',
      value: 'Fin W/O',
    },
    {
      id: 7,
      name: 'Sep Entrance',
      value: 'Sep Entrance',
    },
  ],
};

// const TypeData = [
//   {
//     label: 'All',
//     value: '',
//     id: 0,
//   },
//   {
//     label: 'Condo Apt',
//     value: '.C.',
//     id: 1,
//   },
//   {
//     label: 'Condo Townhouse',
//     value: '.T.',
//     id: 2,
//   },
//   {
//     label: 'Att/Row/Townhouse',
//     value: '.A.',
//     id: 3,
//   },
//   {
//     label: 'Semi-Detached',
//     value: '.S.',
//     id: 4,
//   },
//   {
//     label: 'Detached',
//     value: '.D.',
//     id: 5,
//   },
// ];

const TypeData = [
  {
    label: 'All',
    href: '/homes-for-sale',
    rentHref: '/homes-for-rent',
    id: 0,
  },
  {
    label: 'Condo Apt',
    href: '/condos-for-sale',
    rentHref: '/condos-for-rent',
    id: 1,
  },
  {
    label: 'Condo Townhouse',
    href: '/condo-townhouses-for-sale',
    rentHref: '/condo-townhouses-for-rent',
    id: 2,
  },
  {
    label: 'Att/Row/Townhouse',
    href: '/townhouses-for-sale',
    rentHref: '/townhouses-for-rent',
    id: 3,
  },
  {
    label: 'Detached',
    href: '/houses-for-sale',
    rentHref: '/houses-for-rent',
    id: 5,
  },
  {
    label: 'Commercial',
    href: '/commercial-property-for-sale',
    rentHref: '/commercial-property-for-rent',
    id: 6,
  },
];

const Toolbar: React.FC<Props> = ({ type }) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const clearFilters = () => {
    replace(pathname);
  };

  return (
    <div className="sticky top-[113px] z-20 flex h-12 items-center justify-end overflow-x-auto bg-tertiary-500 px-4 lg:top-[70px]">
      <nav className="flex min-w-full items-center justify-between gap-10">
        <nav className="flex items-center gap-0">
          {/* <Types items={TypeData} /> */}
          {TypeData.map(item => (
            <Link
              key={item.id}
              href={type === 'rent' ? item.rentHref : item.href}
              className={cn(
                'flex cursor-pointer whitespace-nowrap rounded px-3 py-1.5 text-sm text-white  transition-colors ease-in-out',
                {
                  'text-secondary-600 outline outline-1  outline-secondary-600':
                    pathname === (type === 'rent' ? item.rentHref : item.href),
                }
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ul className="flex min-w-[500px] items-center justify-center gap-4 text-sm xl:gap-9 2xl:gap-6">
          <li>
            <Dropdown label="Price" icon={<FaChevronDown size={10} />}>
              <Price />
            </Dropdown>
          </li>
          <li>
            <Dropdown label="More Filters" icon={<FaChevronDown size={10} />}>
              <Filters data={FiltersData} />
            </Dropdown>
          </li>
          <li>
            <Button
              className="flex items-center gap-2 px-0 text-sm text-white"
              variant="ghost"
              onClick={() => clearFilters()}
            >
              <FaRepeat size={14} />
              <span>Clear Filter</span>
            </Button>
          </li>
          <li>
            <ListAlert />
          </li>
          <li>
            <ViewChanger />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
