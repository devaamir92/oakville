'use client';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import SearchComponent from '@components/ui/Search';
import ListAlert from '@components/Toolbar/ListAlert';
import Types from '@components/Toolbar/Types';
import Price from '@components/Toolbar/Price';

const TypeData = ['Coming Soon', 'Sold Out', 'Selling Now'];
const yers = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
function Toolbar() {
  return (
    <div className="flex w-full items-center justify-end bg-primary-400 py-2">
      <nav className="container flex w-full items-center">
        <ul className="flex flex-1 items-center justify-between gap-4  text-sm">
          <li className="w-1/3">
            <SearchComponent className="flex-1 bg-primary-500" />
          </li>
          <li className="">
            <Dropdown label="Type" icon={<FaChevronDown size={10} />}>
              <Types items={TypeData} />
            </Dropdown>
          </li>
          <li className="">
            <Dropdown label="More Filters" icon={<FaChevronDown size={10} />}>
              <Price />
            </Dropdown>
          </li>
          <li className="">
            <Dropdown label="Type" icon={<FaChevronDown size={10} />}>
              <Types items={yers} />
            </Dropdown>
          </li>
          <li className="">
            <ListAlert />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Toolbar;
