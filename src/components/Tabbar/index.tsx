'use client';

import React from 'react';
import {
  FaArrowsRotate,
  FaBell,
  FaDollarSign,
  FaFilter,
} from 'react-icons/fa6';

import { usePathname, useRouter } from 'next/navigation';

import Price from '@components/Toolbar/Price';
import Dropdown from '@components/ui/Dropdown';
import Filters from '@components/Toolbar/Filters';
import ListAlert from '@components/Toolbar/ListAlert';

import Mobsort from './MobShort';

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
const Tabbar = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const clearFilters = () => {
    replace(pathname);
  };

  return (
    <div className="sticky bottom-0 z-[14] h-14 border-t bg-primary-500">
      <div className="flex h-full items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <Dropdown
            label="Price"
            className="flex-col-reverse items-center justify-center gap-1 text-sm"
            icon={<FaDollarSign size={16} />}
          >
            <Price type={pathname.includes('rent') ? 'rent' : 'sale'} />
          </Dropdown>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Dropdown
            label="Filters"
            className="flex-col-reverse items-center justify-center gap-1 text-sm"
            icon={<FaFilter size={16} />}
          >
            <Filters data={FiltersData} />
          </Dropdown>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <Mobsort />
        </div>
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1"
          onClick={() => clearFilters()}
        >
          <FaArrowsRotate className="text-base text-white" />
          <span className="text-sm text-white">Clear</span>
        </button>

        <ListAlert
          className="flex-col !gap-1 !text-sm text-white"
          icon={<FaBell className="text-base text-white" />}
          title="Alerts"
        />
      </div>
    </div>
  );
};

export default Tabbar;
