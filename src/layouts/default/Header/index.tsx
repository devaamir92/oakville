import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

import { Input } from '@components/ui/Input';

import Login from './Login';

const linkClass =
  'text-base text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

export default function Header() {
  return (
    <div className="sticky left-0 top-0 z-10 flex w-full flex-col">
      <header className="flex h-[70px] justify-between bg-primary-500 px-4 shadow">
        <div className="container flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-6">
            <div>
              <span className="text-2xl font-bold text-white">
                <Image
                  src="/svg/logo-1.svg"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </span>
            </div>
            <div className="flex h-[36px] w-1/2 items-center gap-2 rounded bg-primary-400 px-2">
              <Input
                id="search"
                className="h-[34px] !border-none px-0 text-white placeholder:text-white"
                placeholder="Enter an Address"
              />
              <FaSearch className="text-white" />
            </div>
          </div>
          <nav className="hidden flex-1 items-center justify-end gap-14 lg:flex xl:text-base">
            <Link href="/" className={linkClass}>
              Home
            </Link>
            <Link href="/sell" className={linkClass}>
              Sell
            </Link>
            <Link href="/buy" className={linkClass}>
              Buy
            </Link>
            <Link href="/buy" className={linkClass}>
              Rent
            </Link>
            <Link href="/blog" className={linkClass}>
              Blog
            </Link>
            <Login />
          </nav>
        </div>
      </header>
    </div>
  );
}
