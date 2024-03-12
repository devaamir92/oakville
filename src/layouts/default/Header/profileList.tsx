'use client';

import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa6';

import Dropdown from '@components/ui/Dropdown';

import SignOut from './auth/signOut';

interface ProfileListProps {
  session: any;
}

function ProfileList({ session }: ProfileListProps) {
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
        <SignOut session={session} />
      </div>
    </Dropdown>
  );
}

export default ProfileList;
