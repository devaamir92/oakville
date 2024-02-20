import Image from 'next/image';
import Link from 'next/link';

import { FaEnvelope, FaPhone } from 'react-icons/fa6';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import PhoneInputComponent from '@components/ui/PhoneInput';

export const metadata = {
  title: 'Contact Us - The Oakville Preserve',
  description:
    'If you have any queries regarding our website. Feel free to contact us.',
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
            <FaPhone />
            <Link href="tel:416-837-2000" className="">
              Phone: 416-837-2000
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden h-96 w-[1px] self-center bg-gray-600 lg:flex" />
      <div className="mb-10 flex flex-1 flex-col items-center justify-center gap-4 lg:mb-0">
        <h1 className="mb-4 text-2xl font-medium text-gray-800 lg:mb-10">
          Submit a Message
        </h1>
        <form className="flex min-w-full flex-col gap-6 md:min-w-[576px]">
          <Input type="text" required placeholder="Your Name" />
          <Input type="email" required placeholder="Your Email" />
          {/* <PhoneInputComponent
            onChange={e => {
              console.log(e);
            }}
          /> */}
          <Input type="text" required placeholder="Phone Number" />
          <Input type="text" required placeholder="Subject" />
          <textarea
            rows={4}
            required
            className="w-full rounded border-2 border-gray-300 p-2"
            placeholder="Your Message"
          />
          <Button
            type="submit"
            className="mx-auto w-fit rounded bg-primary-500 px-10 py-2 text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
