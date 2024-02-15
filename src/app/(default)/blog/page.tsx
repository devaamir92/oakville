import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCircleRight } from 'react-icons/fa6';

import Pagination from '@components/ui/Pagination';

import CategoryFilter from './_components/CategoryFilter';

const Links = [
  {
    name: 'Selling Your Real Estate Property',
    url: '/',
    date: 'June 15, 2023',
    categories: ['Real Estate', 'Home Sellers', 'Real Estate News'],
    Imageurl: '/images/webp/photo.webp',
  },
  {
    name: 'Tips for Buying a Home',
    url: '/',
    date: 'Feb 15, 2024',
    categories: ['Real Estate', 'Home Buyers', 'Real Estate News'],
    Imageurl: '/images/webp/photo1.webp',
  },
  {
    name: 'Understanding Mortgage Rates',
    url: '/',
    date: 'March 10, 2024',
    categories: [
      'Real Estate Tips and Tricks',
      'Mortgage Rates',
      'Real Estate News',
    ],
    Imageurl: '/images/webp/photo2.webp',
  },
  {
    name: 'Getting Started with Real Estate Investing',
    url: '/',
    date: 'Apr 5, 2024',
    categories: [
      'Real Estate Investing',
      'Investment Tips',
      'Real Estate News',
    ],
    Imageurl: '/images/webp/photo3.webp',
  },
  {
    name: 'Home Improvement Ideas for Oakville Homes',
    url: '/',
    date: 'May 1, 2024',
    categories: ['Home Improvement', 'Home Decor', 'Real Estate News'],
    Imageurl: '/images/webp/listing/1.webp',
  },
  {
    name: 'Trendy Home Decor Styles in Oakville',
    url: '/',
    date: 'June 1, 2024',
    categories: ['Home Decor', 'Home Styling', 'Real Estate News'],
    Imageurl: '/images/webp/listing/2.webp',
  },
  {
    name: 'The Art of Interior Design',
    url: '/',
    date: 'July 1, 2024',
    categories: ['Interior Design', 'Home Decor', 'Real Estate News'],
    Imageurl: '/images/webp/listing/3.webp',
  },
  {
    name: 'Green Living: Sustainable Home Decor',
    url: '/',
    date: 'Aug 1, 2024',
    categories: ['Sustainable Living', 'Home Decor', 'Real Estate News'],
    Imageurl: '/images/webp/listing/4.webp',
  },
  {
    name: 'Creating a Cozy Home Atmosphere',
    url: '/',
    date: 'Sep 1, 2024',
    categories: ['Home Decor', 'Home Styling', 'Real Estate News'],
    Imageurl: '/images/webp/listing/5.webp',
  },
];

function BlogPage() {
  return (
    <section className="py-10">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="mb-3  text-2xl font-semibold">Blogs</h2>
        </div>
        <div className="mb-4 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-8  pb-10 md:grid-cols-2 lg:grid-cols-3 ">
          {Links.map(({ name, date, Imageurl, categories }) => (
            <Link
              key={name}
              href={`/blog/${name.toLowerCase().split(' ').join('-')}`}
              className="group flex h-[300px] flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="relative h-60">
                <Image
                  src={Imageurl}
                  fill
                  alt={name}
                  className="object-cover"
                  sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
                />
                <CategoryFilter categories={categories} />
              </div>
              <div className="flex flex-col gap-1 p-3">
                <span className="truncate text-base font-medium">{name}</span>
                <div className="flex justify-between text-center">
                  <p className="text-sm text-gray-500">{date}</p>
                  <button
                    type="button"
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
        <Pagination currentPage={1} totalPages={12} />
      </div>
    </section>
  );
}

export default BlogPage;
