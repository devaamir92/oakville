import Image from 'next/image';
import Link from 'next/link';

import { FaEnvelope } from 'react-icons/fa6';

import type { Metadata } from 'next';

import { BsFillTelephoneFill } from 'react-icons/bs';

import Contact from './_components/Contact';
// import PhoneInputComponent from '@components/ui/PhoneInput';

export const metadata: Metadata = {
  title: 'Contact Us: Rent, Buy & Sell Homes, at The Preserve',
  description:
    'Get in touch with The Preserve Oakville for luxury properties and homes for sale. Contact for information on properties from Mattamy Homes, Fernbrook, and more.',
};

export default function Page() {
  return (
    <div className="container flex h-[calc(100vh-70px)] flex-col gap-6 lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <div className="relative mb-4 h-36 w-48  xl:h-[125px] xl:w-[250px]">
            <Image
              src="/images/svg/oakville-black-logo.svg"
              alt="The Oakville Preserve Logo"
              fill
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-base">
            <FaEnvelope />
            <Link href="mailto:info@preserveoakville.ca" className="">
              Email: info@preserveoakville.ca
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-base">
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
          </div>
        </div>
      </div>
      <div className="hidden h-96 w-[1px] self-center bg-gray-600 lg:flex" />
      <Contact />
    </div>
  );
}
