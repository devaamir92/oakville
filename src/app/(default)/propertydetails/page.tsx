import React from 'react';
import Link from 'next/link';

import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsHeart,
  BsUpload,
} from 'react-icons/bs';
import { LuBath, LuBedDouble, LuParkingCircle, LuScan } from 'react-icons/lu';

import Card from '@components/PropertyCard';
import { Button } from '@components/ui/Button';

import LightBox from './_components/LightBox';
import PriceHistory from './_components/PriceHistory';
import Details from './_components/Details';
import ProDetails from './_components/Pro-Details';
import Rooms from './_components/Rooms';
import Map from './_components/map';
import Demographics from './_components/Demographics';

const data = [
  {
    location: 'Oakville Ontario L6L 2Y4',
    bedrooms: '2 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '550,000',
    imageUrl: '/jpg/listing/5.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Condo',
  },
  {
    location: 'Oakville Ontario L6P 1W1',
    bedrooms: '4 Beds',
    bathrooms: '4 Baths',
    parking: '0 Parking',
    price: '1,200,000',
    imageUrl: '/jpg/listing/7.jpg',
    listingStatus: 'For Sale',
    propertyType: 'Townhouse',
  },

  {
    location: 'Oakville Ontario L6S 2G5',
    bedrooms: '3 Beds',
    bathrooms: '3 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/jpg/listing/9.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Detached',
  },
];

function PropertyDetails() {
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
        <div className="flex items-center gap-2">
          <Button
            className="gap-2 border-red-300 text-red-500"
            variant="outline"
          >
            <BsHeart />
            Favourite
          </Button>
          <Button
            className="gap-2 border-primary-300 text-primary-500"
            variant="outline"
          >
            <BsUpload />
            Share
          </Button>
        </div>
      </div>
      <LightBox />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center ">
              <LuBedDouble className="text-gray-700" size={24} />
              <span className="text-sm font-medium">3 bed</span>
            </div>
            <div className="flex flex-col items-center ">
              <LuBath className="text-gray-700" size={24} />
              <span className="text-sm font-medium">4 bath</span>
            </div>
            <div className="flex flex-col items-center ">
              <LuParkingCircle className="text-gray-700" size={24} />
              <span className="text-sm font-medium">2 parking</span>
            </div>
            <div>
              <div className="flex flex-col items-center ">
                <LuScan className="text-gray-700" size={24} />
                <span className="text-sm font-medium">2590 sqft *</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="rounded bg-slate-300 px-2 py-0.5 text-xs font-medium">
              For Sale
            </span>
            <span className="rounded bg-primary-200 px-2 py-0.5 text-xs font-medium text-primary-600">
              24 days on market
            </span>
          </div>
        </div>
        <div className="">
          <p className="text-3xl font-medium text-gray-800">$1,200,000</p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="sticky top-[100px] flex h-fit w-[360px] flex-col gap-10 rounded">
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
          {/* <hr className="border-primary-200" /> */}

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
        <div className="flex flex-1 flex-col gap-6  bg-white p-3">
          <PriceHistory />
          <div className="flex flex-col gap-1">
            <h3 className="flex items-center gap-1 text-xl font-medium text-gray-800">
              Listing Details
            </h3>
            <span className="text-xs text-gray-500">
              Learn about 5050 CAMBIE STREET
            </span>
          </div>
          <Details />
          <ProDetails />

          <Rooms />
          <Map />
          <Demographics />
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="col-span-3">
          <h4 className="text-2xl font-semibold">Similar Properties</h4>
        </div>

        {data.map(item => (
          <Card
            key={item.location}
            bathrooms={item.bathrooms}
            bedrooms={item.bedrooms}
            imageUrl={item.imageUrl}
            listingStatus={item.listingStatus}
            location={item.location}
            price={item.price}
            parking={item.parking}
            statusShow
          />
        ))}
      </div>
    </main>
  );
}

export default PropertyDetails;
