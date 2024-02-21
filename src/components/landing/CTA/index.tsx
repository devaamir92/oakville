import Link from 'next/link';
import Image from 'next/image';

function CTASection() {
  return (
    <section className="bg-primary-400 pt-8 sm:pt-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-4 md:items-start lg:w-2/5">
          <h2 className="text-center text-2xl font-semibold text-white">
            Free Home Evaluation
          </h2>
          <p className=" text-justify text-base text-white">
            Being Certified Real Estate Professionals and having in-depth
            knowledge of the market, we can assist you to estimate the value of
            your condo. Our services will be free of cost and will assist you to
            make informed decision regarding pricing of your condo prior listing
            it at market. Condo evaluation is key to determine the best sales
            price.
          </p>
          <Link
            href="/sell"
            className="min-w-fit rounded border border-secondary-500 px-3 py-1.5 text-center text-sm text-white hover:bg-primary-400"
          >
            Get Free Evaluation
          </Link>
        </div>
        <div className="lg:w-1/5" />
        <div className="flex flex-1">
          <div className="relative hidden size-96 flex-1 overflow-hidden sm:block sm:h-96">
            <Image
              src="/images/webp/cta-main.webp"
              fill
              alt="free home evaluation"
              sizes="33vw"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
