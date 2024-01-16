import React from 'react';
import Link from 'next/link';

const Links = [
  {
    name: 'Styles',
    href: '/buy',
  },
  {
    name: 'Type',
    href: '/sell',
  },
  {
    name: 'Price',
    href: '/rent',
  },
  {
    name: 'More Filters',
    href: '/mortgage',
  },
  {
    name: 'Clera Filters',
    href: '/agent',
  },
  {
    name: 'Listing Alert',
    href: '/agent',
  },
  {
    name: 'List View',
    href: '/agent',
  },
];

const linkClass =
  'text-sm text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

function Toolbar() {
  return (
    <div
      style={{
        top: '70px',
      }}
      className="sticky z-50 flex h-12 items-center justify-end bg-primary-400 px-4"
    >
      <nav className="container flex items-center justify-end">
        <ul className="flex items-center gap-4 text-sm">
          {Links.map(link => (
            <li key={link.name}>
              <Link href={link.href} className={linkClass}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Toolbar;
