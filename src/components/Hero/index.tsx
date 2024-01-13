'use client';

import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative h-[52vh] px-4 md:h-[60vh]">
      <Image src="/jpg/cover.png" alt="banner" fill />
      <div className="container">
        <div className="relative">
          <div className="absolute right-0 top-4  rounded-xl bg-black/50 p-8">
            <Image src="/logo.svg" alt="hero" width={150} height={150} />
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 font-playfair">
          <h1 className=" font-semibold text-secondary-600 shadow-black drop-shadow-2xl xl:text-[100px] 2xl:text-[160px]">
            hello!
          </h1>
          <span className="absolute ml-[50%] text-right font-semibold text-secondary-600 xl:-bottom-5 xl:text-4xl 2xl:-bottom-3 2xl:text-6xl">
            neighbour
          </span>
        </div>
        {/* <div className="absolute left-1/2 top-3/4 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-3">
          <div className="flex items-center gap-3">
            <Input id="search" placeholder="Enter an Address" />
            <FaSearch className="text-xl text-gray-400" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
