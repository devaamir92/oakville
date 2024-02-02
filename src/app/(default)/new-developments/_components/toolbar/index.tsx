'use client';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import SearchComponent from '@components/ui/Search';
import Types from '@components/Toolbar/Types';

const TypeData = ['Condo', 'Townhouse', 'Detached'];
const Status = ['Coming Soon', 'Selling Now', 'Sold Out'];
const Occupancy = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
function Toolbar() {
  return (
    <div className="flex w-full items-center justify-end bg-primary-400 py-1.5">
      <nav className="container flex w-full items-center">
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
          <li className="">
            <SearchComponent
              className="h-[36px] w-96 bg-primary-500"
              placeholder="
              Search by builder or project name...
            "
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Toolbar;
