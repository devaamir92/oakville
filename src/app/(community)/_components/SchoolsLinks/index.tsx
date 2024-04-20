import Link from 'next/link';

const SchoolsLinks = () => {
  return (
    <div>
      <div className="flex gap-4 lg:gap-8">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          <Link
            href="#publicschools"
            className="flex flex-1 items-center justify-center rounded bg-[#E0434A] px-6 py-3 text-white"
          >
            <h2 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Public
            </h2>
          </Link>
          <Link
            href="#catholicschools"
            className="flex flex-1 items-center justify-center rounded bg-[#0E7AEB] px-6 py-3 text-white"
          >
            <h2 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Catholic
            </h2>
          </Link>
          <Link
            href="#montessorischools"
            className="flex flex-1 items-center justify-center rounded bg-[#F6AA3C] px-6 py-3 text-white"
          >
            <h2 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Montessori
            </h2>
          </Link>
          <Link
            href="#privateschools"
            className="flex flex-1 items-center justify-center rounded bg-[#5EC976] px-6 py-3 text-white"
          >
            <h2 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Private
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolsLinks;
