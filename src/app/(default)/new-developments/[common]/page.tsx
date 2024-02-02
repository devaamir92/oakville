import React from 'react';

import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

import LightBox from '@app/(default)/propertydetails/_components/LightBox';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

import Summary from '../_components/Summary';
import Information from '../_components/Information';
import Neighbourhood from '../_components/Neighbourhood';
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

function Page() {
  return (
    <main className="container flex max-w-[1140px] flex-col gap-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <h3 className="text-3xl  font-semibold text-gray-800">
            Clarehaven Estates
          </h3>
        </div>
        <div className="flex flex-col items-start gap-1">
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
      <LightBox />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1">
            <FaLocationDot /> Lambton Shores, ON
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p>Listing Status</p>
          <h4 className="text-2xl text-primary-500">Selling</h4>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="sticky top-[100px] h-fit w-[360px]">
          <form
            action=""
            className="flex flex-col justify-between gap-6 rounded bg-secondary-300 p-6  2xl:h-3/4"
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

            <Button variant="default" className="">
              Submit
            </Button>
          </form>
        </div>
        <div className="flex h-fit flex-1 flex-col gap-4">
          <Summary data={data} />
          <Information />
          <Neighbourhood />
          <FloorPlanTable />
        </div>
      </div>
    </main>
  );
}

export default Page;
