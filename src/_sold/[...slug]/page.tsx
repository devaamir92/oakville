import React from 'react';
import Link from 'next/link';

import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

import Card from '@components/ListingCard';
import { Button } from '@components/ui/Button';

import LightBox from '@components/LightBox';
import Demographics from '@components/Demographics';

import ListingOverview from '@app/propertydetails/_components/ListingOverview';
import ListingHighlights from '@app/propertydetails/_components/ListingHighlights';
import ListingDetails from '@app/propertydetails/_components/ListingDetails';
import PropertyDetails from '@app/propertydetails/_components/PropertyDetails';
import Rooms from '@app/propertydetails/_components/Rooms';
import PriceHistory from '@app/propertydetails/_components/PriceHistory';
import Map from '@app/propertydetails/_components/map';

const data = [
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/images/webp/listing/5.webp',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,200,000',
    imageUrl: '/images/webp/listing/7.webp',
    propertyType: 'Townhouse',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/images/webp/listing/9.webp',
    propertyType: 'Detached',
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
    <main className="container flex max-w-[1140px] flex-col gap-3 bg-white py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <h3 className="text-xl font-medium text-gray-800">
            402 - 18A Hazelton Ave
          </h3>
          <span className="text-xs text-gray-600">
            Mimico, Etobicoke, Toronto
          </span>
        </div>
      </div>
      <div className="relative">
        <LightBox Images={Images} />
        <div className="absolute top-4 rounded-r bg-red-500 px-6 py-1.5">
          <h6 className="text-xl font-semibold text-white">Sold</h6>
        </div>
      </div>

      <ListingOverview
        bathrooms={4}
        bedrooms={3}
        parkingSpaces={2}
        squareFeet={2590}
        price={1200000}
        status="Sold"
        daysOnMarket={24}
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
            <Button
              className="w-full bg-primary-400 capitalize"
              variant="default"
            >
              Book a showing
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 bg-secondary-300  p-8 shadow">
            <p>Looking to Sell Your Bungalow?</p>
            <Button
              className="w-full bg-primary-400 capitalize"
              variant="default"
            >
              Get Free Evaluation
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6  bg-white lg:p-3">
          <PriceHistory />
          <ListingHighlights />
          <ListingDetails />
          <PropertyDetails />
          <Rooms />
          <Map />
          <Demographics />
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h4 className="text-2xl font-semibold">Similar Properties</h4>
        </div>

        {data.map(item => (
          <Card
            key={item.location}
            bathrooms={item.bathrooms}
            bedrooms={item.bedrooms}
            imageUrl={item.imageUrl}
            location={item.location}
            price={item.price}
            parking={item.parking}
          />
        ))}
      </div>
    </main>
  );
}

export default Page;
