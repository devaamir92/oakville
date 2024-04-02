import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

import { FaRegCircleRight } from 'react-icons/fa6';

import type { Metadata } from 'next/types';

import Pagination from '@components/ui/Pagination';

// import CategoryFilter from '../_components/CategoryFilter';
import { getAllBlogs } from '@lib/api/getBlogs';

import BlogToolbar from '../_components/BlogToolbar';

export const metadata: Metadata = {
  title: 'The Preserve Oakville Blog: Latest News & Insights',
  description:
    'Discover The Preserve Oakville blog for exclusive insights and updates on luxury living. Stay informed about the latest in properties, homes, and the neighborhood. ',
};

const BlogPage = async ({ searchParams }: any) => {
  const blogs: any = await getAllBlogs(
    searchParams?.search?.toString() || '',
    Number(searchParams?.page ?? 1) ?? 1
  );

  return (
    <div className="flex h-full flex-col">
      <BlogToolbar />
      <div className="min-h-[calc(100vh-118px)]">
        <section className="py-5">
          <div className="container flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="mb-3 flex-1 text-center text-xl font-semibold md:text-2xl">
                Blogs
              </h1>
            </div>
            <div className="mb-4 h-[1px] bg-gray-300" />
            <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              {blogs.data.map((blog: any) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug.toLowerCase().split(' ').join('-')}`}
                  className="group flex size-full flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  <div className="relative aspect-[2.25]">
                    <Image
                      src={`https://api.preserveoakville.ca/${blog.image.images.small.url}`}
                      fill
                      alt={blog.imageAlt}
                      className="size-full object-cover object-center"
                    />
                    {/* <CategoryFilter categories={blog.categories} /> */}
                  </div>
                  <div className="flex flex-col gap-1 p-3">
                    <span className="truncate text-base font-medium">
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
              ))}
            </div>
            {blogs?.pageCount > 1 && (
              <Pagination
                totalPages={blogs.pageCount}
                currentPage={blogs.page}
                location="/blog"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
