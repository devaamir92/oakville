'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa6';

import cn from '@utils/cn';
import { Button } from '@components/ui/Button';

interface FloorPlanItem {
  data: any;
}

const FloorPlanTable: React.FC<FloorPlanItem> = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  console.log(data);

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
            {data.map((floorPlan: any, index: number) => (
              <tr
                key={floorPlan.title}
                className={cn(
                  'w-full',
                  index % 2 === 0 ? 'bg-primary-100' : 'bg-white',
                  'text-sm'
                )}
              >
                <td className="min-w-64 px-4 py-2">
                  {floorPlan.title} ({floorPlan.area})
                </td>
                <td className="min-w-28 px-4 py-2">
                  {floorPlan.area} <small>sq ft</small>
                </td>
                <td className="px-4 py-2">
                  <Link
                    href={floorPlan?.title}
                    download={`https://api.preserveoakville.ca/public/gallery/${floorPlan?.name}/${floorPlan?.image}`}
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
      {data.length > 3 && (
        <Button
          onClick={() => setShowMore(!showMore)}
          className="w-fit p-0 text-blue-500 hover:no-underline"
          variant="link"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

export default FloorPlanTable;
