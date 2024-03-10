import React from 'react';

// import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';

import LightBox from '@components/LightBox';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

// import Demographics from '@components/Demographics';

import Demographics from '@components/Demographics';

import Summary from '../_components/Summary';
import Information from '../_components/Information';
// import Neighbourhood from '../_components/Neighbourhood';
import FloorPlanTable from '../_components/FloorPlanTable';

const getSingleProjext = async (slug: string) => {
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/development/project/slug/${slug}`
  );
  return res.json();
};

// export async function generateMetadata(params: any): Promise<Metadata> {
//   const data = await getSingleProjext(params.common);
//   return {
//     title: data.metaTitle,
//     description: data.metaDescription,
//   };
// }

const Page = async (searchParams: any) => {
  const rows = await getSingleProjext(searchParams.params.common);

  return (
    <main className="container flex max-w-[1140px] flex-col gap-3 py-3">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col gap-0">
          <h3 className="text-3xl  font-semibold text-gray-800">{rows.name}</h3>
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
        <LightBox
          type="development"
          Images={rows.gallery}
          mls={rows.id}
          address={rows.address}
        />
        <div className="absolute bottom-4 left-4 z-0 rounded border-2 border-gray-800">
          <div className="relative size-20 md:size-28">
            <Image
              src={`https://api.preserveoakville.ca/${rows.logo.images.small.url}`}
              fill
              alt={rows.logo.name}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1">
            <FaLocationDot /> {rows.address}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p>Listing Status</p>
          <h4 className="text-xl text-primary-500 md:text-2xl">
            {rows.status}
          </h4>
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
          <Summary
            data={[
              {
                name: 'Developer',
                value: rows.developer.name,
              },
              {
                name: 'Address',
                value: rows.address,
              },
              {
                name: 'Nearest Intersection',
                value: rows.nearestIntersection,
              },
              {
                name: 'Pricing',
                value: rows.price,
              },
              {
                name: 'Estimated Completion',
                value: rows.estimatedCompletionDate,
              },
              {
                name: 'Square Footage',
                value: rows.squareFootage,
              },
              {
                name: 'VIP Launch',
                value: rows.vipLaunch,
              },
            ]}
          />
          <Information
            description={rows.description}
            features={rows.features}
          />
          {/* <Neighbourhood /> */}
          <FloorPlanTable data={rows.floorPlan} />
          <Demographics community={rows.neighbourhood} />
        </div>
      </div>
    </main>
  );
};

export default Page;
