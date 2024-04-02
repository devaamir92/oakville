'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Content,
  DropdownMenu,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import Link from 'next/link';

import { FaBars } from 'react-icons/fa';

import Verification from '@components/ListingCard/Verification';

import { useLayout } from '@context/LayoutContext';

import Auth from '../auth';

import SignOut from '../auth/signOut';

import CollapsItems from './Collaps';

interface MobileMenuProps {
  navLinks: { name: string; link: string }[];
  listData: { name: string; link: string }[];
  session: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navLinks,
  listData,
  session,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { setLogin } = useLayout();

  useEffect(() => {
    if (session?.user) {
      setLogin(false);
    }
  }, [session?.user, setLogin]);

  return (
    <div className="flex items-center lg:hidden">
      <Auth />
      <div className="hidden">
        <Verification />
      </div>
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
              className="flex size-10 items-center justify-center rounded bg-primary-600 p-2 text-white outline-none hover:bg-primary-700"
            >
              <FaBars size={18} />
            </button>
          </Trigger>
          <Portal>
            <Content
              className="z-50 w-96 min-w-80 rounded-md border border-gray-300 bg-white px-2 py-1"
              sideOffset={5}
              align="start"
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
                    component = (
                      <div
                        key={name}
                        className="flex flex-col divide-y-[1px] divide-gray-300"
                      >
                        {!session?.user ? (
                          <button
                            type="button"
                            key={name}
                            onClick={() => {
                              setLogin(true);
                              setIsOpen(false);
                            }}
                            className="flex h-12 items-center px-2 text-lg text-primary-500"
                          >
                            Login
                          </button>
                        ) : (
                          <>
                            <Item key={name} asChild>
                              <Link
                                type="button"
                                href="/profile"
                                className="flex h-12 items-center px-2 text-lg text-primary-500"
                              >
                                Profile
                              </Link>
                            </Item>
                            <SignOut />
                          </>
                        )}
                      </div>
                    );
                  } else {
                    component = (
                      <button
                        type="button"
                        key={name}
                        onClick={() => {
                          router.push(link);
                          setIsOpen(false);
                        }}
                        className="flex h-12 items-center px-2 text-lg text-primary-500"
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
