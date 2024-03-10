'use client';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import Types from '@components/Toolbar/Types';

import Search from './Search';

const TypeData = [
  {
    label: 'Condo',
    value: '.C.',
    id: 1,
  },
  {
    label: 'Townhouse',
    value: '.A.',
    id: 2,
  },
  {
    label: 'Detached',
    value: '.S.',
    id: 3,
  },
];

const Status = [
  {
    label: 'Coming Soon',
    value: 'Coming Soon',
    id: 1,
  },
  {
    label: 'Selling Now',
    value: 'Selling Now',
    id: 2,
  },
  {
    label: 'Sold Out',
    value: 'Sold Out',
    id: 3,
  },
];

const Occupancy = [
  {
    label: '2024',
    value: '2024',
    id: 1,
  },
  {
    label: '2025',
    value: '2025',
    id: 2,
  },
  {
    label: '2026',
    value: '2026',
    id: 3,
  },
  {
    label: '2027',
    value: '2027',
    id: 4,
  },
  {
    label: '2028',
    value: '2028',
    id: 5,
  },
  {
    label: '2029',
    value: '2029',
    id: 6,
  },
  {
    label: '2030',
    value: '2030',
    id: 7,
  },
];

function Toolbar() {
  return (
    <div className="flex w-full items-center justify-end bg-tertiary-500 py-1.5">
      <nav className="container relative flex w-full items-center">
        <ul className="flex flex-1 items-center justify-between gap-4  text-sm">
          <li className="">
            <Dropdown label="Type" icon={<FaChevronDown size={10} />}>
              <Types items={TypeData} />
            </Dropdown>
          </li>

          <li className="">
            <Dropdown label="Status" icon={<FaChevronDown size={10} />}>
              <Types items={Status} />
            </Dropdown>
          </li>
          <li className=" text-white">
            <Dropdown label="Occupancy" icon={<FaChevronDown size={10} />}>
              <Types items={Occupancy} />
            </Dropdown>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Toolbar;
