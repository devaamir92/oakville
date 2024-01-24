import Link from 'next/link';
import Image from 'next/image';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

import Card from '@components/PropertyCard';

import LightBox from './_components/LightBox';
import Navbar from './_components/Navbar';
import Map from './_components/map';
import Discription from './_components/Discription';
import Details from './_components/Details';

const data = [
  {
    location: 'Oakville Ontario L8N 1E9',
    bedrooms: '3 Beds',
    bathrooms: '2 Baths',
    parking: '1 Parking',
    price: '750,000',
    imageUrl: '/jpg/listing/3.jpg',
    listingStatus: 'For Rent',
    propertyType: 'Townhouse',
  },

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
    <main>
      <Navbar />
      <div className="container flex flex-col gap-4">
        <LightBox />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9 flex flex-col gap-4">
            <Discription />
            <Map />
            <Details />
          </div>
          <div className="sticky top-[134px] col-span-3 grid h-fit">
            <div>
              <div className="flex flex-col gap-4 rounded border border-gray-300 bg-white p-4">
                <Image
                  className="self-center"
                  src="/svg/logoblack.svg"
                  alt="logo"
                  width={140}
                  height={50}
                />
                <div className="flex flex-col gap-1">
                  <p className="flex gap-2 text-sm">
                    <span className="font-medium">Mobile</span>
                    <Link href="tel:416-123-4567" className="font-normal">
                      416-123-1234
                    </Link>
                  </p>

                  <p className="flex gap-2 text-sm">
                    <span className="font-medium">Email</span>
                    <Link href="mailto:abc@domain.com" className="font-normal">
                      abc@domain.com
                    </Link>
                  </p>
                </div>
                <form action="" className="flex flex-col gap-3">
                  <Input type="text" placeholder="First Name" id="firstname" />
                  <Input type="text" placeholder="Last Name" id="lastname" />
                  <Input type="email" placeholder="Your Email" id="email" />
                  <Input type="text" placeholder="Phone" id="phone" />
                  <Input type="date" placeholder="Date" id="date" />
                  <Button type="submit" className="w-full">
                    Book A Showing
                  </Button>

                  <p className="text-xs text-gray-600">
                    By providing your contact information, you acknowledge and
                    agree to our Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-4">
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
      </div>
    </main>
  );
}

export default PropertyDetails;
