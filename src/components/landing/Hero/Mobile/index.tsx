import React from 'react';
import Image from 'next/image';

import HelloText from '../hello';

function HeroMobile() {
  return (
    <section className="relative h-[28vh] overflow-hidden sm:h-[35vh]">
      <Image
        src="/images/jpg/oakville-preserve-banner.jpg"
        alt="oakville preserve banner"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-x-0 h-full">
        <div className="container h-full">
          {/* Oakville Preserve logo */}
          <div className="flex justify-end">
            <div className="relative mt-2 h-[74px] w-[135px] md:mt-6 md:h-[100px] md:w-[200px]">
              <Image
                src="/images/svg/oakville-logo.svg"
                alt="Oakville Preserve logo"
                fill
              />
            </div>
          </div>
          {/* Oakville Preserve logo End */}
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            <div className="ml-[20px] flex w-[50%] flex-col sm:w-[40%]">
              <HelloText />
            </div>
          </div>
          <h2 className="absolute left-1/2 top-2/3 text-center text-3xl font-medium text-secondary-500 sm:left-[35%] sm:text-4xl">
            neighbour
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroMobile;
