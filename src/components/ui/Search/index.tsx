'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Content,
  DropdownMenu,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import cn from '@utils/cn';
import { BsSearch } from 'react-icons/bs';

interface Props {
  className?: string;
  placeholder?: string;
}

type DataItem = {
  id: string;
  title: string;
};

const data: DataItem[] = [
  {
    id: '1',
    title: 'Item 1',
  },
  {
    id: '2',
    title: 'Item 2',
  },
  {
    id: '3',
    title: 'Item 3',
  },
  {
    id: '4',
    title: 'Item 4',
  },
  {
    id: '5',
    title: 'Item 5',
  },
];

const SearchComponent: React.FC<Props> = ({ className, placeholder }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (ref.current?.offsetWidth) {
      setWidth(ref.current.offsetWidth);
    }
  }, [ref.current?.offsetWidth]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DropdownMenu>
      <Root>
        <Trigger asChild ref={ref}>
          {/* <label
            htmlFor="search"
            role="searchbox"
            aria-label="Search for properties, agents, and more..."
            className={cn(
              'flex min-w-96 items-center gap-4 rounded px-2 text-sm',
              className
            )}
          >
            <input
              className="size-full bg-transparent outline-none placeholder:text-gray-100"
              type="text"
              id="search"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="text-white" size={14} />
          </label> */}
          <div
            role="searchbox"
            aria-label="Search for properties, agents, and more..."
            className={cn(
              'flex min-w-96 items-center gap-4 rounded px-2 text-sm',
              className
            )}
          >
            <input
              className="size-full bg-transparent outline-none placeholder:text-gray-100"
              type="text"
              id="search"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="text-white" size={14} />
          </div>
        </Trigger>
        <Portal>
          <Content
            className=" z-50 bg-white"
            style={{
              minWidth: width,
            }}
            sideOffset={4}
          >
            {filteredData.map(item => (
              <Item
                key={item.id}
                className="px-2 py-1.5 outline-none hover:bg-primary-200"
              >
                {item.title}
              </Item>
            ))}
          </Content>
        </Portal>
      </Root>
    </DropdownMenu>
  );
};

export default SearchComponent;
