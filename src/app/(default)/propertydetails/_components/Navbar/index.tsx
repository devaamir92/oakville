'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

import LikeToggle from '@components/PropertyCard/LikeToggle';
import { Button } from '@components/ui/Button';

function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-[70px] z-30 flex h-12 items-center bg-primary-400">
      <div className="container flex items-center justify-between">
        <Button
          className="px-0 text-white"
          onClick={() => router.back()}
          variant="ghost"
        >
          <FaChevronLeft className="mr-2" size={14} />
          Back
        </Button>
        <ul className="flex items-center gap-8 text-sm text-white">
          <li>
            <Link href="#description">Property Description</Link>
          </li>
          <li>
            <Link href="#map">Map</Link>
          </li>
          <li>
            <Link href="#details">Property Details</Link>
          </li>
          <li>
            <Link href="/">Sold History</Link>
          </li>
        </ul>
        <div>
          <LikeToggle className="text-xl text-white" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
