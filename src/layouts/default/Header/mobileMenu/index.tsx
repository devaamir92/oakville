'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';

import { Button } from '@components/ui/Button';

import Auth from '../auth';

interface MobileMenuProps {
  navLinks: { name: string; link: string }[];
  //   listData?: { name: string; link: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        className="size-10 border-primary-400 p-0 hover:bg-primary-600 lg:hidden"
        variant="outline"
        onClick={() => setShow(!show)}
      >
        <BsList className="text-white" size={24} />
      </Button>
      {show && (
        <div className="absolute inset-x-[2%] top-[60px]  w-[96%] border bg-white p-2">
          <nav className="flex flex-col divide-y-[1px] divide-gray-300">
            {navLinks.map(({ name, link }) => {
              let component;

              if (name === 'Auth') {
                component = <Auth />;
              } else {
                component = (
                  <Link
                    key={name}
                    href={link}
                    className="flex h-10 items-center px-2 text-lg text-primary-500 transition-colors duration-200 ease-in-out hover:bg-primary-500 hover:text-white"
                  >
                    {name}
                  </Link>
                );
              }

              return component;
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
