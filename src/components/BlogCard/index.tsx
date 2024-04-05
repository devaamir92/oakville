import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCircleRight } from 'react-icons/fa6';

import CategoryFilter from './CategoryFilter';

interface BlogCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  blog: any;
  showCategory?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, showCategory }) => {
  return (
    <Link
      href={`/blog/${blog.slug.toLowerCase().split(' ').join('-')}`}
      className="group flex size-full flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
    >
      <div className="relative">
        <Image
          src={`https://api.preserveoakville.ca/${blog.image.images.small.url}`}
          width={400}
          height={180}
          sizes="50vw"
          alt={blog.imageAlt}
          className="size-full object-cover object-center"
        />
        {showCategory && <CategoryFilter categories={blog.categories} />}
      </div>
      <div className="flex flex-col gap-1 p-3">
        <span className="overflow-hidden truncate text-base font-medium">
          {blog.title}
        </span>
        <div className="flex justify-between text-center">
          <p className="text-sm text-gray-500">
            {moment(blog.createdAt).format('MMM D, YYYY')}
          </p>
          <button
            type="button"
            title="Read More"
            className="flex items-center gap-1 text-sm text-primary-500 transition-all duration-300 ease-in-out
      group-hover:font-semibold"
          >
            <span>Read More</span>
            <FaRegCircleRight />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
