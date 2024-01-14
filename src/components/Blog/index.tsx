import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCircleRight } from 'react-icons/fa6';

const Links = [
  {
    name: 'Selling Your Real Home',
    url: '/',
    date: 'May 1, 2023',
    Imageurl: '/webp/blog/photo.webp',
  },
  {
    name: 'Buying a Home',
    url: '/',
    date: 'Jan 1, 2024',
    Imageurl: '/webp/blog/photo1.webp',
  },
  {
    name: 'Mortgage Rates',
    url: '/',
    date: 'Fab 1, 2024',
    Imageurl: '/webp/blog/photo2.webp',
  },
  {
    name: 'Real Estate Investing',
    url: '/',
    date: 'Mar 22, 2024',
    Imageurl: '/webp/blog/photo3.webp',
  },
];

function BlogSection() {
  return (
    <section className="bg-[#f3f4f6] px-4 py-10">
      <div className="container flex flex-col gap-10">
        <h2 className="text-center text-2xl font-semibold">
          Check Out Our Blog
        </h2>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                <span className="text-base font-medium">{name}</span>
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
      </div>
    </section>
  );
}

export default BlogSection;
