import Link from 'next/link';
import Image from 'next/image';

import SearchComponent from '@components/ui/Search';

import { getSession } from '@lib/getsession';

import MobileMenu from './mobileMenu';
import CommunitiesList from './communitiesList';

import LoginButton from './auth/LoginButton';
import ProfileList from './profileList';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Buy', link: '/houses-for-sale' },
  { name: 'Sell', link: '/home-evaluation' },
  { name: 'Rent', link: '/homes-for-rent' },
  { name: 'Sold', link: '/sold-homes' },
  { name: 'New Homes', link: '/new-homes' },
  { name: 'Communities', link: '/communities' }, // or the appropriate link
  { name: 'Blog', link: '/blog' },
  { name: 'Auth', link: '/auth' },
];

const listData = [
  { name: 'Schools', link: '/schools' },
  {
    name: 'Banks',
    link: '/banks',
  },
  { name: 'Stores', link: '/stores' },
  { name: 'Religious Places', link: '/religious-places' },
  {
    name: 'Hospitals / walk-in clinics / vets',
    link: '/healthcare-facilities',
  },
  { name: 'Parks & Rec', link: '/parks-rec' },
];

const linkClass =
  'text-sm text-white hover:text-primary-200 transition-colors duration-200 ease-in-out';

export default async function Header() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-30 bg-primary-500 py-2 shadow lg:h-[70px] lg:py-0">
      <div className="container flex h-full flex-col items-center gap-2 lg:flex-row">
        <div className="flex w-full items-center justify-between lg:w-[55px]">
          <Link href="/" className="relative size-[45px] lg:size-[55px]">
            <Image
              src="/images/svg/oakville-leaf.svg"
              alt="logo"
              fill
              sizes="(max-width: 767px) 100px, 150px"
              className="object-contain"
            />
          </Link>
          <MobileMenu
            session={session}
            navLinks={navLinks}
            listData={listData}
          />
        </div>
        <div className="w-full lg:hidden">
          <hr className="border-primary-400" />
        </div>
        <div className="ml-0 w-full lg:ml-4 lg:w-72 xl:w-96">
          <SearchComponent />
        </div>
        <div className="hidden w-full lg:flex lg:justify-end">
          <nav className="flex size-full items-center lg:justify-between xl:w-fit xl:gap-6 xl:text-sm 2xl:gap-10">
            {navLinks.map(({ name, link }) => {
              let component;

              if (name === 'Communities') {
                component = <CommunitiesList key={name} listData={listData} />;
              } else if (name === 'Auth') {
                component = !session?.user ? (
                  <LoginButton key={name} />
                ) : (
                  <ProfileList key={name} session={session} />
                );
              } else {
                component = (
                  <Link key={name} href={link} className={linkClass}>
                    {name}
                  </Link>
                );
              }

              return component;
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
