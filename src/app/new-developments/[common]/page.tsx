import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

import LightBox from '@components/LightBox';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

import Demographics from '@components/Demographics';

import Summary from '../_components/Summary';
import Information from '../_components/Information';
// import Neighbourhood from '../_components/Neighbourhood';
import FloorPlanTable from '../_components/FloorPlanTable';

const data = [
  {
    name: 'Developer ',
    value: 'Geranium',
  },
  {
    name: 'Address',
    value: 'Lambton Shores, ON',
  },
  {
    name: 'Nearest Intersection',
    value: 'Dundas St & Preserve Dr',
  },
  {
    name: 'Pricing',
    value: 'Starting From $1,000,000',
  },
  {
    name: 'Estimated Completion',
    value: 'NA',
  },
  {
    name: 'Square Footage',
    value: '2034 - 3000 sq ft',
  },

  {
    name: 'VIP Launch',
    value: '2025',
  },
];

const Images = [
  {
    src: '/images/webp/listing/5.webp',
    alt: 'Image 1',
  },
  {
    src: '/images/webp/ad7d6_2.webp',
    alt: 'Image 2',
  },
  {
    src: '/images/webp/ad7d6_3.webp',
    alt: 'Image 3',
  },
  {
    src: '/images/webp/ad7d6_4.webp',
    alt: 'Image 4',
  },
  {
    src: '/images/webp/ad7d6_5.webp',
    alt: 'Image 5',
  },
  {
    src: '/images/webp/ad7d6_6.webp',
    alt: 'Image 6',
  },
  {
    src: '/images/webp/listing/7.webp',
    alt: 'Image 7',
  },
  {
    src: '/images/webp/listing/8.webp',
    alt: 'Image 8',
  },
];

function Page() {
  return (
    <main className="container flex max-w-[1140px] flex-col gap-3 py-3">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col gap-0">
          <h3 className="text-3xl  font-semibold text-gray-800">
            Clarehaven Estates
          </h3>
        </div>
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Link
            href="tel:647-123-4567"
            className="flex items-center gap-2 text-sm"
          >
            <FaPhone className="text-primary-500" />
            647-123-4567
          </Link>
          <Link
            href="mailto:info@preserveoakville.ca"
            className="flex items-center gap-2 text-sm"
          >
            <FaEnvelope className="text-primary-500" />
            info@preserveoakville.ca
          </Link>
        </div>
      </div>
      <div className="relative">
        <LightBox Images={Images} />
        <div className="absolute bottom-4 left-4 z-0 rounded border-2 border-gray-800">
          <div className="relative size-20 md:size-28">
            <Image src="/images/webp/logo.webp" alt="Image 1" fill />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1">
            <FaLocationDot /> Lambton Shores, ON
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p>Listing Status</p>
          <h4 className="text-xl text-primary-500 md:text-2xl">Selling</h4>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="order-2 h-fit lg:sticky lg:top-[94px] lg:order-1 lg:w-[360px]">
          <form
            action=""
            className=" flex flex-col justify-between gap-6 rounded bg-secondary-300 p-6 2xl:h-3/4"
          >
            <h2 className="text-center text-lg font-medium">
              Register To Get Pricing & Floor Plans for Clarehaven Estates
            </h2>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="First Name"
                className="bg-white py-1"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-white py-1"
              />
            </div>
            <Input type="email" placeholder="Email" className="bg-white py-1" />
            <Input type="text" placeholder="Phone" className="bg-white py-1" />
            <div className="flex flex-col gap-2">
              <p className="text-sm">Are you a Realtor?</p>
              <div className="flex gap-2">
                <label
                  htmlFor="checkboxyes"
                  className="flex items-center gap-1 text-sm"
                >
                  <input className="" id="checkboxyes" type="radio" />
                  Yes
                </label>
                <label
                  htmlFor="checkboxno"
                  className="flex items-center gap-1 text-sm"
                >
                  <input id="checkboxno" type="radio" />
                  No
                </label>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Message"
              className="bg-white py-1"
            />

            <Button type="submit" title="submit" variant="default" className="">
              Submit
            </Button>
          </form>
        </div>
        <div className="flex h-fit flex-1 flex-col gap-4">
          <Summary data={data} />
          <Information />
          {/* <Neighbourhood /> */}
          <FloorPlanTable />
          <Demographics />
        </div>
      </div>
    </main>
  );
}

export default Page;
