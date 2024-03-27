import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title:
    'Mortgage Calculator for The Preserve Oakville: Estimate Your Home Loan',
  description:
    'Use our mortgage calculator for The Preserve Oakville to estimate your home loan. Calculate your monthly payments and find the right mortgage for your property.',
};

const Calculators = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 py-5">
        <p className="text-[17px]">Mortage Calculator By</p>
        <div>
          <Image
            width={120}
            height={20}
            src="/images/webp/cal.webp"
            alt="ratehub logo"
          />
        </div>
      </div>
      <div className="flex-wap my-5 flex">
        <div className="flex flex-[2] flex-col flex-wrap gap-5">
          <div className="px-5">
            <div className="mx-auto max-w-2xl 2xl:max-w-3xl">
              <h1 className="my-5 text-xl font-light capitalize md:text-2xl">
                Mortgage payment calculator
              </h1>
              <iframe
                title="CMHC Insurance Calculator"
                className="h-[750px] w-full lg:h-[670px]"
                src="https://www.ratehub.ca/widgets/payment-calc.php?lang=en&amp;ac=954289"
              />{' '}
            </div>
          </div>

          <div className="px-5 pb-7">
            <div className="mx-auto max-w-2xl 2xl:max-w-3xl">
              <h2 className="my-5 text-2xl font-light capitalize">
                CMHC insurance calculator
              </h2>
              <iframe
                title="Mortgage Payment Calculator"
                className="h-[320px] w-full"
                src="https://www.ratehub.ca/widgets/payment-calc.php?cmhc=only&amp;lang=en&amp;ac=954289"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
