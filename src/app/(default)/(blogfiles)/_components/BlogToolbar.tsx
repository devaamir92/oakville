import Link from 'next/link';
import { BsHouseDoorFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

import DropdownList from './DropdownList';

const Links = [
  {
    name: 'Home improvement',
    link: '/category/home-improvement',
  },
  {
    name: 'Real Estate Tips & Tricks',
    link: '/category/real-estate-tips-tricks',
  },
  {
    name: 'Home Buyers',
    link: '/category/home-buyers',
  },
  {
    name: 'Home Sellers',
    link: '/category/home-sellers',
  },
  {
    name: 'Home Owners',
    link: '/category/home-owners',
  },
  {
    name: 'Home Maintenance',
    link: '/category/home-maintenance',
  },
];

function BlogToolbar() {
  return (
    <div className="flex h-12 items-center bg-primary-400">
      <div className="container flex items-center justify-between">
        <Link href="/blog" className="text-lg text-white">
          <BsHouseDoorFill />
        </Link>
        <Link href="/category/Market-Insights" className="text-sm text-white">
          Market Insights
        </Link>
        <Link href="/category/Real-Estate-News" className="text-sm text-white">
          Real Estate News
        </Link>
        <Link href="/category/Home-Buyers" className="text-sm text-white">
          Home Buyers
        </Link>

        <DropdownList listData={Links} />
        <form>
          <label
            htmlFor="searchblog"
            className="flex h-[36px] min-w-96 items-center overflow-hidden rounded bg-primary-500 pl-2 text-sm transition-all duration-300 ease-in-out"
          >
            <input
              type="text"
              id="searchblog"
              placeholder="Search Blog"
              className="flex-1 bg-transparent text-white placeholder:text-gray-100 focus:outline-none"
            />
            <button type="button" aria-label="Search" className=" p-2">
              <FaSearch className="text-white" />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default BlogToolbar;
