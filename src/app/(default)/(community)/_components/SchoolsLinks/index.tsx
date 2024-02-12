import Link from 'next/link';

const SchoolsLinks = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link
            href="#publicschools"
            className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
          >
            <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Public
            </h3>
          </Link>
          <Link
            href="#catholicschools"
            className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
          >
            <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Catholic
            </h3>
          </Link>
          <Link
            href="#montessorischools"
            className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
          >
            <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Montessori
            </h3>
          </Link>
          <Link
            href="#privateschools"
            className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
          >
            <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
              Private
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolsLinks;
