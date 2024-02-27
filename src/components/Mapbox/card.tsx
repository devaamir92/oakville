import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';

interface CardProps {
  location: string;
  bedrooms?: string;
  bathrooms?: string;
  price: string;
  imageUrl: string;
  parking?: string;
  slug?: string;
  isLocked?: boolean;
}

const PropCard: React.FC<CardProps> = ({
  location,
  bedrooms,
  bathrooms,
  price,
  imageUrl,
  parking,
  slug = '/',
  isLocked,
}) => {
  return (
    <div className="group relative overflow-hidden rounded border border-gray-300  bg-white transition-all duration-200 ease-in-out hover:shadow-xl">
      <Link href={slug} className=" flex flex-col overflow-hidden ">
        <div className="relative h-60">
          <Image
            src={imageUrl}
            fill
            alt={location}
            sizes="33vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3">
            <span className="rounded bg-primary px-3 py-1.5 text-sm font-semibold uppercase text-white">
              $ {price}
              {isLocked && (
                <span className="ml-1 text-xs font-normal">Locked</span>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center justify-between">
            <div className="relative flex items-center gap-1 text-base font-medium text-gray-700">
              <MdLocationOn size={20} className="mb-1" />
              <span className="w-full truncate">{location}</span>
            </div>
            {/* <LikeToggle /> */}
          </div>
          <div className="flex justify-between gap-1 text-center text-gray-500">
            <div className="flex items-center gap-2 divide-x-[1px]">
              <div className="flex items-center gap-1">
                <span className="text-sm">{bedrooms}</span>
                <span className="text-sm">Beds</span>
              </div>

              <div className="flex items-center gap-1 pl-2">
                <span className="text-sm">{bathrooms}</span>
                <span className="text-sm">Baths</span>
              </div>
              <div className="flex items-center gap-1 pl-2">
                <span className="text-sm">{parking}</span>
                <span className="text-sm">Parking</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropCard;
