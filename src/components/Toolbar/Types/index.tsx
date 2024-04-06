'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import cn from '@utils/cn';

interface Props {
  type: 'Sale' | 'Lease' | 'Sold';
}

const TypeData = [
  {
    label: 'All Listings',
    href: '/homes-for-sale',
    rentHref: '/homes-for-rent',
    soldHref: '/sold-homes',
    id: 0,
  },
  {
    label: 'Detached',
    href: '/houses-for-sale',
    rentHref: '/houses-for-rent',
    soldHref: '/sold-houses',
    id: 5,
  },
  {
    label: 'Row/Townhouse',
    href: '/townhouses-for-sale',
    rentHref: '/townhouses-for-rent',
    soldHref: '/sold-townhouses',
    id: 3,
  },
  {
    label: 'Condo Apt',
    href: '/condos-for-sale',
    rentHref: '/condos-for-rent',
    soldHref: '/sold-condos',
    id: 1,
  },
  {
    label: 'Condo Townhouse',
    href: '/condo-townhouses-for-sale',
    rentHref: '/condo-townhouses-for-rent',
    soldHref: '/sold-condo-townhouses',
    id: 2,
  },
  {
    label: 'Commercial',
    href: '/commercial-property-for-sale',
    rentHref: '/commercial-property-for-rent',
    soldHref: '/sold-commercial-property',
    id: 6,
  },
];

const Types: React.FC<Props> = ({ type }) => {
  const pathname = usePathname();

  const getHref = (item: any) => {
    switch (type) {
      case 'Sale':
        return item.href;
      case 'Lease':
        return item.rentHref;
      case 'Sold':
        return item.soldHref;
      default:
        return item.href;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {TypeData.map(item => (
        <Link
          key={item.id}
          href={getHref(item)}
          className={cn(
            'flex flex-1 cursor-pointer justify-center gap-2 whitespace-nowrap rounded  border border-gray-300 px-2 py-1.5 text-sm text-black  transition-colors ease-in-out hover:bg-tertiary-200',
            {
              'bg-tertiary-500 text-white hover:bg-tertiary-500':
                pathname === getHref(item),
            }
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Types;
