import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

import { FaRegCircleRight } from 'react-icons/fa6';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import CategoryFilter from '@app/(blogfiles)/_components/CategoryFilter';

import Pagination from '@components/ui/Pagination';
import BlogToolbar from '@app/(blogfiles)/_components/BlogToolbar';

const getBlogs = async (category: string) => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
      select: ['images'],
    })
    .setJoin({
      field: 'categories',
      select: ['category'],
    })
    .setFilter({
      field: 'categories.category',
      operator: '$eqL',
      value: category,
    });
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/blogs?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['blogs'],
      },
      cache: 'no-cache',
    }
  );
  return res.json();
};

const BlogPage = async (searchParams: any) => {
  const blogs = await getBlogs(
    searchParams.params.slug.toString().split('-').join(' ')
  );

  return (
    <main className="flex h-full flex-col">
      <BlogToolbar />
      <div className="min-h-[calc(100vh-118px)]">
        {!blogs.data.length && (
          <div className="flex h-[calc(100vh-118px)] items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-500">
              No blogs found for this category
            </h1>
          </div>
        )}
        {blogs.data.length > 0 && (
          <section className="py-5">
            <div className="container flex flex-col">
              <div className="flex items-center justify-between">
                <h1 className="mb-3 flex-1 text-center text-2xl font-semibold capitalize">
                  {searchParams.params.slug.toString().split('-').join(' ')}
                </h1>
              </div>
              <div className="mb-4 h-[1px] bg-gray-300" />
              <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                {blogs.data.map((blog: any) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug
                      .toLowerCase()
                      .split(' ')
                      .join('-')}`}
                    className="group flex h-[300px] flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
                  >
                    <div className="relative h-60">
                      <Image
                        src={`https://api.preserveoakville.ca/${blog.image.images.medium.url}`}
                        fill
                        alt={blog.imageAlt}
                        className="object-cover"
                      />
                      <CategoryFilter categories={blog.categories} />
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
                  location="/category"
                />
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
