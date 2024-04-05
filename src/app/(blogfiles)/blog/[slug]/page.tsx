/* eslint-disable react/no-danger */
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import { Share } from '@components/Share';
import {
  getBlogMetaData,
  getRecentBlogs,
  getSingleBlog,
} from '@lib/api/getBlogs';
import BlogCard from '@components/BlogCard';

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const blog: any = await getBlogMetaData(params.slug);

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

const Page = async ({ params }: any) => {
  const blog: any = await getSingleBlog(params.slug);
  const { data }: any = await getRecentBlogs(params.slug);

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
      <div className="container flex min-h-[calc(100vh-70px)] flex-col gap-4 py-4 lg:flex-row ">
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
          <div
            className="relative
          aspect-[2.25]"
          >
            <Image
              src={`https://api.preserveoakville.ca/${blog.image.images.original.url}`}
              fill
              alt={blog.imageAlt}
              className="rounded object-cover object-center"
            />
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
                {data.map((item: any) => (
                  <BlogCard key={item.id} blog={item} showCategory />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
