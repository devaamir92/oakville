import React from 'react';
import Link from 'next/link';
// import dynamic from 'next/dynamic';

import {
  catholicSchools,
  montessoriSchools,
  privateSchools,
  publicSchools,
} from '@data/schoolsData';

import Map from '@components/Mapbox';

// const RankingPie = dynamic(() => import('../_components/Ranking'), {
//   ssr: false,
// });

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
          <Map lat={43.487113} lng={-79.720562} zoom={12.27} />
        </div>
        <div className="flex gap-8">
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
            >
              <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
                Public
              </h3>
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
            >
              <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
                Catholic
              </h3>
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
            >
              <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
                Montessori
              </h3>
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded bg-secondary-400 px-6 py-3"
            >
              <h3 className="leading-0  font-semibold xl:text-base 2xl:text-lg">
                Private
              </h3>
            </button>
          </div>
        </div>
      </section>

      <div className="mt-4 flex flex-col justify-center gap-3">
        <h2 className="text-center text-2xl font-medium">Public Schools</h2>
        <hr />
      </div>
      <div className="grid grid-cols-2  gap-16">
        {publicSchools.map(school => (
          <div className="flex flex-col gap-4" key={school.id}>
            <p className="text-md font-medium">{school.name}</p>
            <table className="w-full">
              <tbody className="divide-y divide-gray-300 bg-white">
                <tr className="flex text-sm">
                  <td className="flex-1  py-1.5 font-medium text-gray-500">
                    Address:
                  </td>
                  <td className="flex-1  py-1.5 font-medium text-gray-700">
                    {school.address}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className="flex-1 py-1.5 font-medium text-gray-500">
                    Phone:
                  </td>
                  <td className="flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={`tel:${school.phone_number}`}
                      className="flex items-center gap-1"
                    >
                      <span>{school.phone_number}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Website:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={school.website}
                      className="flex items-center gap-1"
                    >
                      <span>{school.website}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Grades:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.grades}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Fraser Ranking Score:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.raking}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    School Year:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.school_year}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Program:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.program}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-center gap-3">
        <h2 className="text-center text-2xl font-medium">Catholic Schools</h2>
        <hr />
      </div>
      <div className="grid grid-cols-2  gap-16">
        {catholicSchools.map(school => (
          <div className="flex flex-col gap-4" key={school.id}>
            <p className="text-md font-medium">{school.name}</p>
            <table className="w-full">
              <tbody className="divide-y divide-gray-300 bg-white">
                <tr className="flex text-sm">
                  <td className="flex-1  py-1.5 font-medium text-gray-500">
                    Address:
                  </td>
                  <td className="flex-1  py-1.5 font-medium text-gray-700">
                    {school.address}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className="flex-1 py-1.5 font-medium text-gray-500">
                    Phone:
                  </td>
                  <td className="flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={`tel:${school.phone_number}`}
                      className="flex items-center gap-1"
                    >
                      <span>{school.phone_number}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Website:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={school.website}
                      className="flex items-center gap-1"
                    >
                      <span>{school.website}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Grades:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.grades}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Fraser Ranking Score:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.raking}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    School Year:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.school_year}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Program:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.program}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col justify-center gap-3">
        <h2 className="text-center text-2xl font-medium">Montessori</h2>
        <hr />
      </div>
      <div className="grid grid-cols-2  gap-16">
        {montessoriSchools.map(school => (
          <div className="flex flex-col gap-4" key={school.id}>
            <p className="text-md font-medium">{school.name}</p>
            <table className="w-full">
              <tbody className="divide-y divide-gray-300 bg-white">
                <tr className="flex text-sm">
                  <td className="flex-1  py-1.5 font-medium text-gray-500">
                    Address:
                  </td>
                  <td className="flex-1  py-1.5 font-medium text-gray-700">
                    {school.address}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className="flex-1 py-1.5 font-medium text-gray-500">
                    Phone:
                  </td>
                  <td className="flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={`tel:${school.phone_number}`}
                      className="flex items-center gap-1"
                    >
                      <span>{school.phone_number}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Website:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={school.website}
                      className="flex items-center gap-1"
                    >
                      <span>{school.website}</span>
                    </Link>
                  </td>
                </tr>

                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Program:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.program}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col justify-center gap-3">
        <h2 className="text-center text-2xl font-medium">Private Schools</h2>
        <hr />
      </div>
      <div className="grid grid-cols-2  gap-16 pb-10">
        {privateSchools.map(school => (
          <div className="flex flex-col gap-4" key={school.id}>
            <p className="text-md font-medium">{school.name}</p>
            <table className="w-full">
              <tbody className="divide-y divide-gray-300 bg-white">
                <tr className="flex text-sm">
                  <td className="flex-1  py-1.5 font-medium text-gray-500">
                    Address:
                  </td>
                  <td className="flex-1  py-1.5 font-medium text-gray-700">
                    {school.address}
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className="flex-1 py-1.5 font-medium text-gray-500">
                    Phone:
                  </td>
                  <td className="flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={`tel:${school.phone_number}`}
                      className="flex items-center gap-1"
                    >
                      <span>{school.phone_number}</span>
                    </Link>
                  </td>
                </tr>
                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Website:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    <Link
                      href={school.website}
                      className="flex items-center gap-1"
                    >
                      <span>{school.website}</span>
                    </Link>
                  </td>
                </tr>

                <tr className="flex text-sm">
                  <td className=" flex-1 py-1.5 font-medium text-gray-500">
                    Program:
                  </td>
                  <td className=" flex-1 py-1.5 font-medium text-gray-700">
                    {school.program}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}

export default page;
