import Image from 'next/image';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

function page() {
  return (
    <div>
      <section
        className="relative items-center justify-center"
        style={{
          height: 'calc(100vh - 70px)',
          minHeight: '500px',
        }}
      >
        <Image
          fill
          src="/jpg/cta.jpeg"
          alt="banner"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="absolute  left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-3">
            <h3 className="text-center text-4xl font-medium text-white">
              Sell Your Home with Ease!
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
      <div className="container py-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-center text-2xl  font-semibold">
            Hire a Real Estate Professional who never gives up
          </h4>
          <p className="text-center text-sm 2xl:text-base">
            Selling your home may seem overwhelming, but the Bungalow Finder
            Team is here to ease the process. With a commitment to your
            confidence and success, our experienced agents will support you at
            every stage – from preparing your home for the market to negotiating
            the sale. We strive to secure the best possible price for your
            property, making the journey smooth and stress-free. Trust in
            Bungalow Finder Team to guide you through the complexities of
            selling your home. Contact us today to discover how we can help you
            achieve a successful and confident sale. Whether buying or selling,
            partnering with a dedicated and determined real estate professional
            is crucial for securing the highest possible price for your
            property.
          </p>
        </div>
      </div>

      <section className="relative overflow-hidden bg-black py-10 sm:py-16 lg:py-24 xl:py-32">
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
              Talk to Us for Real Estate
            </h2>
            <p className="mt-4 text-sm text-gray-200 2xl:text-base">
              Stay ahead of the game by relying on our real estate insights. Our
              team offers updated information to help guide you through the
              process of buying and selling property and make informed
              decisions.
            </p>

            <Button className="mt-4" variant="default">
              Talk To Us
            </Button>
          </div>
        </div>
      </section>
      <h2 className="mt-10 text-center text-2xl font-semibold">
        How Do We Help You ?
      </h2>
      <div className="container grid grid-cols-2 items-center gap-20">
        <div className="relative mx-auto mt-10 aspect-video w-[100%]">
          <Image
            src="/jpg/listing/1.jpg"
            alt="banner"
            layout="fill"
            className="rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              We Always put You First
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente pariatur sunt voluptates laboriosam quod praesentium
              totam ullam. Voluptate eveniet debitis odit explicabo optio!
              Consectetur iure voluptatem commodi tenetur omnis.
            </p>
          </div>

          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              We Always put You First
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis tempore dolorem perspiciatis quas dolor neque similique,
              aliquam voluptatum accusantium quasi beatae rerum rem molestiae
              possimus? Accusamus quae vero illo natus.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-10 grid grid-cols-2 items-center gap-20">
        <div className="flex flex-col gap-6">
          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              We Always put You First
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente pariatur sunt voluptates laboriosam quod praesentium
              totam ullam. Voluptate eveniet debitis odit explicabo optio!
              Consectetur iure voluptatem commodi tenetur omnis.
            </p>
          </div>

          <div className="fle flex-col">
            <h4 className="mb-1 text-lg font-medium 2xl:text-xl">
              We Always put You First
            </h4>
            <p className="text-justify text-sm 2xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis tempore dolorem perspiciatis quas dolor neque similique,
              aliquam voluptatum accusantium quasi beatae rerum rem molestiae
              possimus? Accusamus quae vero illo natus.
            </p>
          </div>
        </div>
        <div className="relative mx-auto aspect-video w-[100%]">
          <Image
            src="/jpg/listing/8.jpg"
            alt="banner"
            layout="fill"
            className="rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
