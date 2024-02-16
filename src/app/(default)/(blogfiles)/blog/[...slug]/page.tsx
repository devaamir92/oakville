import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaRegCircleRight,
  FaXTwitter,
} from 'react-icons/fa6';

import { Button } from '@components/ui/Button';

import CategoryFilter from '@app/(default)/(blogfiles)/_components/CategoryFilter';

const Links = [
  {
    name: 'Selling Your Real Estate Property',
    url: '/',
    date: 'June 15, 2023',
    categories: ['Real Estate', 'Home Sellers', 'Real Estate News'],
    Imageurl: '/images/webp/photo.webp',
  },
  {
    name: 'Tips for Buying a Home',
    url: '/',
    date: 'Feb 15, 2024',
    categories: ['Real Estate', 'Home Buyers', 'Real Estate News'],
    Imageurl: '/images/webp/photo1.webp',
  },
  {
    name: 'Understanding Mortgage Rates',
    url: '/',
    date: 'March 10, 2024',
    categories: [
      'Real Estate Tips and Tricks',
      'Mortgage Rates',
      'Real Estate News',
    ],
    Imageurl: '/images/webp/photo2.webp',
  },
];

function Page() {
  return (
    <main className="container flex flex-col gap-4 py-4 lg:flex-row">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div className="flex flex-col gap-0">
            <h4 className="text-xl font-medium">
              Are Bungalows Worth the Extra Cost Compared
            </h4>
            <p className="text-sm text-gray-500">December 1, 2023</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium">Share On:</span>
            <Button className="flex size-7 items-center justify-center bg-blue-500 p-0">
              <FaFacebookF size={18} />
            </Button>
            <Button className="flex size-7 items-center justify-center bg-black p-0">
              <FaXTwitter size={18} />
            </Button>
            <Button className="flex size-7 items-center justify-center bg-red-500 p-0">
              <FaPinterest size={18} />
            </Button>
            <Button className="flex size-7 items-center justify-center bg-blue-600 p-0">
              <FaLinkedinIn size={18} />
            </Button>
          </div>
        </div>
        <div className="relative h-96">
          <Image
            src="/images/webp/sell/mainEvalHeader.webp"
            alt="Next.js"
            fill
            className="rounded object-cover object-center"
          />
          <div className="absolute left-4 top-4">
            {/* <div className="flex flex-wrap gap-1.5">
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Home Sellers
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Real Estate and Technology
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Bungalows
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Home Buyers
              </Link>
              <Link
                href="/"
                className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
              >
                Real Estate News
              </Link>
            </div> */}
          </div>
        </div>
        <div className="">
          <div className="space-y-4">
            <p className="text-justify text-sm text-gray-700">
              <span className="block">
                Are you considering diving into the world of real estate,
                whether for investment purposes or to find your dream home? Real
                estate transactions can be exciting and rewarding but have their
                fair share of questions and complexities. In this comprehensive
                guide, we aim to address your top questions about{' '}
                <a
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href="https://bungalowfinder.ca/"
                >
                  buying real estate
                </a>
                . Whether you&apos;re curious about the process, legalities,
                financing, or market trends, we&apos;ve got you covered.
                Let&apos;s embark on this journey together and demystify the
                world of real estate, ensuring you make informed decisions every
                step of the way.
              </span>
            </p>

            <div className="space-y-2">
              <h2 className="text-justify text-xl font-medium">
                14 Key Questions Posed by Real Estate Buyers in Canada
              </h2>
              <p className="text-sm text-gray-700">
                Canada offers a diverse range of real estate opportunities, from
                the bustling cityscapes of Toronto to the tranquil suburbs of
                Vancouver. However, before taking the plunge into this exciting
                venture, it&apos;s crucial to understand the landscape and the
                questions that commonly arise clearly.&nbsp;
              </p>
              <p className="text-sm text-gray-700">
                Following are 14 key questions posed by{' '}
                <a
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href="https://bungalowfinder.ca/"
                >
                  real estate buyers in Canada
                </a>
                , shedding light on everything from property types and financing
                to legalities and market trends. Whether you&apos;re a
                first-time home buyer or a seasoned investor, we aim to equip
                you with the knowledge to make confident and well-informed
                decisions in the Canadian real estate market.
              </p>
            </div>

            <h3 className="ml-8 text-justify text-xl font-medium">
              &nbsp;1. What to consider before buying a house in Canada?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              Several factors should be carefully considered before purchasing a
              home in Canada. Budget constraints should be balanced with
              location preferences, whether a{' '}
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                href="https://bungalowfinder.ca/city/Milton"
              >
                bungalow in Milton
              </a>{' '}
              or a{' '}
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                href="https://bungalowfinder.ca/city/Mississauga"
              >
                detached house in Mississauga
              </a>
              . Additionally, understanding the local real estate market and
              accounting for ongoing costs like property taxes, maintenance, and
              insurance is crucial to making an informed decision.
            </p>

            <h3 className="ml-8 text-justify text-xl font-medium">
              2. Who qualifies for first-time home buyer Canada?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              In Canada, first-time homebuyers may qualify for various
              incentives and benefits, such as reduced land transfer taxes or
              the First-Time Home Buyer Incentive program. Generally,
              eligibility is based on not owning a home in the past four years.
              Specific criteria may vary by province, so it&apos;s essential to
              research the qualifications specific to your area.
            </p>

            <h3 className="ml-8 text-justify text-xl font-medium">
              &nbsp;3. Can a buyer cancel an accepted offer?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              Buyers can cancel an accepted offer, but this action typically
              hinges on the terms stipulated in the purchase agreement. Common
              reasons for cancellation include issues arising from home
              inspections, financing challenges, or other contingencies. For a
              precise understanding of the cancellation process, it&apos;s
              advisable to consult with a real estate lawyer who can assist you
              based on the specific terms of your contract.
            </p>
            <h3 className="ml-8 text-justify text-xl font-medium">
              4. What happens if a buyer pulls out of the sale?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              Consequences may arise when a buyer withdraws from a sale after
              accepting an offer. These consequences usually involve forfeiting
              the deposit, often called earnest money or security deposit,
              depending on the contract terms. In some cases, legal action might
              be pursued for breach of contract, leading to potential financial
              penalties.
            </p>
            <h3 className="ml-8 text-justify text-xl font-medium">
              5. What is the difference between earnest money and a security
              deposit?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              Earnest money is a deposit a buyer makes when submitting an offer
              to purchase a property, demonstrating their commitment to the
              transaction. In contrast, a security deposit is typically
              associated with renting, serving as insurance against potential
              damages and unpaid rent during a lease term. These terms and their
              uses differ significantly in the real estate context.
            </p>
            <h3 className="ml-8 text-justify text-xl font-medium">
              6. What is a financial contingency?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              A financial contingency in a real estate contract allows the buyer
              to complete the purchase only if specific economic conditions are
              met, such as securing a mortgage loan at a specified interest
              rate. If these conditions are not met, the buyer typically can
              withdraw from the deal without any adverse consequences.
            </p>
            <h3 className="ml-8 text-justify text-xl font-medium">
              &nbsp;7. What happens when a buyer defaults?
            </h3>
            <p className="ml-10 text-sm text-gray-700">
              When a buyer defaults on a real estate agreement, consequences can
              include forfeiting their earnest money deposit and potential legal
              action for breach of contract. The exact outcomes depend on the
              terms and conditions outlined in the purchase agreement and the
              laws governing such situations in the relevant jurisdiction.
            </p>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p className="text-sm text-gray-700">
              In conclusion, the journey of buying real estate in Canada is
              multifaceted and filled with excitement and opportunities.
              It&apos;s essential to approach it with knowledge and the answers
              to your questions. From understanding the differences between
              property types like bungalows and detached houses to navigating
              the intricacies of earnest money deposits and government
              incentives, this guide has aimed to provide you with a
              comprehensive roadmap. So, as you embark on this adventure,
              remember that a well-researched and thoughtful approach will help
              you find the perfect property, whether it&apos;s a{' '}
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                href="https://bungalowfinder.ca/city/Milton"
              >
                bungalow in Milton
              </a>
              , a{' '}
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                href="https://bungalowfinder.ca/city/Mississauga"
              >
                detached house in Mississauga
              </a>
              , or any other dream home you&apos;ve set your sights on. Happy
              house hunting!
            </p>
          </div>
        </div>
        {/* <section className="flex flex-col gap-4">
          <div>
            <h4 className="mb-2 text-xl font-medium">Recent Blogs</h4>
            <hr />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Links.map(({ name, date, Imageurl, categories }) => (
              <Link
                key={name}
                href={`/blog/${name.toLowerCase().split(' ').join('-')}`}
                className="group flex h-[300px] flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
              >
                <div className="relative h-60">
                  <Image
                    src={Imageurl}
                    fill
                    alt={name}
                    className="object-cover"
                    sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
                  />
                  <CategoryFilter categories={categories} />
                </div>
                <div className="flex flex-col gap-1 p-3">
                  <span className="truncate text-base font-medium">{name}</span>
                  <div className="flex justify-between text-center">
                    <p className="text-sm text-gray-500">{date}</p>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm text-primary-500 transition-all duration-300 ease-in-out
                      group-hover:font-semibold"
                    >
                      <span>Read More</span>
                      <FaRegCircleRight />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section> */}
      </div>
      <div className="rounded bg-secondary-300 p-4 lg:w-[450px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className=" text-xl font-medium">Tags</h4>
              <hr className="border-gray-300" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-1.5">
                <Link
                  href="/"
                  className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
                >
                  Home Sellers
                </Link>
                <Link
                  href="/"
                  className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
                >
                  Real Estate and Technology
                </Link>
                <Link
                  href="/"
                  className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
                >
                  Bungalows
                </Link>
                <Link
                  href="/"
                  className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
                >
                  Home Buyers
                </Link>
                <Link
                  href="/"
                  className="rounded bg-primary-500 px-3 py-1 text-sm text-white"
                >
                  Real Estate News
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <hr className="border-gray-300" />
              <h4 className=" text-xl font-medium">Recent Blogs</h4>
              <hr className="border-gray-300" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {Links.map(({ name, date, Imageurl, categories }) => (
                <Link
                  key={name}
                  href={`/blog/${name.toLowerCase().split(' ').join('-')}`}
                  className="group flex h-[300px] flex-col overflow-hidden rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  <div className="relative h-60">
                    <Image
                      src={Imageurl}
                      fill
                      alt={name}
                      className="object-cover"
                      sizes="(min-width: 320px) 320w, (max-width: 640px) 640w, (min-width: 641px) 768w, (max-width: 1023px) 1024w, (min-width: 1024px) 1280w"
                    />
                    <CategoryFilter categories={categories} />
                  </div>
                  <div className="flex flex-col gap-1 p-3">
                    <span className="truncate text-base font-medium">
                      {name}
                    </span>
                    <div className="flex justify-between text-center">
                      <p className="text-sm text-gray-500">{date}</p>
                      <button
                        type="button"
                        className="flex items-center gap-1 text-sm text-primary-500 transition-all duration-300 ease-in-out
                      group-hover:font-semibold"
                      >
                        <span>Read More</span>
                        <FaRegCircleRight />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
