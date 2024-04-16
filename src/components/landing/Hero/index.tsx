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
        sizes="150vh"
      />
      <div className="absolute inset-x-0 h-full">
        <div className="container h-[calc(100%-70px)]">
          {/* Oakville Preserve logo */}
          <div className="flex justify-end lg:mt-8 xl:mt-16">
            <Image
              src="/images/png/preserveOakville.png"
              alt="Oakville Preserve logo"
              width={240}
              height={100}
              className="overflow-hidden object-contain lg:w-[180px] xl:w-[240px]"
            />
          </div>
          {/* Oakville Preserve logo End */}
          <div className="absolute left-32 top-[50%] -translate-y-1/2 2xl:left-64 ">
            <div className="lg:w-[350px] xl:w-[450px]">
              <HelloText />
            </div>
            <h1 className="absolute top-[72%] font-semibold tracking-[12px] text-secondary-500 lg:ml-[58%] lg:text-4xl xl:text-5xl 2xl:ml-[61%] 2xl:text-7xl">
              neighbour
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
