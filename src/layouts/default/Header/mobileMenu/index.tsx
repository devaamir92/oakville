'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { BsList } from 'react-icons/bs';
import {
  Content,
  DropdownMenu,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import Verification from '@components/ListingCard/Verification';

import Auth from '../auth';

import CollapsItems from './Collaps';

interface MobileMenuProps {
  navLinks: { name: string; link: string }[];
  listData: { name: string; link: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, listData }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <Auth />
      <Verification />
      <DropdownMenu>
        <Root
          open={isOpen}
          onOpenChange={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Trigger asChild>
            <button
              type="button"
              aria-label="mobile Menu"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center rounded p-2 text-white outline-none hover:bg-primary-600"
            >
              <BsList className="text-xl" />
            </button>
          </Trigger>
          <Portal>
            <Content
              className="z-50 min-w-80 rounded-md bg-white p-2"
              sideOffset={5}
              align="end"
            >
              <nav className="flex flex-col divide-y-[1px] divide-gray-300">
                {navLinks.map(({ name, link }) => {
                  let component;

                  if (name === 'Communities') {
                    component = (
                      <CollapsItems
                        key={name}
                        setIsOpen={setIsOpen}
                        listData={listData}
                      />
                    );
                  } else if (name === 'Auth') {
                    component = null;
                  } else {
                    component = (
                      <button
                        type="button"
                        key={name}
                        onClick={() => {
                          router.push(link);
                          setIsOpen(false);
                        }}
                        className="flex h-10 items-center px-2 text-lg text-primary-500"
                      >
                        {name}
                      </button>
                    );
                  }

                  return component;
                })}
              </nav>
            </Content>
          </Portal>
        </Root>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
