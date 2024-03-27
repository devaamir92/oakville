import Link from 'next/link';
import Image from 'next/image';

function CTASection() {
  return (
    <section className="bg-primary-500 p-8 sm:py-0">
      <div className="container flex flex-col items-center justify-between gap-16 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-4 md:items-start lg:w-2/5">
          <h2 className="text-center text-xl font-semibold text-white md:text-2xl">
            Free Home Evaluation
          </h2>
          <p className=" text-justify text-base text-white">
            As your local Preserve Oakville Real Estate experts and certified
            Real Estate Brokers, we offer free in-depth home evaluations. Having
            significant knowledge of The Preserve Oakville housing market, we
            can assist you in evaluating the market price of your home along
            with sharing with you what simple adjustments can be done to
            increase the value of your property before coming to market. With
            this beneficial information, you will be able to make more informed
            decisions before listing on the market to maximize your return. A
            home evaluation is a key step before listing your property and
            we&apos;re here to provide you with just that. Contact us today for
            your free home evaluation.
          </p>
          <Link
            href="/home-evaluation"
            className="flex h-[36px] min-w-fit  items-center justify-center rounded bg-primary-700 px-3 text-center text-sm text-white transition-all duration-300 ease-in-out hover:bg-primary-400"
          >
            Get Free Evaluation
          </Link>
        </div>
        <div className="hidden flex-1 sm:flex">
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
