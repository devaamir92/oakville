'use client';

import React from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

import { Item } from '@radix-ui/react-dropdown-menu';

import Dropdown from '@components/ui/Dropdown';

type Props = {
  listData: {
    name: string;
    link: string;
  }[];
};
const CommunitiesList: React.FC<Props> = ({ listData }) => {
  return (
    <Dropdown
      label="Community"
      icon={<FaChevronDown className="text-white" size={10} />}
      className="!w-fit items-center gap-2 !text-sm"
      contentClassName="p-2"
    >
      {listData.map(item => (
        <Item
          asChild
          data-state="closed"
          className="flex flex-col border-none outline-none"
          key={item.name}
        >
          <Link
            href={item.link}
            className="
              size-full min-w-40 rounded  px-3 py-1.5 text-sm text-black outline-none transition-colors duration-200 ease-in-out hover:bg-primary-200"
          >
            {item.name}
          </Link>
        </Item>
      ))}
    </Dropdown>
  );
};

export default CommunitiesList;
