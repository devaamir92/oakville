import Image from 'next/image';
import React from 'react';
import { redirect } from 'next/navigation';

import { BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';

import Card from '@components/ListingCard';

import { getSession } from '@lib/auth';

import getFeatureProperty from '@lib/api/getFeatureProperty';

import getBedroomString from '@utils/getbedroomString';

import getSlug from '@utils/getSlug';

import EditProfile from './_components/editProfile';
import ResetPassword from './_components/resetPassword';

const Page = async () => {
  const session = await getSession();
  const rows = await getFeatureProperty();

  if (!session) {
    redirect('/');
  }

  return (
    <main className="container flex flex-col gap-6 py-10">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative aspect-square size-32">
            <Image
              src={session.user?.image || '/images/webp/user.webp'}
              alt="Profile"
              fill
              className="object-fill"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium">{session.user?.name}</h1>
            <p className="flex items-center gap-1 text-gray-500">
              <BsEnvelopeFill /> {session.user?.email}
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <BsTelephoneFill /> {session.user?.phone || 'Not Provided'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <EditProfile session={session} />
          <ResetPassword session={session} />
        </div>
      </section>
      <div className="flex flex-1 flex-col gap-2">
        <h2 className="text-lg ">Favourites</h2>
        <hr />
      </div>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rows?.data?.map((item: any) => (
          <Card
            session={session}
            mls={item.Ml_num}
            key={item.id}
            bathrooms={item.Bath_tot ?? 0}
            bedrooms={getBedroomString(Number(item.Br), Number(item.Br_plus))}
            imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
            location={item.Addr}
            price={Number(item.Lp_dol).toLocaleString() ?? '0'}
            parking={item.Park_spcs ?? '0'}
            slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
            isLocked={item.Is_locked}
          />
        ))}
        {rows?.data?.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">No Favourites</h1>
            <p className="text-gray-500">
              You have not added any favourites yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
