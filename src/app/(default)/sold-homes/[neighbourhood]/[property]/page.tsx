import React from 'react';
import Link from 'next/link';

import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { getSession } from '@lib/getsession';

import Rooms from '@components/Rooms';
import BlurDailog from '@components/BlurDailog';
import Demographics from '@components/Demographics';
import PriceHistory from '@components/PriceHistory';
import ListingDetails from '@components/ListingDetails';
import PropertyDetails from '@components/PropertyDetails';
import ListingOverview from '@components/ListingOverview';
import ListingHighlights from '@components/ListingHighlights';
import LightBox from '@components/LightBox';
import { getImages } from '@lib/api/getImages';
import { Share } from '@components/Share';
import LikeToggle from '@components/ListingCard/LikeToggle';

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
    'Lp_dol',
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
      next: {
        tags: ['property'],
      },
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
        tags: ['slug'],
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
  return { property, soldHistory };
};

async function Page({ params }: PageProps) {
  const { property, soldHistory } = await getProperty(params.property);
  const session: any = await getSession();
  const images: string[] = await getImages(property.Ml_num);
  return (
    <div className="container relative flex flex-col gap-3 bg-white py-3 lg:max-w-[1140px]">
      {!session && (
        <BlurDailog session={session} isLocked={property.Is_locked} />
      )}
      {session && property.Is_locked && !session?.user.verified && (
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
      {/* <div className="relative flex h-60 gap-2 overflow-hidden rounded md:h-80 lg:h-[420px]">
        <Image
          src="/images/jpg/property-sold-out-banner.jpg"
          alt="Sold out banner"
          layout="fill"
          className="size-full object-cover"
        />
      </div> */}
      <LightBox
        Images={images.slice(1)}
        mls={property.Ml_num}
        address={`${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
          property.Addr
        }`}
      />

      <ListingOverview
        // bathrooms={property.Bath_tot}
        // bedrooms={property.Br}
        // parkingSpaces={property.Park_spcs}
        // squareFeet={property.Sqft}
        // price={Number(property.Lp_dol)}
        // status={statusMapper(property.Lsc)}
        // daysOnMarket={Number(property.Dom)}
        // soldPrice={Number(property.Sp_dol)}
        // statusFlag={property.Status}
        // soldDate={property.Cd}
        // terminationDate={property.Td}
        // suspensionDate={property.Dt_sus}
        // leasedDate={property.Dt_ter}
        data={property}
      />

      <div className="flex flex-col gap-3 lg:flex-row-reverse">
        <div className="order-2 flex h-fit flex-col gap-10 rounded md:w-full lg:sticky lg:top-[100px] lg:order-1 lg:w-[360px]">
          <div className="flex flex-col gap-3 bg-secondary-300 px-8 py-4 shadow">
            <h3 className="text-center text-2xl font-medium text-gray-800">
              The Preserve Oakville
            </h3>
            <div className="flex flex-col items-center justify-center gap-2">
              <BsFillTelephoneFill className="mr-1 inline-block" />

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

          <Demographics community={property.Community} />
        </div>
      </div>
    </div>
  );
}

export default Page;
