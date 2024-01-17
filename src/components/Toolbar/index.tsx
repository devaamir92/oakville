'use client';

import React from 'react';

import { FaBell, FaChevronDown, FaList, FaRepeat } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import { Button } from '@components/ui/Button';

import Styles from './Styles';
import Price from './Price';
import MoreFilters from './MoreFilters';

const StylesData = [
  'Bungalow',
  'Bungaloft',
  'Bungalow Raised',
  'Backsplit 3',
  'Backsplit 4',
  'Backsplit 5',
  'Sidesplit 3',
  'Sidesplit 4',
  'Sidesplit 5',
];

const Filters = {
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
      name: 'Full',
      value: 'full',
    },
    {
      name: 'Fin W/O',
      value: 'fin-walk-out',
    },
    {
      name: 'Sep Entrance',
      value: 'sep-entrance',
    },
    {
      name: 'W/O',
      value: 'w-o',
    },
    {
      name: 'Part Bsmt',
      value: 'part-bsmt',
    },
  ],
};

const TypeData = [
  'Condo Apt',
  'Condo Townhouse',
  'Stacked Townhouse',
  'Store W/Apt/Offc',
  'Att/Row/Townhouse',
  'Semi-Detached',
  'Link',
  'Detached',
];

function Toolbar() {
  return (
    <div
      style={{
        top: '70px',
      }}
      className="sticky z-50 flex h-12 items-center justify-end bg-primary-400 px-4"
    >
      <nav className="container flex items-center justify-end">
        <ul className="flex items-center gap-2 text-sm">
          {/* <li>
            <Dropdown label="Styles" icon={<FaChevronDown size={10} />}>
              <Styles items={StylesData} />
            </Dropdown>
          </li> */}
          <li>
            <Dropdown label="Type" icon={<FaChevronDown size={10} />}>
              <Styles items={TypeData} />
            </Dropdown>
          </li>
          <li>
            <Dropdown label="Price" icon={<FaChevronDown size={10} />}>
              <Price />
            </Dropdown>
          </li>
          <li>
            <Dropdown label="More Filters" icon={<FaChevronDown size={10} />}>
              <MoreFilters data={Filters} />
            </Dropdown>
          </li>
          <li>
            <Button
              className="flex items-center gap-2 px-2 text-sm text-white"
              variant="ghost"
            >
              <FaRepeat size={14} />
              <span>Clear Filter</span>
            </Button>
          </li>
          <li>
            <Button
              className="flex items-center gap-2 px-2 text-sm text-white"
              variant="ghost"
            >
              <FaBell size={14} />
              <span>Listing Alert</span>
            </Button>
          </li>
          <li>
            <Button
              className="flex items-center gap-2 px-2 text-sm text-white"
              variant="ghost"
            >
              <FaList size={14} />
              <span>List View</span>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Toolbar;
