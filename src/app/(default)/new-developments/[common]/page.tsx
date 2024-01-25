import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsZoomIn } from 'react-icons/bs';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import LightBox from '@app/(default)/propertydetails/_components/LightBox';

function page() {
  return (
    <main>
      <div className="relative flex h-[500px] w-full justify-center 2xl:h-[600px]">
        <Image src="/orignal.jpeg" className="object-cover" fill alt="banner" />
        <div className="container absolute flex h-full  w-full items-center justify-end">
          <form
            action=""
            className=" flex h-[90%] w-96 flex-col justify-between gap-4 rounded bg-white px-4 py-6 2xl:h-3/4"
          >
            <h2 className="text-center text-lg font-medium">
              Register To Get Pricing For Clarehaven Estates | The Preserve
              Oakville
            </h2>
            <div className="flex gap-4">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </div>
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Phone" />
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
            <Input type="text" placeholder="Message" />

            <Button variant="default">Submit</Button>
          </form>
        </div>
      </div>
      <div className="relative bg-primary-500">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="">
              <Image
                src="/webp/logo.webp"
                alt="logo"
                width="170"
                height="170"
                className="absolute  bottom-0 object-contain"
              />
              <div className="ml-[186px]">
                <h2 className="text-center text-3xl font-medium text-white">
                  Clarehaven Estates
                </h2>
                <span className="text-white">
                  Pickering | Est Completion: NA
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaPhone className="text-white" size={14} />
                <Link href="tel:4161231234" className="text-white">
                  (416) 123 1234
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" size={14} />
                <Link href="mailto:info@dummyemail.ca" className="text-white">
                  info@dummyemail.ca
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-10 flex flex-col gap-10">
        <div className="flex gap-10 rounded border border-gray-300 bg-white p-4">
          <div className="flex flex-1 flex-col items-start gap-4">
            <h4 className="text-xl font-medium">PROJECT DETAILS</h4>
            <hr className="w-full" />
            <p className="m-auto text-justify text-sm">
              Nestled in Claremont&apos;s charming hamlet, Clarehaven Estates by
              Geranium offers spacious bungalows, lofts, and two-story
              residences, seamlessly blending comfort and style. This exquisite
              community invites residents to explore scenic trails or enjoy
              renowned golf courses, providing a serene lifestyle. Quick access
              to Toronto via a short drive or train ride adds urban convenience.
              Picture quality time in your haven, featuring a covered loggia and
              open-concept kitchen. Clarehaven&apos;s superior construction,
              genuine clay brick, and premium interiors enhance the charm.
              Luxurious bathrooms, gourmet kitchens, and high ceilings define
              these homes. With proximity to amenities and excellent
              connectivity, Clarehaven Estates presents an unparalleled living
              experience.
            </p>
            <Button variant="default" className="mt-auto">
              Register To Get Pricing For Clarehaven Estates
            </Button>
          </div>
          <div className="as relative aspect-video w-1/3">
            <Image
              src="/webp/map.webp"
              fill
              alt="logo"
              className="rounded object-cover"
            />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
              <Button variant="default" className="gap-1 bg-black/70">
                <BsZoomIn />
                View Site Plan
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex-1 rounded border border-gray-300 bg-white p-4">
            <div className="flex flex-1 flex-col items-start gap-4">
              <h4 className="text-xl font-medium">Features And Finishes</h4>
              <hr className="w-full" />
              <p className="text-justify text-sm">
                Clarehaven Estates by Geranium is an idyllic community nestled
                in the heart of the Hamlet of Claremont. This exquisite
                neighborhood offers a variety of spacious residences, including
                Bungalows, Bungalows with Lofts, and Two-Storey homes, starting
                from the low $2 million. Clarehaven Estates is a haven for those
                seeking the best of country living, surrounded by lush natural
                landscapes, abundant wildlife, and breathtaking scenery. Embrace
                the joys of quality time with loved ones in an environment
                designed for relaxation and well-being. The community provides a
                range of superb features and finishes, including architecturally
                controlled homes with genuine clay brick, premium construction
                materials, and quality craftsmanship. Residents can enjoy the
                perks of small-town living with big-time fun, including access
                to nearby golf courses, hiking trails, and year-round
                activities. With a prime location in north Pickering, just a
                short drive or train ride from Toronto, Clarehaven Estates
                offers an unparalleled blend of tranquility and connectivity.
                Come experience the best of country living at Clarehaven
                Estates, where every detail is crafted to enhance your
                lifestyle.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded border border-gray-300 bg-white p-4">
            <div className="flex flex-1 flex-col items-start gap-4">
              <h4 className="text-xl font-medium">Project Facts</h4>
              <hr className="w-full" />
              <div className="flex flex-col gap-2">
                <div className="flex text-sm">
                  <h5 className="font-medium">Developer:&nbsp;</h5>
                  <Link
                    className="text-blue-500"
                    href="/newconstruction/builder/geranium"
                  >
                    Geranium
                  </Link>
                </div>
                <div className="flex text-sm">
                  <h5 className="font-medium">Address:&nbsp;</h5>
                  <p>113 Brock Road, Pickering, ON</p>
                </div>
                <div className="flex text-sm">
                  <h5 className="font-medium">Nearest Intersection:&nbsp;</h5>
                  <p> </p>
                </div>
                <div className="flex text-sm">
                  <h5 className="font-medium">Pricing:&nbsp;</h5>
                  <p> Starting from 2,419,900</p>
                </div>
                <div className="flex text-sm">
                  <h5 className="font-medium">Estimated Completion:&nbsp;</h5>
                  <p>NA</p>
                </div>
                <div className="flex text-sm">
                  <h5 className="font-medium">Square Footage:&nbsp;</h5>
                  <p>2569 sqft</p>
                </div>
                <div className="flex flex-wrap text-sm">
                  <p className="text-justify">
                    <span className="font-poppins font-medium">
                      Community Features:&nbsp;
                    </span>
                    Discover country living at Clarehaven Estates - lush
                    landscapes, Bungalows, and two-story residences. Easy access
                    to golf, hikes, and city lights via Old Elm GO station.
                    Superior construction, 10' ceilings, fireplaces, upgraded
                    kitchens, and luxurious ensuites. Step outside to your
                    private loggia and enjoy the charm of Clarehaven. Own your
                    haven now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LightBox />
      </div>
    </main>
  );
}

export default page;
