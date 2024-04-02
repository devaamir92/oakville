import React from 'react';

import { useRouter } from 'next/navigation';

import { Content, Root, Trigger } from '@radix-ui/react-collapsible';

import { FaChevronDown } from 'react-icons/fa';

interface CollapsItemsProps {
  setIsOpen: (open: boolean) => void;
  listData: { name: string; link: string }[];
}

const CollapsItems: React.FC<CollapsItemsProps> = ({ setIsOpen, listData }) => {
  const router = useRouter();

  return (
    <Root>
      <Trigger asChild>
        <button
          type="button"
          aria-label="mobile Menu"
          className="flex h-12 w-full items-center justify-between px-2 text-lg text-primary-500"
        >
          Communities <FaChevronDown size={12} />
        </button>
      </Trigger>
      <Content className="bg-white p-2">
        {listData.map(({ name, link }) => (
          <button
            key={name}
            type="button"
            className="block w-full px-2 py-1 text-left text-base text-primary-500"
            onClick={() => {
              setIsOpen(false);
              router.push(link);
            }}
          >
            {name}
          </button>
        ))}
      </Content>
    </Root>
  );
};

export default CollapsItems;
