'use client';

import React from 'react';
import { FaChevronDown, FaRepeat } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import { Button } from '@components/ui/Button';

import Types from './Types';
import Price from './Price';
import Filters from './Filters';
import ListAlert from './ListAlert';
import ViewChanger from './View';

const FiltersData = {
  bedrooms: [
    {
      name: '1BD+',
      value: '1',
    },
    {
      name: '2BD+',
      value: '2',
    },
    {
      name: '3BD+',
      value: '3',
    },
    {
      name: '4BD+',
      value: '4',
    },
    {
      name: '5BD+',
      value: '5',
    },
  ],
  bathrooms: [
    {
      name: '1BTH+',
      value: '1',
    },
    {
      name: '2BTH+',
      value: '2',
    },
    {
      name: '3BTH+',
      value: '3',
    },
    {
      name: '4BTH+',
      value: '4',
    },
    {
      name: '5BTH+',
      value: '5',
    },
  ],
  Basement: [
    {
      name: 'Apt',
      value: 'appartment',
    },
    {
      name: 'Unfinished',
      value: 'unfinished',
    },
    {
      name: 'Finished',
      value: 'finished',
    },

    {
      name: 'Part Fin',
      value: 'part-fin',
    },
    {
      name: 'W/O',
      value: 'w-o',
    },
    {
      name: 'Fin W/O',
      value: 'fin-walk-out',
    },
    {
      name: 'Sep Entrance',
      value: 'sep-entrance',
    },
  ],
};

const TypeData = [
  'Condo Apt',
  'Condo Townhouse',
  'Att/Row/Townhouse',
  'Semi-Detached',
  'Detached',
  'Store W/Apt/Offc',
];

function Toolbar() {
  return (
    <div
      style={{
        top: '56px',
      }}
      className="sticky z-50 flex h-12 items-center justify-end bg-primary-400 px-4"
    >
      <nav className="container flex items-center justify-end">
        <ul className="flex items-center justify-center gap-4 text-sm xl:gap-9 2xl:gap-6">
          <li>
            <Dropdown label="Type" icon={<FaChevronDown size={10} />}>
              <Types items={TypeData} />
            </Dropdown>
          </li>
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
}

export default Toolbar;
