import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  image: string;
  href: string;
  alt: string;
  title: string;
}

const CommunityCard: React.FC<CardProps> = ({ image, href, alt, title }) => {
  return (
    <div className="group relative overflow-hidden rounded border border-gray-300  bg-white transition-all duration-200 ease-in-out hover:shadow-xl">
      <Link href={href} className=" flex flex-col overflow-hidden ">
        <div className="relative h-60">
          <Image
            src={image}
            width={300}
            height={250}
            alt={alt}
            className="size-full overflow-hidden object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center justify-between">
            <div className="relative flex items-center justify-center gap-1 text-base font-medium text-gray-700">
              <span className="w-full truncate">{title}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommunityCard;
