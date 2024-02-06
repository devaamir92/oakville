import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import LikeToggle from './LikeToggle';

interface CardProps {
  location: string;
  bedrooms: string;
  bathrooms: string;
  price: string;
  imageUrl: string;
  parking: string;
  slug?: string;
}

const ListingCard: React.FC<CardProps> = ({
  location,
  bedrooms,
  bathrooms,
  price,
  imageUrl,
  parking,
  slug,
}) => {
  return (
    <Link
      href={slug ? `${slug}` : '/propertydetails'}
      className="group flex flex-col overflow-hidden rounded border border-gray-300 bg-white  transition-all duration-200 ease-in-out hover:shadow-xl"
    >
      <div className="relative h-60">
        <Image
          src={imageUrl}
          fill
          alt={location}
          sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
          className="object-cover"
        />
        <div className="absolute bottom-3 left-3">
          <span className="rounded bg-primary px-3 py-1.5 text-sm font-semibold uppercase text-white">
            $ {price}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <div className="relative flex items-center gap-1 text-base font-medium text-gray-700">
            <MdLocationOn size={20} className="mb-1" />
            <span className="w-full truncate">{location}</span>
          </div>
          <LikeToggle />
        </div>
        <div className="flex justify-between gap-1 text-center text-gray-500">
          <div className="flex items-center divide-x-[1px]">
            <div className="flex items-center pr-2">
              <span className="text-sm">{bedrooms}</span>
            </div>

            <div className="flex items-center px-2">
              <span className="text-sm">{bathrooms}</span>
            </div>
            <div className="flex items-center pl-2">
              <span className="text-sm">{parking}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
