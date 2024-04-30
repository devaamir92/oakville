import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import { FaHome } from 'react-icons/fa';
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6';

import type { Metadata } from 'next';

import { pageVisit } from '@lib/api/pageVisit';

import LightBox from '@components/LightBox';
import Demographics from '@components/Demographics';
import MapPinLocation from '@components/MapPinLocation';

import Summary from '../_components/Summary';
import Information from '../_components/Information';
import InquireForm from '../_components/InquireForm';
import FloorPlanTable from '../_components/FloorPlanTable';

const getSingleProjext = async (slug: string) => {
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/development/project/slug/${slug}`,
    {
      method: 'GET',
      next: {
        tags: ['project'],
      },
      cache: 'no-cache',
    }
  );
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const data: any = await getSingleProjext(params.common);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.metaKeywords,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: 'website',
      images: [
        {
          url: `https://api.preserveoakville.ca/public/gallery/${data?.gallery[0]?.name}/${data?.gallery[0].image}`,
          width: 800,
          height: 600,
          alt: data.name,
        },
      ],
    },
    twitter: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: [
        {
          url: `https://api.preserveoakville.ca/public/gallery/${data?.gallery[0]?.name}/${data?.gallery[0].image}`,
          alt: data.name,
        },
      ],
    },
  };
}

const Page = async ({ params }: any) => {
  const rows = await getSingleProjext(params.common);
  const currentUrl = headers().get('next-url');
  await pageVisit(currentUrl ?? '');

  return (
    <div className="container flex max-w-[1140px] flex-col gap-3 py-3">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col gap-0">
          <h3 className="text-3xl  font-semibold text-gray-800">{rows.name}</h3>
        </div>
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-1">
            <Link
              href="
                tel:416-837-2000"
              className="text-sm  text-gray-800"
            >
              416 837 2000
            </Link>
            <span>/</span>
            <Link
              href="
                tel:647-929-9072"
              className="text-sm  text-gray-800"
            >
              647 929 9072
            </Link>
          </div>
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
          <h4 className="text-xl capitalize text-primary-500 md:text-2xl">
            {rows.status}
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <InquireForm title={rows.name} />
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
              { name: 'Type', value: rows.type },
            ]}
          />
          <Information
            description={rows.description}
            features={rows.features}
          />
          {/* <Neighbourhood /> */}
          {rows.floorPlan.length > 0 && (
            <FloorPlanTable data={rows.floorPlan} />
          )}
          {rows.lat && rows.lng ? (
            <div className="h-56 overflow-hidden rounded">
              <MapPinLocation
                data={[
                  {
                    Lng: rows.lng,
                    Lat: rows.lat,
                    address: rows.address,
                    name: rows.name,
                    color: '#343a4a',
                  },
                ]}
                icon={<FaHome />}
              />
            </div>
          ) : (
            false
          )}

          <Demographics community={rows.neighbourhood} />
        </div>
      </div>
    </div>
  );
};

export default Page;
