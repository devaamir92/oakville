'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Item } from '@radix-ui/react-dropdown-menu';

import Dropdown from '@components/ui/Dropdown';
import cn from '@utils/cn';

type Props = {
  listData: {
    name: string;
    link: string;
  }[];
};
const DropdownList: React.FC<Props> = ({ listData }) => {
  const params = useParams();

  return (
    <Dropdown
      icon={<BsThreeDotsVertical className="text-white" size={14} />}
      className="!w-fit !text-sm"
      ariaLabel="Categories"
      title="Categories"
      contentClassName="p-2 flex flex-col gap-1"
    >
      {listData.map(item => (
        <Item asChild data-state="closed" className="flex" key={item.name}>
          <Link
            href={item.link}
            className={cn(
              'size-full min-w-40 rounded  px-3 py-1.5 text-sm text-black outline-none transition-colors duration-200 ease-in-out hover:bg-primary-200',
              item.link.includes(params.slug as string) && 'bg-primary-200'
            )}
          >
            {item.name}
          </Link>
        </Item>
      ))}
    </Dropdown>
  );
};

export default DropdownList;
