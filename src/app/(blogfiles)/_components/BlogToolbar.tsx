import Link from 'next/link';
import { BsHouseDoorFill } from 'react-icons/bs';

import DropdownList from './DropdownList';
import Search from './Search';

const getCategories = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/v1/categories`);
  return res.json();
};
const BlogToolbar = async () => {
  const categories = await getCategories();

  return (
    <div className="flex h-12 items-center bg-tertiary-500">
      <div className="container relative flex items-center justify-between">
        <Link href="/blog" aria-label="Blogs" className="text-lg text-white">
          <BsHouseDoorFill />
        </Link>

        {categories.slice(0, 2).map((category: any) => (
          <Link
            key={category.id}
            href={`/category/${category.category
              .toLowerCase()
              .split(' ')
              .join('-')}`}
            className="text-sm text-white"
          >
            {category.category}
          </Link>
        ))}

        <DropdownList
          listData={categories
            .slice(2, categories.length)
            .map((category: any) => ({
              name: category.category,
              link: `/category/${category.category
                .toLowerCase()
                .split(' ')
                .join('-')}`,
            }))}
        />
        <Search />
      </div>
    </div>
  );
};

export default BlogToolbar;
