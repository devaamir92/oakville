'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6';

import cn from '@utils/cn';
import { Button } from '@components/ui/Button';

interface FloorPlanItem {
  title: string;
  area: number;
  downloadLink: string;
}

const floorPlans: FloorPlanItem[] = [
  {
    title: 'THE QUIN (Ground Floor)',
    area: 2557,
    downloadLink: '#',
  },
  {
    title: 'THE QUIN (Basement)',
    area: 2557,
    downloadLink: '#',
  },
  {
    title: 'THE QUIN(Loft)',
    area: 2557,
    downloadLink: '#',
  },
  {
    title: 'THE WEST WIND (Ground Floor)',
    area: 2186,
    downloadLink: '#',
  },
  {
    title: 'THE WEST WIND (Basement)',
    area: 2186,
    downloadLink: '#',
  },
  {
    title: 'THE WEST WIND (Loft)',
    area: 2186,
    downloadLink: '#',
  },
  {
    title: 'THE HURON (Ground Floor)',
    area: 3051,
    downloadLink: '#',
  },
  {
    title: 'THE HURON (Basement)',
    area: 3051,
    downloadLink: '#',
  },
  {
    title: 'THE HURON (Loft)',
    area: 3051,
    downloadLink: '#',
  },
  {
    title: 'THE SUNSET (Ground Floor)',
    area: 3321,
    downloadLink: '#',
  },

  {
    title: 'THE VISTA (Penthouse)',
    area: 4200,
    downloadLink: '#',
  },
];

const FloorPlanTable: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <h3 className="flex items-center gap-1 text-lg font-medium text-gray-800 2xl:text-xl">
        Floor Plan
      </h3>
      <div
        className={cn(
          'flex-1 overflow-x-auto',
          showMore ? 'max-h-full overflow-y-auto' : 'max-h-36 overflow-y-hidden'
        )}
      >
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm">Title</th>
              <th className="px-4 py-2 text-left text-sm">Area (Sqft)</th>
              <th className="px-4 py-2 text-left text-sm">Download</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {floorPlans.map((floorPlan, index) => (
              <tr
                key={floorPlan.title}
                className={cn(
                  'w-full',
                  index % 2 === 0 ? 'bg-primary-100' : 'bg-white',
                  'text-sm'
                )}
              >
                <td className="min-w-64 px-4 py-2">{floorPlan.title}</td>
                <td className="min-w-28 px-4 py-2">
                  {floorPlan.area} <small>sq ft</small>
                </td>
                <td className="px-4 py-2">
                  <Link
                    href={floorPlan.downloadLink}
                    aria-label="Download"
                    className="underline"
                  >
                    <FaDownload className="text-primary-400" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        className="w-fit p-0 text-blue-500 hover:no-underline"
        variant="link"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'Show all'}
      </Button>
    </div>
  );
};

export default FloorPlanTable;
