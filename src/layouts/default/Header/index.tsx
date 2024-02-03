import Link from 'next/link';
import Image from 'next/image';
import { BsList } from 'react-icons/bs';

import { Button } from '@components/ui/Button';
import { Desktop, Mobile } from '@components/ua';
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
    <>
      <Desktop>
        <header className="sticky left-0 top-0 z-10 flex  h-[70px] w-full flex-col bg-primary-500">
          <div className="container flex h-full grid-cols-12 items-center ">
            <div className="flex w-[40%] items-center gap-6">
              <Link href="/" className="relative size-[55px]">
                <Image src="/images/svg/logo-1.svg" alt="logo" fill />
              </Link>
              <SearchComponent
                className="h-[36px] w-96 bg-primary-400"
                placeholder="Search by address, MLS #..."
              />
            </div>
            <div className="h-full w-[60%]">
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
                <Link href="/sold" className={linkClass}>
                  Sold
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
          </div>
        </header>
      </Desktop>
      <Mobile>
        <header className="bg-primary-500 py-2">
          <div className="container flex flex-col">
            <div className="flex flex-1 items-center justify-between">
              <Link href="/" className="relative size-[55px]">
                <Image src="/images/svg/logo-1.svg" alt="logo" fill />
              </Link>
              <Button
                className="size-10 border-primary-400 p-0"
                variant="outline"
              >
                <BsList className="text-white" size={24} />
              </Button>
            </div>
            <hr className="my-2 border-primary-400" />
            <div className="flex">
              <nav className="flex flex-1">
                <SearchComponent
                  className="h-10 w-full bg-primary-400"
                  placeholder="Search by address, MLS #..."
                />
              </nav>
            </div>
          </div>
        </header>
      </Mobile>
    </>
  );
}
