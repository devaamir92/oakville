import React from 'react';
import Image from 'next/image';

import HelloText from '../hello';

function HeroMobile() {
  return (
    <section className="relative h-[250px] overflow-hidden sm:h-[375px]">
      <Image
        src="/images/jpg/oakville-preserve-banner.jpg"
        alt="oakville preserve banner"
        priority
        width={800}
        height={600}
        className="absolute size-full object-cover object-right"
        sizes="100vw"
      />
      <div className="absolute inset-x-0 h-full">
        <div className="container h-full">
          {/* Oakville Preserve logo */}
          <div className="flex justify-end">
            <div className="mt-2">
              <Image
                src="/images/png/oakville-logo.png"
                alt="Oakville Preserve logo"
                width={135}
                height={74}
                // className="h-[74px] w-[135px] md:mt-6 md:h-[100px] md:w-[200px]"
              />
            </div>
          </div>
          {/* Oakville Preserve logo End */}
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            <div className="ml-[20px] flex w-[50%] flex-col sm:w-[40%]">
              <HelloText />
            </div>
          </div>
          <h1 className="absolute left-1/2 top-2/3 text-center text-3xl font-medium text-secondary-500 sm:left-[35%] sm:text-4xl">
            neighbour
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroMobile;
