'use client';

import React from 'react';
import Image from 'next/image';

import HelloText from './hello';

function Hero() {
  return (
    <section className="relative w-full lg:h-[40vh] xl:h-[77vh] 2xl:h-[81vh]">
      <Image
        src="/images/jpg/oakville-preserve-banner.jpg"
        alt="oakville preserve banner"
        fill
        className="object-cover object-right"
        priority
        sizes="100vh"
      />
      <div className="absolute inset-x-0 h-full">
        <div className="container h-full">
          {/* Oakville Preserve logo */}
          <div className="mt-16 flex justify-end">
            <Image
              src="/images/png/oakville-logo.png"
              alt="Oakville Preserve logo"
              width={240}
              height={100}
            />
          </div>
          {/* Oakville Preserve logo End */}
          <div className="absolute left-32 top-[50%] -translate-y-1/2 2xl:left-64 ">
            <div className="w-[450px]">
              <HelloText />
            </div>
            <h1 className="absolute top-[72%] font-semibold tracking-[12px] text-secondary-500 xl:ml-[58%] xl:text-5xl 2xl:ml-[61%] 2xl:text-7xl">
              neighbour
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
