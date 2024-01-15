'use client';

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

import Copright from './copright';

const popularNeighborhoods = [
  { name: 'Properties in Urban Oakville', href: '/' },
  { name: 'Properties in Rural Oakville', href: '/' },
  { name: 'Properties in Uptown Core', href: '/' },
];

const popularSearches = [
  { name: 'Properties for Sale', href: '/' },
  { name: 'Properties for Rent', href: '/' },
  { name: 'Condos Properties', href: '/' },
  { name: 'Sold Properties', href: '/' },
];

const usefulLinks = [
  { name: 'Blog', href: '/' },
  { name: 'Land Transfer Tax Calculator', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Contact Us', href: '/' },
  { name: 'Privacy Policy', href: '/' },
  { name: 'Terms of Use', href: '/' },
];

const linkClass =
  'text-base text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

const Footer = () => {
  return (
    <footer className="bg-primary-500 px-4">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 pb-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <hr className="border-secondary-500" />
            <ul className="mt-4 flex flex-col gap-1">
              <li>
                <Link
                  target="_blank"
                  className={linkClass}
                  href="https://www.realtor.ca/agent/1736536/tariq-janjua-33-pearl-st-300-mississauga-ontario-l5m1x1#firstname=Tariq%20&amp;lastname=Janjua&amp;page=1&amp;sort=3-A"
                >
                  Tariq Janjua
                </Link>
              </li>
              <li className="text-white">Broker</li>
              <li className="text-white">
                SUTTON Group - SUMMIT Realty Inc, Brokerage 33 Pearl Street,
                Mississauga, On L5M1X1
              </li>
              <li>
                <Link href="tel:905-257-3633" className={linkClass}>
                  <FaPhone size={14} className="mr-2 inline-block" />
                  905-257-3633
                </Link>
              </li>
              <li>
                <Link href="mailto:info@abc.com" className={linkClass}>
                  <FaEnvelope size={14} className="mr-2 inline-block" />
                  info@abc.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Popular Searches
            </h3>
            <hr className="border-secondary-500" />
            <ul className="mt-4 flex flex-col gap-1">
              {popularSearches.map(search => (
                <li key={search.name}>
                  <Link href={search.href} className={linkClass}>
                    {search.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Popular Neighborhoods
            </h3>
            <hr className="border-secondary-500" />
            <ul className="mt-4 flex flex-col gap-1">
              {popularNeighborhoods.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Useful Links</h3>
            <hr className="border-secondary-500" />
            <ul className="mt-4 flex flex-col gap-1">
              {usefulLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Copright />
      </div>
    </footer>
  );
};

export default Footer;
