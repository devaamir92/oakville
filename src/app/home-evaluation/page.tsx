import Image from 'next/image';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

function page() {
  return (
    <div className="flex flex-col gap-10 bg-white pb-10">
      <section className="relative h-96 items-center justify-center lg:h-[calc(100vh-70px)]">
        <Image
          fill
          src="/images/webp/sell/mainEvalHeader.webp"
          priority
          sizes="100vw"
          alt="banner"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-20" />

        <div className="absolute  left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            <h1 className="w-[70%] text-center text-xl font-medium text-white md:text-2xl lg:text-3xl">
              Sell Your Home with The Local Preserve Oakville Real Estate
              Experts
            </h1>

            <div className="mx-auto mt-4 flex w-full max-w-xs items-center md:max-w-sm lg:max-w-lg">
              <Input
                placeholder="Enter your address"
                className="flex-1 rounded-r-none bg-white px-3"
              />
              <Button
                className="rounded-l-none bg-primary-500 lg:w-1/4"
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
          <h2 className="text-center text-xl font-semibold md:w-[80%] lg:w-[40%] 2xl:text-2xl">
            We Know The Neighbourhood Best, when You Sell With Us You Get More!
          </h2>
          <p className="text-center text-sm md:w-[80%] xl:text-base">
            Enjoy a seamless and beneficial selling experience when working with
            us. Whether you&apos;re looking to sell your Condo, Townhouse,
            Semi-Detached or Detached home in The Preserve Oakville, we are here
            to make the process effortless and successful. Beyond transactions,
            our ongoing support and local insights empower you to make informed
            decisions, creating a stress-free journey. With our commitment to
            efficiency, trust us to navigate the intricacies of The Preserve
            Oakville&apos;s real estate market, allowing you to focus on the
            exciting next chapter of your life with confidence.
          </p>
        </div>
      </div>
      <section className="relative overflow-hidden py-12 lg:h-[50vh]">
        <div className="absolute inset-0 hidden  md:block">
          <Image
            src="/images/webp/sell/homeEvalBanner.webp"
            alt="banner"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0  bg-gradient-to-r from-gray-100 to-gray-100 md:block md:via-transparent md:to-transparent" />
        <div className="container relative flex h-full items-center">
          <div className="md:w-2/5 md:text-left lg:w-[42%]">
            <h2 className="text-xl font-semibold 2xl:text-2xl">
              Hire A Real Estate Professional Who Never Gives Up
            </h2>
            <p className="mt-4 text-justify text-sm text-gray-800 2xl:text-base">
              Selling your home can be overwhelming, we help you simplify the
              process. Our dedicated team supports you from preparation to
              negotiations, ensures a successful closing and are there to answer
              your questions or lend a helping hand before, during and after the
              completion of the transaction. Not to mention this is all while
              aiming for the best possible price and terms that work for you.
              Whether buying or selling, rely on our committed professionals for
              top value.
            </p>

            <Button className="mt-4" variant="default">
              Contact Now
            </Button>
          </div>
        </div>
      </section>
      <h2 className="px-4 text-center text-xl font-semibold 2xl:text-2xl">
        How Do We Help You ?
      </h2>
      <div className="container grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto aspect-video w-[100%]">
          <Image
            src="/images/webp/sell/lawnSign.webp"
            alt="banner"
            fill
            sizes="100vw, (max-width: 768px) 50vw"
            className="rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="fle flex-col">
            <h3 className="mb-1 text-lg font-medium 2xl:text-xl">
              Expert Guidance
            </h3>
            <p className="text-justify text-sm 2xl:text-base">
              Our seasoned agents bring a wealth of experience in selling a
              diverse range of properties, ensuring that you benefit from expert
              guidance precisely tailored to meet your unique needs. With a deep
              understanding of The Preserve&apos;s real estate landscape, our
              team is well-equipped to navigate the intricacies of the market,
              providing you with valuable insights every step of the way.
            </p>
          </div>

          <div className="fle flex-col">
            <h3 className="mb-1 text-lg font-medium 2xl:text-xl">
              Local Market Knowledge
            </h3>
            <p className="text-justify text-sm 2xl:text-base">
              Benefit from our in-depth knowledge of The Preserve&apos;s real
              estate market to highlight your property&apos;s unique strengths
              and showcase the charm of its neighborhood to potential buyers.
              Our expertise extends beyond the basic features of a home; we
              understand the nuances that make The Preserve in Oakville a
              distinctive and desirable community, enhancing the attractiveness
              of your property in the eyes of prospective purchasers.
            </p>
          </div>
        </div>
      </div>
      <div className="container  grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <div className="fle flex-col">
            <h3 className="mb-1 text-lg font-medium 2xl:text-xl">
              Tailored Marketing Strategies
            </h3>
            <p className="text-justify text-sm 2xl:text-base">
              We craft personalized marketing strategies; focused on the
              distinct features of your property for maximum exposure. Through
              targeted campaigns, we ensure maximum exposure for your home,
              reaching the right audience and setting the stage for a successful
              sale in The Preserve, Oakville.
            </p>
          </div>

          <div className="fle flex-col">
            <h3 className="mb-1 text-lg font-medium 2xl:text-xl">
              Negotiation Excellence
            </h3>
            <p className="text-justify text-sm 2xl:text-base">
              Count on our team of skilled negotiators who work tirelessly to
              secure the best possible price and terms for your property. With a
              deep understanding of market dynamics and trends specific to The
              Preserve, Oakville, we strive to maximize your return on
              investment. Our negotiation excellence is geared towards ensuring
              you not only achieve your financial goals but also experience a
              seamless and profitable transaction.
            </p>
          </div>
        </div>
        <div className="relative order-1 mx-auto aspect-video w-[100%] md:order-2">
          <Image
            src="/images/webp/sell/3258Preserve.webp"
            alt="Tailored Marketing Strategies"
            fill
            sizes="100vw, (max-width: 768px) 50vw"
            className="rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default page;