import Image from 'next/image';
import React, { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { BsEnvelopeFill } from 'react-icons/bs';

import { getSession } from '@lib/auth';

import Loader from '@components/Loader';

import EditProfile from './_components/editProfile';
import ResetPassword from './_components/resetPassword';
import Favourites from './_components/Favourites';
import ToolbarTab from './_components/toolbarTab';
import SavedSearches from './_components/savedSearch';

const Page = async ({ searchParams }: any) => {
  const session = await getSession();
  if (!session) {
    redirect('/');
  }

  return (
    <main className="container flex flex-col gap-4 py-10">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative aspect-square size-24">
            <Image
              src={session.user?.image || '/images/webp/user.webp'}
              alt="Profile"
              fill
              className="object-fill"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium capitalize">
              {session.user?.name}
            </h1>
            <p className="flex items-center gap-1 text-sm text-gray-500">
              <BsEnvelopeFill /> {session.user?.email}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <EditProfile session={session} />
          <ResetPassword session={session} />
        </div>
      </section>

      <ToolbarTab param={searchParams.tab} />
      <hr />
      {searchParams.tab === 'fav' || !searchParams.tab ? (
        <Suspense
          key={searchParams?.page ?? '1'}
          fallback={
            <div className="flex h-[calc(100vh-360px)] items-center justify-center">
              <Loader />
            </div>
          }
        >
          <Favourites
            page={Number(searchParams?.page ?? 1)}
            location="/profile"
          />
        </Suspense>
      ) : null}
      {searchParams.tab === 'srch' && (
        <div className="flex">
          <SavedSearches />
        </div>
      )}
    </main>
  );
};

export default Page;
