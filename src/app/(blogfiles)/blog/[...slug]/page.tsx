import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

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
import { Share } from '@components/Share';

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
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
      select: ['images'],
    })
    .select(['metaTitle', 'metaDesc', 'jsonLD', 'faqSchema', 'keywords']);

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/blogs/slug/${
      params.slug
    }?${queryBuilder.query()}`
  );

  const blog = await res.json();
  return {
    title: blog.metaTitle,
    description: blog.metaDesc,
    keywords: blog.keywords,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDesc,
      type: 'article',
      images: [
        {
          url: `https://api.preserveoakville.ca/${blog.image.images.og.url}`,
          width: 800,
          height: 600,
          alt: blog.imageAlt,
        },
      ],
    },
    twitter: {
      title: blog.metaTitle,
      description: blog.metaDesc,
      images: [
        {
          url: `https://api.preserveoakville.ca/${blog.image.images.og.url}`,
          alt: blog.imageAlt,
        },
      ],
    },
  };
}

const Page = async (searchParams: any) => {
  const blog = await getSingleBlog(searchParams.params.slug);
  const blogs = await getBlogs(searchParams.params.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `${blog.jsonLD}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `${blog.faqSchema}`,
        }}
      />
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
              <Share
                image={`https://api.preserveoakville.ca/${blog.image.images.original.url}`}
                title={blog.title}
              />
            </div>
          </div>
          <div className="relative h-[450px]">
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
                    href={`/blog/${item.slug
                      .toLowerCase()
                      .split(' ')
                      .join('-')}`}
                    className="group flex h-[300px] flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
                  >
                    <div className="relative h-60">
                      <Image
                        src={`https://api.preserveoakville.ca/${item.image.images.medium.url}`}
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
    </>
  );
};

export default Page;
