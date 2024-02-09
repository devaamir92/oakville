import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Map from '@components/Mapbox';

import { Button } from '@components/ui/Button';

const Ranking = dynamic(() => import('./_components/Ranking'), { ssr: false });

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

const Schools = () => {
  return (
    <main className="container flex h-full  gap-4 py-4">
      <div className="flex flex-1 flex-col">
        <h2 className="text-2xl font-semibold">Schools in the community</h2>
        <hr className="my-2 border-gray-300" />

        <div className="flex items-start gap-4">
          <div
            className="sticky top-[134px] flex-1 overflow-hidden rounded"
            style={{
              height: 'calc(100vh - 152px)',
            }}
          >
            <Map />
          </div>
          <div className="flex h-full w-2/5 flex-col gap-4">
            <div className="flex items-center gap-4">
              <select
                name="school type"
                id="schools"
                className="h-[36px] flex-1 appearance-none rounded border border-gray-300 bg-transparent px-4 text-sm focus:border-primary-400 focus:outline-none"
              >
                <option value="montessori">Montessori</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="catholic">Catholic</option>
              </select>

              <div className="flex h-[36px] gap-2 rounded bg-secondary-500 px-1.5 py-1">
                <Button className="h-full">Elementary</Button>
                <Button className="h-full bg-transparent" variant="ghost">
                  Secondary
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {ElementarySchools.map(school => (
                <div
                  key={school.name}
                  className="relative flex overflow-hidden rounded border"
                >
                  <div className="relative aspect-square h-40">
                    <Image
                      src={school.picture}
                      alt={school.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-between  px-2">
                    <h3 className="line-clamp-1 w-full text-ellipsis pt-1 text-base font-medium">
                      {school.name}
                    </h3>
                    <hr className="mb-1 mt-2" />
                    <div className="flex h-full flex-col gap-1.5 py-1">
                      <p className="text-xs text-gray-500">{school.address}</p>
                      <p className="text-xs text-gray-500">{school.phone}</p>
                      <p className="text-xs text-gray-500">
                        Grades: {school.grades}
                      </p>
                      <p className="text-xs text-gray-500">
                        Before/After Programs: {school.beforeAfterPrograms}
                      </p>
                      <p className="text-xs text-gray-500">
                        French Imersion: {school.frenchImersion}
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-0">
                    <Ranking ranking={school.fraserRanking} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Schools;
