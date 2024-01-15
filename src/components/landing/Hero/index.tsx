'use client';

import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative  px-4 md:h-[70vh] xl:h-[77vh] 2xl:h-[81vh]">
      <Image
        src="/jpg/cover.jpg"
        alt="banner"
        fill
        className="object-cover object-right"
      />
      <div className="container">
        <div className="relative">
          <div className="absolute rounded-xl xl:right-0 xl:top-16 2xl:top-16">
            <Image src="/logo.svg" alt="hero" width={270} height={270} />
          </div>
        </div>
        <div className="absolute left-32 top-[50%] -translate-y-1/2 font-playfair 2xl:left-64 ">
          <h1 className="font-medium text-secondary-500 shadow-black drop-shadow-2xl xl:text-[195px] xl:leading-[195px]   2xl:text-[230px]  2xl:leading-[230px]">
            hello!
          </h1>
          <span className="font-semibold text-secondary-500 xl:ml-[68%] xl:text-5xl 2xl:ml-[61%] 2xl:text-7xl">
            neighbour
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
