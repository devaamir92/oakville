import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import { Input } from '@components/ui/Input';
import Image from 'next/image';

const linkClass =
  'text-sm text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-[55px] justify-between bg-primary-500 px-4 shadow">
      <div className="container flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-6">
          <div>
            <span className="text-2xl font-bold text-white">
              <Image src="/logo-1.svg" alt="logo" width={40} height={40} />
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
        <nav className="hidden flex-1 items-center justify-between text-sm lg:flex">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/buy" className={linkClass}>
            Buy
          </Link>
          <Link href="/sell" className={linkClass}>
            Sell
          </Link>
          <Link href="/new-developments" className={linkClass}>
            New Developments
          </Link>
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Link
            href="/login"
            className="rounded bg-primary-400 px-7 py-2 text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
