import Image from 'next/image';

import { Button } from '@components/ui/Button';

function CTASection() {
  return (
    <section className="bg-primary-500 px-4 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-4 md:items-start lg:w-2/5">
          <h2 className="text-center text-2xl font-semibold text-white">
            Free Home Evaluation
          </h2>
          <p className=" text-base text-gray-300 md:text-justify">
            Being Certified Real Estate Professionals and having in-depth
            knowledge of the market, we can assist you to estimate the value of
            your condo. Our services will be free of cost and will assist you to
            make informed decision regarding pricing of your condo prior listing
            it at market. Condo evaluation is key to determine the best sales
            price.
          </p>
          <Button
            variant="outline"
            className="border-secondary-500 text-white hover:bg-primary-400 md:w-1/3"
          >
            Get Free Evaluation
          </Button>
        </div>
        <div className="lg:w-1/5" />
        <div className="flex flex-1">
          <div className="relative hidden aspect-square flex-1 overflow-hidden rounded sm:block sm:h-96">
            <Image src="/jpg/cta.jpeg" fill alt="free home evaluation" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
