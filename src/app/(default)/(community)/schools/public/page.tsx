import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cn from '@utils/cn';

interface PageProps {
  searchParams?: {
    grade?: 'elementary' | 'high-school';
  };
}

const ElementarySchools = [
  {
    name: 'Oakville Trafalgar High School',
    website: 'https://oth.hdsb.ca/',
    picture: '/images/webp/schools/oth.jpg',
    address: '1460 Devon Rd, Oakville, ON L6J 3L6',
    phone: '(905) 845-2877',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.5,
  },
  {
    name: 'White Oaks Secondary School',
    website: 'https://woh.hdsb.ca/',
    picture: '/images/webp/schools/white-oaks.jpg',
    address: '1330 Montclair Dr, Oakville, ON L6H 1Z5',
    phone: '(905) 845-5200',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 7.8,
  },
  {
    name: 'Abbey Park High School',
    website: 'https://aph.hdsb.ca/',
    picture: '/images/webp/schools/abbey-park.jpg',
    address: '1455 Glen Abbey Gate, Oakville, ON L6M 2G5',
    phone: '(905) 827-4101',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.2,
  },
  {
    name: 'Garth Webb Secondary School',
    website: 'https://gwh.hdsb.ca/',
    picture: '/images/webp/schools/garth-webb.jpg',
    address: '2820 Westoak Trails Blvd, Oakville, ON L6M 4W2',
    phone: '(905) 847-6875',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.9,
  },
  {
    name: 'St. Ignatius of Loyola Secondary School',
    website: 'https://loy.hcdsb.org/',
    picture: '/images/webp/schools/st-ignatius.jpg',
    address: '1550 Nottinghill Gate, Oakville, ON L6M 1S2',
    phone: '(905) 847-0595',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.7,
  },
];

const Page: React.FC<PageProps> = ({ searchParams }) => {
  return (
    <div>
      <main className="mx-auto flex h-full max-w-[1140px] flex-col gap-4 py-4">
        {/* <div className="flex flex-col"> */}
        <h2 className="text-2xl font-semibold">Public schools</h2>
        <hr className="my-2 border-gray-300" />

        {/* <section>
            <div className="flex justify-center gap-4">
              <Link
                href="/schools/public?grade=elementary"
                className={cn(
                  'flex-1 rounded  border border-gray-300 bg-gray-200 px-4 py-2 text-center font-medium transition-colors duration-300 ease-in-out hover:bg-primary-500 hover:text-white',
                  searchParams?.grade === 'elementary' &&
                    'bg-primary-400 text-white'
                )}
              >
                Elementary
              </Link>
              <Link
                href="/schools/public?grade=high-school"
                className={cn(
                  'flex-1 rounded  border border-gray-300 bg-gray-200 px-4 py-2 text-center font-medium transition-colors duration-300 ease-in-out hover:bg-primary-500 hover:text-white',
                  searchParams?.grade === 'high-school' &&
                    'bg-primary-400 text-white'
                )}
              >
                High School
              </Link>
            </div>
          </section> */}
        {/* </div> */}
        {/* <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Elementary</h5>
          <ul className="flex flex-col gap-1">
            {ElementarySchools.map(school => (
              <li
                key={school.name}
                className="ml-4 list-decimal text-sm text-gray-700 2xl:text-base"
              >
                <Link href="/">{school.name}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div className="flex flex-col gap-4">
          {ElementarySchools.map((school, index) => (
            <>
              <h3 className="py-2 text-xl font-semibold">
                {index + 1} {' - '}
                {school.name}
              </h3>
              <div key={school.name} className="flex  overflow-hidden rounded ">
                <div className="relative h-72 flex-1 ">
                  <Image
                    src={school.picture}
                    alt={school.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-2  px-4 py-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Address:</span>
                    <span className="text-gray-700">{school.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span className="text-gray-700">{school.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Grades:</span>
                    <span className="text-gray-700">{school.grades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Before/After Programs:</span>
                    <span className="text-gray-700">
                      {school.beforeAfterPrograms ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">French Imersion:</span>
                    <span className="text-gray-700">
                      {school.frenchImersion ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Fraser Ranking:</span>
                    <span className="text-gray-700">
                      {school.fraserRanking}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Website:</span>
                    <Link href={school.website} className="text-blue-500">
                      {school.website}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div> */}
      </main>
    </div>
  );
};

export default Page;
