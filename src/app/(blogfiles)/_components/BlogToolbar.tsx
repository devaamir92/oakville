import Link from 'next/link';
import { BsHouseDoorFill } from 'react-icons/bs';

import DropdownList from './DropdownList';
import Search from './Search';

const Links = [
  {
    name: 'Home Buyers',
    link: '/category/Home-Buyers',
  },
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
    <div className="flex h-12 items-center bg-tertiary-500">
      <div className="container relative flex items-center justify-between">
        <Link href="/blog" aria-label="Blogs" className="text-lg text-white">
          <BsHouseDoorFill />
        </Link>
        <Link href="/category/Market-Insights" className="text-sm text-white">
          Market Insights
        </Link>
        <Link href="/category/Real-Estate-News" className="text-sm text-white">
          Real Estate News
        </Link>

        <DropdownList listData={Links} />
        <Search />
      </div>
    </div>
  );
}

export default BlogToolbar;
