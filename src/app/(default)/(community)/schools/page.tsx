import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaGlobeAmericas, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import { Button } from '@components/ui/Button';
import Map from '@components/Mapbox';

const ElementarySchools = [
  // {
  //   name: 'Oakville Trafalgar High School',
  //   website: 'https://oth.hdsb.ca/',
  //   picture: '/images/webp/schools/oth.jpg',
  //   address: '1460 Devon Rd, Oakville, ON L6J 3L6',
  //   phone: '(905) 845-2877',
  //   grades: '9-12',
  //   beforeAfterPrograms: true,
  //   frenchImersion: true,
  //   fraserRanking: 8.5,
  // },
  // {
  //   name: 'White Oaks Secondary School',
  //   website: 'https://woh.hdsb.ca/',
  //   picture: '/images/webp/schools/white-oaks.jpg',
  //   address: '1330 Montclair Dr, Oakville, ON L6H 1Z5',
  //   phone: '(905) 845-5200',
  //   grades: '9-12',
  //   beforeAfterPrograms: true,
  //   frenchImersion: false,
  //   fraserRanking: 7.8,
  // },
  // {
  //   name: 'Abbey Park High School',
  //   website: 'https://aph.hdsb.ca/',
  //   picture: '/images/webp/schools/abbey-park.jpg',
  //   address: '1455 Glen Abbey Gate, Oakville, ON L6M 2G5',
  //   phone: '(905) 827-4101',
  //   grades: '9-12',
  //   beforeAfterPrograms: true,
  //   frenchImersion: true,
  //   fraserRanking: 8.2,
  // },
  // {
  //   name: 'Garth Webb Secondary School',
  //   website: 'https://gwh.hdsb.ca/',
  //   picture: '/images/webp/schools/garth-webb.jpg',
  //   address: '2820 Westoak Trails Blvd, Oakville, ON L6M 4W2',
  //   phone: '(905) 847-6875',
  //   grades: '9-12',
  //   beforeAfterPrograms: true,
  //   frenchImersion: true,
  //   fraserRanking: 8.9,
  // },
  // {
  //   name: 'St. Ignatius of Loyola Secondary School',
  //   website: 'https://loy.hcdsb.org/',
  //   picture: '/images/webp/schools/st-ignatius.jpg',
  //   address: '1550 Nottinghill Gate, Oakville, ON L6M 1S2',
  //   phone: '(905) 847-0595',
  //   grades: '9-12',
  //   beforeAfterPrograms: false,
  //   frenchImersion: true,
  //   fraserRanking: 8.7,
  // },
  {
    name: "King's Christian Collegiate",
    website: 'https://kingschristian.ca/',
    picture: '/images/webp/schools/kings-christian.jpg',
    address: '528 Burnhamthorpe Rd W, Oakville, ON L6M 4K6',
    phone: '(905) 257-5464',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: false,
    fraserRanking: 0,
  },
  {
    name: 'Our Lady of Peace Catholic Elementary School',
    website: 'https://oplelementary.hcdsb.org/',
    picture: '/images/webp/schools/our-lady-of-peace.jpg',
    address: '391 River Glen Blvd, Oakville, ON L6H 5X5',
    phone: '(905) 257-2791',
    grades: 'JK-8',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 7,
  },
  {
    name: 'Oodenawi Public School',
    website: 'https://ood.hdsb.ca/',
    picture: '/images/webp/schools/Oodenawi-Public-School.png',
    address: '385 Sixteen Mile Dr, Oakville, ON L6M 0Z4',
    phone: '(905) 469-6098',
    grades: 'JK-8',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.2,
  },
  {
    name: 'St. Gregory the Great Catholic Elementary School',
    website: 'https://elem.hcdsb.org/stgregory/',
    picture: '/images/webp/schools/st-gregory.png',
    address: '138 Sixteen Mile Dr, Oakville, ON L6M 0Z4',
    phone: '(905) 257-9432',
    grades: 'JK-8',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 7,
  },
  {
    name: 'Dr. David R. Williams Public School',
    website: 'https://ddw.hdsb.ca/',
    picture: '/images/webp/schools/dr-david-r-williams.png',
    address: '3199 Post Rd, Oakville, ON L6H 0V4, Canada',
    phone: '(905) 257-4549',
    grades: 'JK-Jk',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 0,
  },
  {
    name: 'Dearcroft Montessori School – Trafalgar Crossing',
    website: 'https://dearcroftmontessori.com',
    picture: '/images/webp/schools/dearcroft-montessori.png',
    address: '297 Oak Walk Dr, Oakville, ON L6H 3R6, Canada',
    phone: '(905) 257-3200',
    grades: 'Montessori',
    beforeAfterPrograms: true,
    frenchImersion: false,
    fraserRanking: 0,
  },
  {
    name: 'River Oaks Public School',
    website: 'https://rop.hdsb.ca/',
    picture: '/images/webp/schools/river-oaks.png',
    address: '2173 Munn’s Ave, Oakville, ON L6H 3S9, Canada',
    phone: '(905) 842-7430',
    grades: 'JK-8',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 7.5,
  },
  {
    name: 'White Oaks Secondary School',
    website: 'https://wos.hdsb.ca/',
    picture: '/images/webp/schools/white-oaks.png',
    address: '1330 Montclair Dr, Oakville, ON L6H 1Z5, Canada',
    phone: '(905) 845-5200',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: false,
    fraserRanking: 7.8,
  },
  {
    name: 'Trafalgar Ridge Montessori School',
    website: 'https://trms.ca/',
    picture: '/images/webp/schools/trafalgar-ridge.png',
    address: '2379 Trafalgar Rd, Oakville, ON L6H 6K7, Canada',
    phone: '(905) 257-7700',
    grades: 'Montessori',
    beforeAfterPrograms: true,
    frenchImersion: false,
    fraserRanking: 0,
  },
  {
    name: 'Palermo Public School',
    website: 'https://pal.hdsb.ca/',
    picture: '/images/webp/schools/palermo.png',
    address: '2561 Valleyridge Dr, Oakville, ON L6M 5H4, Canada',
    phone: '(905) 469-1138',
    grades: 'JK-8',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 7.5,
  },
  {
    name: 'Holy Trinity Catholic Secondary School',
    website: 'https://secondary.hcdsb.org/holytrinity/',
    picture: '/images/webp/schools/holy-trinity.png',
    address: '2420 Sixth Line, Oakville, ON L6H 3N8, Canada',
    phone: '(905) 257-3534',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.5,
  },
  {
    name: 'Iroquois Ridge High School',
    website: 'https://irh.hdsb.ca/',
    picture: '/images/webp/schools/iroquois-ridge.jpg',
    address: '1123 Glenashton Dr, Oakville, ON L6H 4G1, Canada',
    phone: '(905) 845-0012',
    grades: '9-12',
    beforeAfterPrograms: true,
    frenchImersion: true,
    fraserRanking: 8.5,
  },
  {
    name: 'Al-Falah Islamic School',
    website: 'https://alfalahschool.ca',
    picture: '/images/webp/schools/al-falah.png',
    address: '391 Burnhamthorpe Rd E, Oakville, ON L6H 7B4, Canada',
    phone: '(905) 257-6669',
    grades: 'JK-8',
    beforeAfterPrograms: true,
    frenchImersion: false,
    fraserRanking: 10,
  },
];

function page() {
  return (
    <main className=" mx-auto flex max-w-[1140px] flex-col gap-8 py-4">
      <h3 className="text-center text-xl font-medium">
        The Preserve Oakville Schools
      </h3>

      <section className="-mt-4 flex flex-col   gap-8">
        <div
          className="overflow-hidden rounded"
          style={{
            height: 'calc(100vh - 252px)',
          }}
        >
          <Map />
        </div>
        <div className="flex gap-8">
          <Button className=" h-14 flex-1 items-center gap-2 bg-primary-500 px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:bg-primary-500 hover:text-white">
            <div className="size-2 rounded-full bg-primary-500 ring ring-gray-300 ring-offset-2 " />
            Montessori
          </Button>
          <Button className=" h-14 flex-1 items-center gap-2 bg-primary-100 px-6 py-3 font-medium text-primary-500 transition-all duration-300 ease-out hover:bg-primary-500 hover:text-white">
            <div className="size-2 rounded-full bg-primary-500 ring ring-gray-300 ring-offset-2 " />
            Public
          </Button>
          <Button className=" h-14 flex-1 items-center gap-2 bg-primary-100 px-6 py-3 font-medium text-primary-500 transition-all duration-300 ease-out hover:bg-primary-500 hover:text-white">
            <div className="size-2 rounded-full bg-primary-500 ring ring-gray-300 ring-offset-2 " />
            Primary
          </Button>
          <Button className=" h-14 flex-1 items-center gap-2 bg-primary-100 px-6 py-3 font-medium text-primary-500 transition-all duration-300 ease-out hover:bg-primary-500 hover:text-white">
            <div className="size-2 rounded-full bg-primary-500 ring ring-gray-300 ring-offset-2 " />
            Catholic
          </Button>
        </div>
      </section>

      {ElementarySchools.map(school => (
        <div
          className="flex overflow-hidden rounded border border-gray-300"
          key={school.name}
        >
          <div className="relative h-72 flex-1">
            <Image
              src={school.picture}
              alt={school.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2 pt-2">
              <h5 className="px-4 text-base font-medium">{school.name}</h5>
              <hr />
            </div>
            <div className="flex flex-col gap-4 px-4 py-3">
              <p className="text-sm">
                Fraser Ranking:{' '}
                <span className="font-semibold">
                  {school.fraserRanking > 0 ? school.fraserRanking : 'N/A'}
                </span>
              </p>
              <p className="text-sm">
                French Immersion:{' '}
                <span className="font-semibold">
                  {school.frenchImersion ? 'Yes' : 'No'}
                </span>
              </p>
              <p className="text-sm">
                Before and after school programs:{' '}
                <span className="font-semibold">
                  {school.beforeAfterPrograms ? 'Yes' : 'No'}
                </span>
              </p>
              <Link
                href={`tel:${school.phone}`}
                className="flex items-center gap-1.5 text-sm"
              >
                <FaPhoneAlt size={14} />
                {school.phone}
              </Link>
              <Link
                href={school.website}
                className="flex items-center gap-1.5 text-sm"
              >
                <FaGlobeAmericas size={14} />
                {school.website}
              </Link>
              <div className="flex items-center gap-1.5">
                <FaMapMarkerAlt size={14} />
                <p className="text-sm">{school.address}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="grid grid-cols-2 gap-4"> */}
      {/* <div className="grid grid-cols-2 gap-4">
        {ElementarySchools.map(school => (
          <div
            key={school.name}
            className="relative flex flex-col gap-2 rounded border border-gray-300 p-2"
          >
            <div className="relative h-60 w-full">
              <Image
                src={school.picture}
                alt={school.name}
                fill
                className="rounded object-cover"
              />
              <div className="absolute left-2 top-2 flex gap-2">
                {school.frenchImersion && (
                  <div className="rounded-sm bg-white  px-2 py-1 text-sm font-semibold leading-4 shadow">
                    <span>French Immersion</span>
                  </div>
                )}
                <div className=" rounded-sm bg-white  px-2 py-1 text-sm font-semibold leading-4 shadow">
                  <span>
                    Grade {school.grades.split('-')[0]} -
                    {school.grades.split('-')[1]}
                  </span>
                </div>
              </div>
            </div>

            <h5 className="text-base font-medium">{school.name}</h5>

            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-1.5">
                <FaMapMarkerAlt size={14} />
                <p className="text-sm">{school.address}</p>
              </div>
              <Link
                href={`tel:${school.phone}`}
                className="flex items-center gap-1.5 text-sm"
              >
                <FaPhoneAlt size={14} />
                {school.phone}
              </Link>
              <Link
                href={school.website}
                className="flex items-center gap-1.5 text-sm"
              >
                <FaGlobeAmericas size={14} />
                {school.website}
              </Link>

              <p className="text-sm">
                Before and after school programs:{' '}
                <span className="font-semibold">
                  {school.beforeAfterPrograms ? 'Yes' : 'No'}
                </span>
              </p>
            </div>
            <div className="absolute bottom-4 right-0 ">
              {school.fraserRanking > 0 && (
                <RankingPie ranking={school.fraserRanking} />
              )}
            </div>
          </div>
        ))}
      </div> */}
    </main>
  );
}

export default page;
