'use client';

import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

import Dropdown from '@components/ui/Dropdown';
import { Item } from '@radix-ui/react-dropdown-menu';

type Props = {
  listData: {
    name: string;
    link: string;
  }[];
};
const CommunitiesList: React.FC<Props> = ({ listData }) => {
  return (
    <Dropdown
      label="Communities"
      icon={<FaChevronDown className="text-white" size={10} />}
    >
      {listData.map(item => (
        <Item className="" key={item.name}>
          <Link
            href={item.link}
            className="text-base text-primary-700 transition-colors duration-200 ease-in-out hover:text-primary-200"
          >
            {item.name}
          </Link>
        </Item>
      ))}
    </Dropdown>
  );
};

export default CommunitiesList;
