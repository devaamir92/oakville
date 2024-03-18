'use client';

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

import Copright from './copright';

const popularNeighborhoods = [
  {
    name: 'Properties for sale in Iroquois Ridge North',
    href: '/homes-for-sale/iroquois-ridge-north',
  },
  {
    name: 'Properties for sale in Rural Oakville',
    href: '/homes-for-sale/rural-oakville',
  },
  {
    name: 'Properties for sale in Uptown Core',
    href: '/homes-for-sale/uptown-core',
  },
  {
    name: 'Properties for rent in Iroquois Ridge North',
    href: '/homes-for-rent/iroquois-ridge-north',
  },
  {
    name: 'Properties for rent in Rural Oakville',
    href: '/homes-for-rent/rural-oakville',
  },
  {
    name: 'Properties for rent in Uptown Core',
    href: '/homes-for-rent/uptown-core',
  },
];

const communitySearches = [
  { name: 'Schools in The Preserve Oakville', href: '/schools' },
  { name: 'Banks near The Preserve Oakville', href: '/banks' },
  {
    name: 'Religious Places near The Preserve Oakville',
    href: '/religious-places',
  },

  { name: 'Stores near the preserve Oakville', href: '/stores' },
  {
    name: 'Healthcare facilities near The Preserve Oakville',
    href: '/healthcare-facilities',
  },
  { name: 'Parks & Rec in The Preserve Oakville', href: '/parks-rec' },
];

const usefulLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Mortgage Calculators', href: '/calculators' },
  {
    name: 'Land Transfer Tax Calculator',
    href: '/land-transfer-tax-calculator',
  },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const linkClass =
  'text-lg py-3 lg:py-0 lg:text-sm text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

const Footer = () => {
  return (
    <footer className="bg-tertiary-500">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 pb-5 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <p className="text-lg font-normal text-white">Contact Us</p>
            <hr className="mt-1 border-gray-500" />
            <ul className="mt-4 flex flex-col gap-4 lg:gap-1">
              <li>
                <Link
                  target="_blank"
                  className={linkClass}
                  href="https://www.realtor.ca/agent/1736536/tariq-janjua-33-pearl-st-300-mississauga-ontario-l5m1x1#firstname=Tariq%20&amp;lastname=Janjua&amp;page=1&amp;sort=3-A"
                >
                  Tariq Janjua / Shaheena Hemraj
                </Link>
              </li>
              <li className="text-white">Broker</li>
              <li className="text-sm text-white">Janjua Real Estate Group</li>
              <li className="text-sm text-white">
                <address className="not-italic">
                  SUTTON Group - SUMMIT Realty Inc, Brokerage
                  <br /> 33 Pearl Street, Mississauga, On L5M1X1
                </address>
              </li>
              <li>
                <Link href="tel:647 929 9072" className={linkClass}>
                  <FaPhone size={14} className="mr-2 inline-block" />
                  647 929 9072
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@preserveoakville.ca"
                  className={linkClass}
                >
                  <FaEnvelope size={14} className="mr-2 inline-block" />
                  info@preserveoakville.ca
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-normal text-white">Community Guide</p>
            <hr className="mt-1 border-gray-500" />
            <ul className="mt-4 flex flex-col gap-4 lg:gap-1">
              {communitySearches.map(search => (
                <li key={search.name}>
                  <Link href={search.href} className={linkClass}>
                    {search.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-normal text-white">
              Popular Neighborhoods
            </p>
            <hr className="mt-1 border-gray-500" />
            <ul className="mt-4 flex flex-col gap-4 lg:gap-1">
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
            <p className="text-lg font-normal text-white">Useful Links</p>
            <hr className="mt-1 border-gray-500" />
            <ul className="mt-4 flex flex-col gap-4 lg:gap-1">
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
