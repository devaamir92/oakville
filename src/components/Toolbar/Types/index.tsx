'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import cn from '@utils/cn';

interface Props {
  type: 'Sale' | 'Lease';
}

const TypeData = [
  {
    label: 'All Listings',
    href: '/homes-for-sale',
    rentHref: '/homes-for-rent',
    id: 0,
  },
  {
    label: 'Detached',
    href: '/houses-for-sale',
    rentHref: '/houses-for-rent',
    id: 5,
  },
  {
    label: 'Row/Townhouse',
    href: '/townhouses-for-sale',
    rentHref: '/townhouses-for-rent',
    id: 3,
  },
  {
    label: 'Condo Apt',
    href: '/condos-for-sale',
    rentHref: '/condos-for-rent',
    id: 1,
  },
  {
    label: 'Cond Townhouse',
    href: '/condo-townhouses-for-sale',
    rentHref: '/condo-townhouses-for-rent',
    id: 2,
  },
  {
    label: 'Commercial',
    href: '/commercial-property-for-sale',
    rentHref: '/commercial-property-for-rent',
    id: 6,
  },
];

const Types: React.FC<Props> = ({ type }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {TypeData.map(item => (
        <Link
          key={item.id}
          href={type === 'Lease' ? item.rentHref : item.href}
          className={cn(
            'flex flex-1 cursor-pointer justify-center whitespace-nowrap rounded bg-tertiary-500 px-3 py-1.5 text-sm text-white  transition-colors ease-in-out',
            {
              'bg-primary-500 text-white':
                pathname === (type === 'Lease' ? item.rentHref : item.href),
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
