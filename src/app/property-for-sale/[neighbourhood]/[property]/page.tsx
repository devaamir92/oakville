import React from 'react';
import Link from 'next/link';

import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsHeart,
  BsUpload,
} from 'react-icons/bs';

import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { Button } from '@components/ui/Button';
import LightBox from '@components/LightBox';
import Demographics from '@components/Demographics';
import Card from '@components/ListingCard';
import MapPinLocation from '@components/MapPinLocation';
import Rooms from '@components/Rooms';
import getSimilarProperties from '@lib/api/getSimilarProperties';

import { getSession } from '@lib/getsession';
import PriceHistory from './_components/PriceHistory';
import ListingDetails from './_components/ListingDetails';
import PropertyDetails from './_components/PropertyDetails';

import ListingHighlights from './_components/ListingHighlights';
import ListingOverview from './_components/ListingOverview';
import Booking from './_components/Booking';
import cn from '@utils/cn';
import Auth from '@layouts/default/Header/auth';

interface PageProps {
  params: {
    property: string;
  };
}
const getSoldHistory = async (addr: string, unit: number, Apt_num: number) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.select([
    'Lsc',
    'Pr_Lsc',
    'Cndsold_xd',
    'Cd',
    'Xdtd',
    'Xd',
    'Unavail_dt',
    'Td',
    'Dt_sus',
    'Dt_ter',
    'id',
    'Ml_num',
    'Sp_dol',
    'Unit_num',
    'Apt_num',
    'Slug',
    'Status',
  ]);

  queryBuilder.search({
    $and: [
      {
        Status: {
          $eq: 'U',
        },
        Addr: {
          $eq: addr,
        },
        Unit_num: {
          $eq: unit,
        },
        Apt_num: {
          $eq: Apt_num,
        },
      },
    ],
  });

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );
  return res.json();
};
const getProperty = async (slug: string) => {
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property/slug/${slug}`,
    {
      method: 'GET',
      next: {
        tags: [slug],
      },
      cache: 'no-cache',
    }
  );
  const property = await res.json();

  const soldHistory = await getSoldHistory(
    property.Addr,
    property.Unit_num,
    property.Apt_num
  );
  const similarProperties = await getSimilarProperties(
    property.S_r,
    Number(property.Lp_dol) - 100000,
    Number(property.Lp_dol) + 100000,
    property.Slug
  );
  return { property, soldHistory, similarProperties };
};

const getImages = async (mls: string) => {
  const res = await fetch(`${process.env.API_HOST}/api/v1/stream/${mls}`, {
    method: 'GET',
    next: {
      tags: [mls],
    },
    cache: 'no-cache',
  });
  return res.json();
};

async function Page({ params }: PageProps) {
  const { property, soldHistory, similarProperties } = await getProperty(
    params.property
  );
  const images: string[] = await getImages(property.Ml_num);
  const session = await getSession();

  return (
    <main
      className={cn(
        'container flex flex-col gap-3 bg-white py-3 lg:max-w-[1140px]'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <h3 className="text-xl font-medium text-gray-800">
            {property.Apt_num ? `${property.Apt_num} - ` : ''} {property.Addr}
          </h3>
          <span className="text-xs text-gray-600">
            {property.Municipality}, {property.Community}, {property.Zip}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="gap-2 border-red-300 text-red-500"
            variant="outline"
          >
            <BsHeart />
            <span className="hidden lg:block">Favourite</span>
          </Button>
          <Button
            className="gap-2 border-primary-300 text-primary-500"
            variant="outline"
          >
            <BsUpload />
            <span className="hidden lg:block">Share</span>
          </Button>
        </div>
      </div>

      <LightBox
        Images={images.slice(1)}
        mls={property.Ml_num}
        address={`${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
          property.Addr
        }`}
      />

      <ListingOverview
        bathrooms={property.Bath_tot}
        bedrooms={property.Br}
        parkingSpaces={property.Park_spcs}
        squareFeet={property.Sqft}
        price={Number(property.Lp_dol).toLocaleString()}
        status={property.S_r === 'Sale' ? 'For Sale' : 'For Rent'}
        daysOnMarket={property.Dom}
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse">
        <div className="order-2 flex h-fit flex-col gap-10 rounded md:w-full lg:sticky lg:top-[100px] lg:order-1 lg:w-[360px]">
          <div className="flex flex-col gap-3 bg-secondary-300 px-8 py-4 shadow">
            <h3 className="text-center text-2xl font-medium text-gray-800">
              The Preserve Oakville
            </h3>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link
                href="
                tel:416-123-4567"
                className="flex items-center gap-2 text-sm  text-gray-800"
              >
                <BsFillTelephoneFill className="inline-block" />
                (416) 828 7773
              </Link>
              <Link
                href="
                    mailto:
                    info@bungalowfinder.ca
                    "
                className="flex items-center gap-2 text-sm  text-gray-800"
              >
                <BsFillEnvelopeFill className="inline-block" />
                info@bungalowfinder.ca
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 bg-secondary-300 p-8 shadow">
            <p>Ready to go See it?</p>
            <Booking
              addr={property.Addr}
              mls={property.Ml_num}
              apt={property.Apt_num}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 bg-secondary-300  p-8 shadow">
            <p>Looking to sell your property?</p>
            <Link
              href="/home-evaluation"
              className="flex h-9  w-full items-center justify-center rounded bg-primary-400 text-sm text-white transition-colors duration-300 ease-in-out hover:bg-primary-500"
            >
              Get Free Evaluation
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6  bg-white lg:p-3">
          <PriceHistory data={soldHistory.data} />
          <ListingHighlights data={property} />

          <ListingDetails Ad_text={property.Ad_text} Extras={property.Extras} />
          <PropertyDetails data={property} />

          <Rooms data={property} />
          {property.Lng && property.Lat && (
            <div className="h-56 overflow-hidden rounded">
              <MapPinLocation
                data={[
                  {
                    Lng: property.Lng,
                    Lat: property.Lat,
                  },
                ]}
              />
            </div>
          )}
          <Demographics community={property.Community} />
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h4 className="text-2xl font-semibold">Similar Properties</h4>
        </div>
        {similarProperties &&
          similarProperties.data.map((item: any) => (
            <Card
              key={item.id}
              mls={item.Ml_num}
              bathrooms={item.Bath_tot ?? 0}
              bedrooms={`${item.Br}${
                item.Br_plus !== '0' ? ` + ${item.Br_plus}` : ''
              }`}
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
              location={item.Addr}
              price={Number(item.Lp_dol).toLocaleString() ?? '0'}
              parking={item.Park_spcs ?? '0'}
              slug={`/property-for-sale/${item.Community.toLowerCase().replaceAll(
                ' ',
                '-'
              )}/${item.Slug}`}
              isLocked={item.Is_locked}
            />
          ))}
      </div>
      <Auth isLogin={!session} />
    </main>
  );
}

export default Page;
