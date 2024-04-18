'use client';

import React from 'react';
import Image from 'next/image';

import HelloText from './hello';

function Hero() {
  return (
    <section className="relative aspect-[16/6.1] w-full">
      <Image
        src="/images/jpg/oakville-preserve-banner.jpg"
        alt="Hero background image"
        fill
        className=""
        quality={100}
      />
      <div className="absolute flex size-full items-center justify-center">
        <div className="lg:w-[320px] xl:w-[450px]">
          <HelloText />
          <h1 className="absolute -translate-y-20 font-semibold tracking-[10px] text-secondary-500 lg:translate-x-[65%] lg:text-4xl xl:-translate-y-32 xl:translate-x-[75%] xl:text-5xl 2xl:translate-x-[65%] 2xl:text-6xl">
            neighbour
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
