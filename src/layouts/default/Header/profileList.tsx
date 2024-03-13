'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaUser } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';
import { useLayout } from '@context/LayoutContext';
import { useFavLayout } from '@context/FavContext';
import { getFavourite } from '@lib/api/addFavourite';

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
        const favourite = res.data;
        setFavourite(favourite);
      };
      fetchFavourite();
    } else {
      setFavourite([]);
    }
  }, [session, onClose]);

  return (
    <Dropdown
      icon={<FaUser />}
      className="flex size-9 items-center justify-center rounded-full bg-primary-800"
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
        <Link
          className="flex h-9 items-center justify-center text-center transition-colors duration-200 ease-in-out hover:bg-primary-200 "
          href="/profile"
        >
          Profile
        </Link>
        <SignOut />
      </div>
    </Dropdown>
  );
}

export default ProfileList;
