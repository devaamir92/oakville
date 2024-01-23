import Link from 'next/link';
import Image from 'next/image';

import SearchComponent from '@components/ui/Search';

import Auth from './auth';
import CommunitiesList from './communitiesList';

const listData = [
  { name: 'Schools', link: '/schools' },
  { name: 'Banks', link: '/banks' },
  { name: 'Hospitals', link: '/hospitals' },
  { name: 'Mosques', link: '/mosques' },
  { name: 'Churches', link: '/churches' },
  { name: 'Temples', link: '/temples' },
  { name: 'Others', link: '/others' },
];

const linkClass =
  'text-sm text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 flex  h-[70px] w-full flex-col bg-primary-500">
      <div className="container grid h-full grid-cols-12 items-center ">
        <div className="col-span-4 flex items-center gap-6">
          <Link href="/">
            <Image src="/svg/logo-1.svg" alt="logo" width={55} height={55} />
          </Link>

          <SearchComponent
            className="w-full bg-primary-400"
            placeholder="Search by address, MLS #..."
          />
        </div>
        <div className="col-span-8 h-full">
          <nav className="flex h-full items-center justify-end lg:flex xl:gap-6 xl:text-sm 2xl:gap-10">
            <Link href="/" className={linkClass}>
              Home
            </Link>
            <Link href="/buy" className={linkClass}>
              Buy
            </Link>
            <Link href="/sell" className={linkClass}>
              Sell
            </Link>
            <Link href="/rent" className={linkClass}>
              Rent
            </Link>
            <Link href="/" className={linkClass}>
              Sold Prices
            </Link>
            <Link href="/new-developments" className={linkClass}>
              New Developments
            </Link>
            <CommunitiesList listData={listData} />
            <Link href="/blog" className={linkClass}>
              Blog
            </Link>
            <Auth />
          </nav>
        </div>

        {/* <div className="flex h-full flex-1 items-center gap-8">
          <Link href="/">
            <Image src="/svg/logo-1.svg" alt="logo" width={60} height={60} />
          </Link>
          <div className="flex h-[36px] w-full items-center gap-2 rounded bg-primary-400 px-2">
            <Input
              id="search"
              className="h-[34px] !border-none px-0 text-white placeholder:text-white"
              placeholder="Enter an Address"
            />
            <FaSearch className="text-white" />
          </div>
        </div>
        <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex xl:text-base">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/buy" className={linkClass}>
            Buy
          </Link>
          <Link href="/sell" className={linkClass}>
            Sell
          </Link>
          <Link href="/rent" className={linkClass}>
            Rent
          </Link>
          <Link href="/rent" className={linkClass}>
            Sold Prices
          </Link>
          <Link href="/rent" className={linkClass}>
            New Developments
          </Link>
          <CommunitiesList listData={listData} />
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Auth />
        </nav> */}
      </div>
    </header>
  );
}
