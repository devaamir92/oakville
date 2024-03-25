'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaUser } from 'react-icons/fa6';

import { Item } from '@radix-ui/react-dropdown-menu';

import Dropdown from '@components/ui/Dropdown';
import { useLayout } from '@context/LayoutContext';
import { useFavLayout } from '@context/FavContext';
import { getFavourite } from '@lib/api/favourite';

import SignOut from './auth/signOut';

interface ProfileListProps {
  session: any;
}

function ProfileList({ session }: ProfileListProps) {
  const { onClose } = useLayout();
  const { setFavourite } = useFavLayout();

  useEffect(() => {
    if (session) {
      onClose();
      const fetchFavourite = async () => {
        const res = await getFavourite();
        const favourite = res;
        setFavourite(favourite);
      };
      fetchFavourite();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, onClose]);

  return (
    <Dropdown
      icon={<FaUser />}
      className="flex size-9 items-center justify-center rounded-full bg-primary-700"
      align="end"
    >
      <div className="flex flex-col gap-2 divide-y divide-gray-300">
        <div className="flex flex-col">
          <span className="text-center font-medium capitalize">
            {session.user.name}
          </span>
          <span className="text-center text-sm text-gray-500">
            {session.user.email}
          </span>
        </div>
        <Item asChild>
          <Link
            className="flex h-9 items-center justify-center rounded text-center transition-colors duration-200 ease-in-out hover:bg-primary-200 hover:outline-none "
            href="/profile"
          >
            Profile
          </Link>
        </Item>
        <Item asChild>
          <SignOut />
        </Item>
      </div>
    </Dropdown>
  );
}

export default ProfileList;
