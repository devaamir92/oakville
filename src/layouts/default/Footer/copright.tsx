import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    name: 'Facebook',
    icon: <FaFacebookF size={18} />,
    href: 'https://www.facebook.com/PreserveOakville/',
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter size={18} />,
    href: 'https://twitter.com/PreserveOak',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={18} />,
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
            className="bg-tertiary-700 hover:bg-tertiary-500 flex size-8 items-center justify-center rounded-full text-white transition-colors duration-200 ease-in-out hover:text-white"
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
