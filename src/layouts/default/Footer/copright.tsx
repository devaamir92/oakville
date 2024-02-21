import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    name: 'Facebook',
    icon: <FaFacebookF className="text-2xl lg:text-lg" />,
    href: 'https://www.facebook.com/PreserveOakville/',
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter className="text-2xl lg:text-lg" />,
    href: 'https://twitter.com/PreserveOak',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-2xl lg:text-lg" />,
    href: 'https://www.instagram.com/preserveoakville/',
  },
];

function Copright() {
  return (
    <div className="flex items-center justify-between border-t border-gray-500 py-5">
      <div className="text-sm text-white">
        © {new Date().getFullYear()} Preserve Oakville. All rights reserved.
      </div>
      <div className="flex items-center gap-3">
        {socials.map(social => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-12 items-center justify-center rounded-full bg-tertiary-700 text-white transition-colors duration-200 ease-in-out hover:bg-tertiary-500 hover:text-white lg:size-8"
          >
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Copright;
