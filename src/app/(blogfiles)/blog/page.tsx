import React, { Suspense } from 'react';
import type { Metadata } from 'next/types';

import { getAllBlogs } from '@lib/api/getBlogs';

import Loader from '@components/Loader';
import BlogCard from '@components/BlogCard';
import Pagination from '@components/ui/Pagination';

import BlogToolbar from '../_components/BlogToolbar';

export const metadata: Metadata = {
  title: 'Recent News Insights - Updates & Blogs | The Preserve Oakville',
  description:
    'Find The Preserve Oakville blog for exclusive insights and updates on luxury living. Stay informed about the latest in properties, homes, and the neighborhood.',
};

const BlogPage = async ({ searchParams }: any) => {
  const blogs: any = await getAllBlogs(
    searchParams?.search?.toString() || '',
    Number(searchParams?.page) || 1
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
            <Suspense
              key={searchParams?.page ?? '1'}
              fallback={
                <div className="flex h-[calc(100vh-225px)] items-center justify-center">
                  <Loader />
                </div>
              }
            >
              <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                {blogs.data.map((blog: any) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              {blogs?.pageCount > 1 && (
                <Pagination
                  totalPages={blogs.pageCount}
                  currentPage={blogs.page}
                  location="/blog"
                />
              )}
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
