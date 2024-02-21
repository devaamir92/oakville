'use client';

import React from 'react';
import Image from 'next/image';

import oakvilleHero from '../../../../public/images/jpg/oakville-preserve-banner.jpg';

import HelloText from './hello';

function Hero() {
  return (
    <section className="relative w-full lg:h-[40vh] xl:h-[77vh] 2xl:h-[81vh]">
      <Image
        src={oakvilleHero}
        // src="/images/jpg/oakville-preserve-banner.jpg"
        alt="oakville preserve banner"
        fill
        // placeholder="blur"
        priority
        // sizes="(max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
        className="object-cover object-right"
      />
      <div className="absolute inset-x-0 h-full">
        <div className="container h-full">
          {/* Oakville Preserve logo */}
          <div className="flex justify-end">
            <div className="relative h-[74px] w-[135px] xl:mt-14 xl:h-[148px] xl:w-[270px]">
              <Image
                src="/images/svg/oakville-logo.svg"
                alt="Oakville Preserve logo"
                fill
              />
            </div>
          </div>
          {/* Oakville Preserve logo End */}
          <div className="absolute left-32 top-[50%] -translate-y-1/2 2xl:left-64 ">
            <div className="w-[600px]">
              <HelloText />
            </div>
            <h2 className="absolute top-[68%] font-semibold tracking-[12px] text-secondary-500 xl:ml-[58%] xl:text-5xl 2xl:ml-[61%] 2xl:text-7xl">
              neighbour
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
