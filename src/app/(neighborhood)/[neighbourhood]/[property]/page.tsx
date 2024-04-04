import React from 'react';
import Link from 'next/link';

import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

import { Share } from '@components/Share';

import cn from '@utils/cn';
import getSlug from '@utils/getSlug';
import getBedroomString from '@utils/getbedroomString';

import { getSession } from '@lib/getsession';
import { getImages } from '@lib/api/getImages';

import Rooms from '@components/Rooms';
import Footer from '@components/Footer';
import Booking from '@components/Booking';
import Card from '@components/ListingCard';
import LightBox from '@components/LightBox';
import PriceHistory from '@components/PriceHistory';
import Demographics from '@components/Demographics';
import VerBtn from '@components/ListingCard/verBtn';
import BlurContainer from '@components/BlurContainer';
import ListingDetails from '@components/ListingDetails';
import PropertyDetails from '@components/PropertyDetails';
import ListingOverview from '@components/ListingOverview';
import ListingHighlights from '@components/ListingHighlights';
import LikeToggle from '@components/ListingCard/LikeToggle';
import getPropertyDetails from '@lib/api/properties/getPropertyDetails';
import NeighbourhoodMap from '@components/NeighbourhoodMap';

interface PageProps {
  params: {
    property: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: {
    property: string;
  };
}) {
  try {
    const { property } = await getPropertyDetails(params.property);
    if (!property)
      return {
        title: 'Not Found',
        description: 'The page you are looking for does not exist.',
      };

    return {
      title: `${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
        property.Addr
      } ${property.Ml_num}`,
      description: `${
        property.Ad_text
          ? property.Ad_text.slice(0, 160)
          : `${property.Addr} is a beautiful luxury property in ${property.Community}. It contains ${property.Br} Bedrooms,${property.Bath_tot} bathrooms,${property.Tot_park_spcs} Parking.`
      }`,
      openGraph: {
        title: `${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
          property.Addr
        }`,
        description: `${
          property.Ad_text
            ? property.Ad_text.slice(0, 160)
            : `${property.Addr} is a beautiful luxury property in ${property.Community}. It contains ${property.Br} Bedrooms,${property.Bath_tot} bathrooms,${property.Tot_park_spcs} Parking.`
        }`,
        url: `https://preserveoakville.ca${getSlug(
          property.Community,
          property.Slug
        )}`,
        siteName: 'The Preserve Oakville',
        type: 'website',
        countryName: 'Canada',
        alternateLocale: 'en_CA',
        emails: ['info@preserveoakville.com'],
        locale: 'en_CA',
        phoneNumbers: ['+1-416-837-2000', '+1-647-929-9072'],
        images: [
          {
            url: `https://api.preserveoakville.ca/api/v1/stream/og/${property.Ml_num}/photo_1.png`,
            width: 800,
            height: 600,
            alt: 'The Preserve Oakville',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@preserveoakville',
        title: `${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
          property.Addr
        }`,
        description: `${
          property.Ad_text
            ? property.Ad_text.slice(0, 160)
            : `${property.Addr} is a beautiful luxury property in ${property.Community}. It contains ${property.Br} Bedrooms,${property.Bath_tot} bathrooms,${property.Tot_park_spcs} Parking.`
        }`,
        images: [
          {
            url: `https://api.preserveoakville.ca/api/v1/stream/og/${property.Ml_num}/photo_1.png`,
            width: 800,
            height: 600,
            alt: `${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
              property.Addr
            }`,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }
}

async function Page({ params }: PageProps) {
  const {
    property,
    soldHistory,
    similarProperties,
  }: {
    property: any;
    soldHistory: any;
    similarProperties: any;
  } = await getPropertyDetails(params.property);

  const images: string[] = await getImages(property.Ml_num);
  const session = await getSession();
  return (
    <>
      <div
        className={cn(
          'container relative flex flex-col gap-3 bg-white py-3 lg:max-w-[1140px]'
        )}
      >
        <div className="flex items-center justify-between">
          <div className="relative flex flex-col gap-0">
            {(!session || (session && !session.user.verified)) && (
              <VerBtn
                status={property.Status}
                isLocked={property.Is_locked}
                showBtn={false}
              />
            )}
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
              image={`https://api.preserveoakville.ca/api/v1/stream/og/${property.Ml_num}/photo_1.png`}
              title={property.title}
            />
          </div>
        </div>
        <div className="relative">
          <LightBox
            Images={images.slice(1)}
            mls={property.Ml_num}
            address={`${property.Apt_num ? `${property.Apt_num} - ` : ''} ${
              property.Addr
            }`}
          />
          <BlurContainer
            Lsc={property.Lsc}
            isLocked={property.Is_locked}
            session={session}
          />
        </div>

        <ListingOverview data={property} session={session} />

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
            <PriceHistory
              data={soldHistory.data}
              location={`/${property.Community.toLowerCase().replaceAll(
                ' ',
                '-'
              )}`}
              isLocked={property.Is_locked}
              status={property.Status}
              session={session}
            />
            <ListingHighlights data={property} session={session} />

            <ListingDetails
              Ad_text={property.Ad_text}
              Extras={property.Extras}
              isLocked={property.Is_locked}
              status={property.Status}
              session={session}
            />
            <PropertyDetails session={session} data={property} />

            <Rooms session={session} data={property} />
            <NeighbourhoodMap
              location={[
                {
                  lng: property.Lng,
                  lat: property.Lat,
                  color: '#343a4a',
                  address: property.Addr,
                  name: property.addr,
                },
              ]}
            />

            {property.Lng && property.Lat && (
              <Demographics community={property.Community} />
            )}
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
                key={item.id}
                mls={item.Ml_num}
                bathrooms={item.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.Br),
                  Number(item.Br_plus)
                )}
                imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
                location={item.Addr}
                price={Number(item.Lp_dol).toLocaleString() ?? '0'}
                parking={item.Park_spcs ?? '0'}
                slug={getSlug(item.Community, item.Slug)}
                isLocked={item.Is_locked}
                dom={item.Dom}
                tssql={item.Timestamp_sql}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
