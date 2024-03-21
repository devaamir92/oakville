import React from 'react';
import Link from 'next/link';

import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { FaHome } from 'react-icons/fa';

import { Button } from '@components/ui/Button';

import getSlug from '@utils/getSlug';
import { getSession } from '@lib/getsession';
import { getImages } from '@lib/api/getImages';

import Rooms from '@components/Rooms';
import Booking from '@components/Booking';
import Card from '@components/ListingCard';
import LightBox from '@components/LightBox';
import BlurDailog from '@components/BlurDailog';
import PriceHistory from '@components/PriceHistory';
import Demographics from '@components/Demographics';
import getBedroomString from '@utils/getbedroomString';
import ListingDetails from '@components/ListingDetails';
import MapPinLocation from '@components/MapPinLocation';
import PropertyDetails from '@components/PropertyDetails';
import ListingOverview from '@components/ListingOverview';
import ListingHighlights from '@components/ListingHighlights';
import getSimilarProperties from '@lib/api/getSimilarProperties';
import LikeToggle from '@components/ListingCard/LikeToggle';
import { Share } from '@components/Share';

interface PageProps {
  params: {
    property: string;
  };
}
const getSoldHistory = async (addr: string, unit: number, Apt_num: number) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.select([
    'Lsc',
    'Pr_lsc',
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
    Number(property.Lp_dol) - 1000,
    Number(property.Lp_dol) + 1000,
    property.Slug
  );
  return { property, soldHistory, similarProperties };
};

async function Page({ params }: PageProps) {
  const { property, soldHistory, similarProperties } = await getProperty(
    params.property
  );
  const images: string[] = await getImages(property.Ml_num);

  const session = await getSession();

  return (
    <main className="container relative flex flex-col gap-3 bg-white py-3 lg:max-w-[1140px]">
      {!session && (
        <BlurDailog session={session} isLocked={property.Is_locked} />
      )}
      {session && property.Is_locked && (
        <BlurDailog session={session} isLocked={property.Is_locked} />
      )}

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
          <LikeToggle
            className="mx-auto flex !size-[22px] items-center justify-center rounded-sm outline-1 !outline-red-500"
            session={session}
            mls={property.Ml_num}
          />
          <Share
            image={`https://api.preserveoakville.ca/api/v1/stream/${property.Ml_num}/${images[0]}`}
            title={property.title}
          />
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
        price={Number(property.Lp_dol)}
        status="For Rent"
        daysOnMarket={Number(property.Dom)}
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse">
        <div className="order-2 flex h-fit flex-col gap-10 rounded md:w-full lg:sticky lg:top-[100px] lg:order-1 lg:w-[360px]">
          <div className="flex flex-col gap-3 bg-secondary-300 px-8 py-4 shadow">
            <h3 className="text-center text-2xl font-medium text-gray-800">
              The Preserve Oakville
            </h3>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <BsFillTelephoneFill className="mr-1 inline-block" />
                <Link
                  href="
                tel:647-929-9072"
                  className="text-sm  text-gray-800"
                >
                  647 929 9072
                </Link>
                <span>/</span>
                <Link
                  href="
                tel:416-837-2000"
                  className="text-sm  text-gray-800"
                >
                  416 837 2000
                </Link>
              </div>

              <Link
                href="
                    mailto:
                  info@preserveoakville.ca
                    "
                className="flex items-center gap-2 text-sm  text-gray-800"
              >
                <BsFillEnvelopeFill className="inline-block" />
                info@preserveoakville.ca
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
            <p>Looking to Sell Your {property.Class_type} ?</p>
            <Button
              className="w-full bg-primary-400 capitalize"
              variant="default"
            >
              Get Free Evaluation
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6  bg-white lg:p-3">
          <PriceHistory
            data={soldHistory.data}
            location={`/sold-homes/${property.Community.toLowerCase().replaceAll(
              ' ',
              '-'
            )}`}
            session={session}
          />
          <ListingHighlights data={property} />

          <ListingDetails Ad_text={property.Ad_text} Extras={property.Extras} />
          <PropertyDetails data={property} />

          <Rooms data={property} />
          {property.Lng && property.Lat ? (
            <div className="h-56 overflow-hidden rounded">
              <MapPinLocation
                data={[
                  {
                    Lng: property.Lng,
                    Lat: property.Lat,
                  },
                ]}
                icon={<FaHome />}
              />
            </div>
          ) : (
            false
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
              session={session}
              mls={item.Ml_num}
              key={item.id}
              bathrooms={item.Bath_tot ?? 0}
              bedrooms={getBedroomString(Number(item.Br), Number(item.Br_plus))}
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
              location={item.Addr}
              price={Number(item.Lp_dol).toLocaleString() ?? '0'}
              parking={item.Park_spcs ?? '0'}
              slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
              isLocked={item.Is_locked}
            />
          ))}
      </div>
    </main>
  );
}

export default Page;
