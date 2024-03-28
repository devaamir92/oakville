import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import moment from 'moment';

import LikeToggle from './LikeToggle';
import LoginBtn from './loginbtn';
import VerBtn from './verBtn';

interface CardProps {
  mls?: string;
  location: string;
  bedrooms?: string;
  bathrooms?: string;
  price: string;
  imageUrl: string;
  parking?: string;
  slug: string;
  isLocked?: boolean;
  session?: any;
  status?: string;
  dom?: string;
  tssql?: string;
}

const ListingCard: React.FC<CardProps> = ({
  mls,
  location,
  bedrooms,
  bathrooms,
  price,
  imageUrl,
  parking,
  slug,
  isLocked,
  session,
  status,
  dom,
  tssql,
}) => {
  return (
    <div className="group relative overflow-hidden rounded border border-gray-300  bg-white transition-all duration-200 ease-in-out hover:shadow-xl">
      {!session && <LoginBtn status={status} isLocked={isLocked} />}

      {session && !session?.user.verified && (
        <VerBtn status={status} isLocked={isLocked} />
      )}
      <Link href={slug} className=" flex flex-col overflow-hidden ">
        <div className="relative h-60">
          <Image
            src={imageUrl}
            width={300}
            height={250}
            alt={location}
            className="size-full overflow-hidden object-cover "
          />
          <div className="absolute bottom-3 left-3">
            <span className="rounded bg-primary px-3 py-1.5 text-sm font-semibold uppercase text-white">
              $ {price}
            </span>
          </div>
          <div className="absolute right-3 top-3">
            <span className="rounded bg-white px-3 py-1.5 text-sm font-semibold  text-primary">
              {(Number(dom) === 0 && moment(tssql).fromNow()) ||
                (Number(dom) === 1 && 'Listed 1 day ago') ||
                `Listed ${dom} days ago`}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center justify-between">
            <div className="relative flex items-center gap-1 text-base font-medium text-gray-700">
              <MdLocationOn size={20} className="mb-1" />
              <span className="w-full truncate">{location}</span>
            </div>
            <LikeToggle session={session} mls={mls} />
          </div>
          <div className="flex justify-between gap-1 text-center text-gray-500">
            <div className="flex items-center gap-2 divide-x-[1px]">
              <div className="flex items-center gap-1">
                <span className="text-sm">{bedrooms || 0}</span>
                <span className="text-sm">Beds</span>
              </div>

              <div className="flex items-center gap-1 pl-2">
                <span className="text-sm">{bathrooms}</span>
                <span className="text-sm">Baths</span>
              </div>
              <div className="flex items-center gap-1 pl-2">
                <span className="text-sm">{parking || 0}</span>
                <span className="text-sm">Parking</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
