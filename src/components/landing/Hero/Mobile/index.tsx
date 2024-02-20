import React from 'react';
import Image from 'next/image';

import HelloText from '../hello';

function HeroMobile() {
  return (
    <section className="relative h-[40vh] w-full xl:h-[77vh] 2xl:h-[81vh]">
      <Image
        src="/images/jpg/oakville-preserve-banner.jpg"
        alt="oakville preserve banner"
        fill
        sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w"
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
            <div className="mx-auto flex w-3/4 flex-col sm:w-[60%]">
              <HelloText />
            </div>
          </div>
          <h2 className="absolute left-1/2 top-2/3 text-center text-3xl text-secondary-500 md:left-[55%] md:text-6xl">
            neighbour
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroMobile;
