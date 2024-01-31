import Image from 'next/image';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

function page() {
  return (
    <div className="flex flex-col gap-10 bg-white">
      <section
        className="relative items-center justify-center"
        style={{
          height: 'calc(100vh - 70px)',
          minHeight: '500px',
        }}
      >
        <Image
          fill
          src="/webp/mainEvalHeader.webp"
          alt="banner"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-20" />

        <div className="absolute  left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            <h3 className="w-[90%] text-center text-4xl font-medium text-white">
              Sell Your Home with The Local Preserve Oakville Real Estate
              Experts
            </h3>

            <div className="mx-auto mt-4 flex w-full max-w-lg items-center">
              <Input
                placeholder="Enter your address"
                className="flex-1 rounded-r-none bg-white px-3"
              />
              <Button
                className="w-1/4 rounded-l-none bg-primary-500"
                variant="default"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-4">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-center text-2xl  font-semibold">
            We Know The Neighbourhood Best, when You Sell With Us You Get More!
          </h4>
          <p className="w-[80%] text-center text-sm xl:text-base">
            Enjoy a seamless and beneficial selling experience when working with
            us. Whether you&apos;re looking to sell your Condo, Townhouse,
            Semi-Detached or Detached home in The Preserve Oakville, we are here
            to make the process effortless and successful Selling your home can
            be overwhelming, we help you simplify the process. Our dedicated
            team supports you from paration to negotiations, ensures a
            successful closing and are there to answer your questions or lend a
            helping hand before, during and after the completion of the
            transaction. Not to mention this is all while aiming for the best
            possible price and terms that work for you. Wheer buying or selling,
            rely on our committed professionals for top value.
          </p>
        </div>
      </div>
      <section className="relative overflow-hidden bg-black px-4 sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
          <Image
            src="/jpg/cta-banner.jpg"
            alt="banner"
            fill
            className="object-cover object-right"
          />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r from-black to-transparent md:block" />
        <div className="absolute inset-0 block bg-black/60 md:hidden" />

        <div className="container relative">
          <div className="text-center md:w-2/3 md:text-left lg:w-1/2 xl:w-1/2">
            <h2 className="font-semibold leading-tight text-white lg:text-2xl">
              Hire A Real Estate Professional Who Never Gives Up
            </h2>
            <p className="mt-4 text-sm text-gray-200 2xl:text-base">
              Market conditions are always hanging and a successful sale takes
              more than just putting a foreign sign up on the lawn The Preserve,
              Oakville Real Estate team has the know and resources to ensure
              your property sells ses for fop dolly We are the team that commits
              and invests into you and the sale of your home. Our 20+ years of
              combined market knowledge along with targeted neighbouthood
              marketing, partnerships with local businesses in the neighborhood
              id professional connections will the community
            </p>

            <Button className="mt-4" variant="default">
              Talk To Us
            </Button>
          </div>
        </div>
      </section>
      <h2 className="px-4 text-center text-2xl font-semibold">
        How Do We Help You ?
      </h2>
      <div className="container grid grid-cols-2 items-center gap-20">
        <div className="relative mx-auto aspect-video w-[100%]">
          <Image
            src="/jpg/lawnSign.jpg"
            alt="banner"
            fill
            className="rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              Expert Guidance
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Our experienced agents specialize in selling a variety of
              properties, ensuring you receive expert guidance tailored to your
              unique needs.
            </p>
          </div>

          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              Local Market Knowledge
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Benefit from our in-depth understanding of The Preserve&apos;s
              real estate market, showcasing your property&apos;s and
              neighbourhood’s strengths to potential buyers.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-10 grid grid-cols-2 items-center gap-20">
        <div className="flex flex-col gap-6">
          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              Tailored Marketing Strategies
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              We craft personalized marketing strategies; focused on the
              distinct features of your property for maximum exposure.
            </p>
          </div>

          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              Negotiation Excellence
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Our skilled negotiators work tirelessly to secure the best
              possible price and terms for your property, maximizing your return
              on investment.
            </p>
          </div>
        </div>
        <div className="relative mx-auto aspect-video w-[100%]">
          <Image
            src="/3258Preserve.jpg"
            alt="banner"
            fill
            className="rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
