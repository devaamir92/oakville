import Link from 'next/link';
import Image from 'next/image';

import SearchComponent from '@components/ui/Search';

import { getSession } from '@lib/getsession';

import { Desktop, Mobile } from '@components/ua';

import MobileMenu from './mobileMenu';
import CommunitiesList from './communitiesList';

import LoginButton from './auth/LoginButton';
import ProfileList from './profileList';
import MobileSearch from './mobileSearch.tsx';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Buy', link: '/houses-for-sale' },
  { name: 'Sell', link: '/home-evaluation' },
  { name: 'Rent', link: '/homes-for-rent' },
  { name: 'Sold', link: '/sold-homes?days=30&page=1' },
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
    <>
      <Desktop>
        <header className="sticky top-0 z-30 h-[70px] bg-primary-500 py-2 shadow">
          <div className="container flex h-full flex-row items-center gap-2">
            <div className="flex w-full items-center justify-between lg:w-[75px]">
              <MobileMenu
                session={session}
                navLinks={navLinks}
                listData={listData}
              />
              <Link href="/">
                <Image
                  src="/images/png/oakville-leaf.png"
                  alt="logo"
                  width={55}
                  height={55}
                  className="size-full overflow-hidden"
                />
              </Link>
            </div>
            <div className="ml-0 w-full lg:ml-4 lg:w-[500px]">
              <SearchComponent />
            </div>
            <div className="hidden w-full lg:flex lg:justify-end">
              <nav className="flex size-full items-center lg:justify-between xl:w-fit xl:gap-6 xl:text-sm 2xl:gap-10">
                {navLinks.map(({ name, link }) => {
                  let component;

                  if (name === 'Communities') {
                    component = (
                      <CommunitiesList key={name} listData={listData} />
                    );
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
      </Desktop>
      <Mobile>
        <header className="sticky top-0 z-30 bg-primary-500 py-2 shadow">
          <div className="container relative flex items-center justify-between">
            <MobileMenu
              session={session}
              navLinks={navLinks}
              listData={listData}
            />
            <Link href="/">
              <Image
                src="/images/png/oakville-leaf.png"
                alt="logo"
                className="size-full overflow-hidden object-contain"
                sizes="60px"
                width={40}
                height={40}
              />
            </Link>
            <MobileSearch />
          </div>
        </header>
      </Mobile>
    </>
  );
}
