import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaRegCircleRight,
  FaXTwitter,
} from 'react-icons/fa6';

import { RequestQueryBuilder } from '@nestjsx/crud-request';

import moment from 'moment';

import { Button } from '@components/ui/Button';
import CategoryFilter from '@app/(blogfiles)/_components/CategoryFilter';

const getSingleBlog = async (slug: string) => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
      select: ['images'],
    })
    .setJoin({
      field: 'categories',
      select: ['category'],
    });
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/blogs/slug/${slug}?${queryBuilder.query()}`
  );
  return res.json();
};

const getBlogs = async (slug: string) => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
      select: ['images'],
    })
    .setFilter({
      field: 'slug',
      operator: '$ne',
      value: slug,
    })
    .setJoin({
      field: 'categories',
      select: ['category'],
    })
    .setLimit(4);
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/blogs?${queryBuilder.query()}`
  );

  const responce = await res.json();

  const sortByDate = responce.data.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return sortByDate;
};

const Page = async (searchParams: any) => {
  const blog = await getSingleBlog(searchParams.params.slug);
  const blogs = await getBlogs(searchParams.params.slug);

  return (
    <main className="container flex min-h-[calc(100vh-70px)] flex-col gap-4 py-4 lg:flex-row ">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div className="flex flex-col gap-0">
            <h4 className="text-xl font-medium">{blog.title}</h4>
            <p className="text-sm text-gray-500">
              {moment(blog.createdAt).format('MMM D, YYYY')}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium">Share On:</span>
            <Button
              type="button"
              aria-label="Facebook"
              className="flex size-7 items-center justify-center bg-blue-500 p-0"
            >
              <FaFacebookF size={18} />
            </Button>
            <Button
              type="button"
              aria-label="Twitter"
              className="flex size-7 items-center justify-center bg-black p-0"
            >
              <FaXTwitter size={18} />
            </Button>
            <Button
              type="button"
              aria-label="Pinterest"
              className="flex size-7 items-center justify-center bg-red-500 p-0"
            >
              <FaPinterest size={18} />
            </Button>
            <Button
              type="button"
              aria-label="LinkedIn"
              className="flex size-7 items-center justify-center bg-blue-600 p-0"
            >
              <FaLinkedinIn size={18} />
            </Button>
          </div>
        </div>
        <div className="relative h-96">
          <Image
            src={`https://api.preserveoakville.ca/${blog.image.images.original.url}`}
            fill
            alt={blog.imageAlt}
            className="rounded object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute left-4 top-4">
            {/* <div className="flex flex-wrap gap-1.5">
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Home Sellers
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Real Estate and Technology
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Bungalows
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Home Buyers
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Real Estate News
              </Link>
            </div> */}
          </div>
        </div>
        <div
          className="element w-full pt-4 text-justify"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
      {/* Right side */}
      <div className="rounded bg-secondary-300 p-4 lg:w-[450px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className=" text-xl font-medium">Tags</h4>
              <hr className="border-gray-300" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-1.5">
                {blog.categories.map((category: any) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.category
                      .toLowerCase()
                      .split(' ')
                      .join('-')}`}
                    className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
                  >
                    {category.category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <hr className="border-gray-300" />
              <h4 className=" text-xl font-medium">Recent Blogs</h4>
              <hr className="border-gray-300" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {blogs.map((item: any) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug.toLowerCase().split(' ').join('-')}`}
                  className="group flex h-[300px] flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  <div className="relative h-60">
                    <Image
                      src={`https://api.preserveoakville.ca/${item.image.images.thumbnail.url}`}
                      fill
                      alt={item.imageAlt}
                      className="object-cover"
                    />

                    <CategoryFilter categories={item.categories} />
                  </div>
                  <div className="flex flex-col gap-1 p-3">
                    <span className="truncate text-base font-medium">
                      {item.title}
                    </span>
                    <div className="flex justify-between text-center">
                      <p className="text-sm text-gray-500">
                        {moment(item.createdAt).format('MMM D, YYYY')}
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
