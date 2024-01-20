import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCircleRight } from 'react-icons/fa6';

import Pagination from '@components/ui/Pagination';

const Links = [
  {
    name: 'Selling Your Real Estate Property',
    url: '/',
    date: 'June 15, 2023',
    Imageurl: '/webp/photo.webp',
  },
  {
    name: 'Tips for Buying a Home',
    url: '/',
    date: 'Feb 15, 2024',
    Imageurl: '/webp/photo1.webp',
  },
  {
    name: 'Understanding Mortgage Rates',
    url: '/',
    date: 'March 10, 2024',
    Imageurl: '/webp/photo2.webp',
  },
  {
    name: 'Getting Started with Real Estate Investing',
    url: '/',
    date: 'Apr 5, 2024',
    Imageurl: '/webp/photo3.webp',
  },
  {
    name: 'Home Improvement Ideas for Oakville Homes',
    url: '/',
    date: 'May 1, 2024',
    Imageurl: '/jpg/listing/1.jpg',
  },
  {
    name: 'Trendy Home Decor Styles in Oakville',
    url: '/',
    date: 'June 1, 2024',
    Imageurl: '/jpg/listing/2.jpg',
  },
  {
    name: 'The Art of Interior Design',
    url: '/',
    date: 'July 1, 2024',
    Imageurl: '/jpg/listing/3.jpg',
  },
  {
    name: 'Green Living: Sustainable Home Decor',
    url: '/',
    date: 'Aug 1, 2024',
    Imageurl: '/jpg/listing/4.jpg',
  },
  {
    name: 'Creating a Cozy Home Atmosphere',
    url: '/',
    date: 'Sep 1, 2024',
    Imageurl: '/jpg/listing/5.jpg',
  },
  {
    name: 'Luxury Home Decor Trends',
    url: '/',
    date: 'Oct 1, 2024',
    Imageurl: '/jpg/listing/6.jpg',
  },
  {
    name: 'Fall-Inspired Home Decor Ideas',
    url: '/',
    date: 'Nov 1, 2024',
    Imageurl: '/jpg/listing/7.jpg',
  },
  {
    name: 'Winter Wonderland Home Decor',
    url: '/',
    date: 'Dec 1, 2024',
    Imageurl: '/jpg/listing/8.jpg',
  },
];

function BlogPage() {
  return (
    <section className="bg-[#f3f4f6] px-4 py-10">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="mb-3  text-2xl font-semibold">Blogs</h2>
        </div>
        <div className="mb-3 h-[1px] bg-gray-300" />
        <div className="grid grid-cols-1 gap-3  pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Links.map(({ name, url, date, Imageurl }) => (
            <Link
              key={name}
              href={url}
              className="group flex flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="relative h-60">
                <Image src={Imageurl} fill alt={name} />
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
                    Read More
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
