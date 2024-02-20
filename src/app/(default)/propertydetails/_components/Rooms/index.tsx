'use client';

import React, { useState } from 'react';

import cn from '@utils/cn';
import { Button } from '@components/ui/Button';
import SwitchInput from '@components/ui/Switch';

const tableData = [
  {
    room: 'Dining',
    size: '12.99 X 12.01 ft',
    features: ['Hardwood Floor', 'Pot Lights'],
  },
  {
    room: 'Living',
    size: '21.49 X 11.84 ft',
    features: ['Hardwood Floor', 'Pot Lights', 'Gas Fireplace'],
  },
  {
    room: 'Kitchen',
    size: '12.34 X 8.99 ft',
    features: ['Hardwood Floor', 'Breakfast Bar', 'Quartz Counter'],
  },
  {
    room: 'Breakfast',
    size: '8.99 X 8.99 ft',
    features: ['Hardwood Floor', 'Pot Lights', 'W/O To Sunroom'],
  },
  {
    room: 'Sunroom',
    size: '31.50 X 19.09 ft',
    features: ['Hot Tub', 'W/O To Yard'],
  },
  {
    room: 'Prim Bdrm',
    size: '14.93 X 12.01 ft',
    features: ['Hardwood Floor', 'Gas Fireplace', '5 Pc Ensuite'],
  },
  {
    room: '2nd Br',
    size: '14.83 X 10.99 ft',
    features: ['Hardwood Floor', 'Pot Lights'],
  },
  {
    room: '3rd Br',
    size: '15.49 X 10.83 ft',
    features: ['Hardwood Floor', 'Pot Lights', '4 Pc Ensuite'],
  },
  {
    room: 'Loft',
    size: '14.01 X 11.15 ft',
    features: ['Hardwood Floor', 'Pot Lights', 'Open Concept'],
  },
  {
    room: 'Rec',
    size: '37.83 X 21.65 ft',
    features: ['Gas Fireplace', 'Pot Lights'],
  },
  {
    room: 'Br',
    size: '20.57 X 13.85 ft',
    features: ['Broadloom', 'Pot Lights'],
  },
  {
    room: '4th Br',
    size: '14.17 X 10.24 ft',
    features: ['Broadloom', 'Pot Lights'],
  },
];

function Rooms() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-md font-medium">Rooms</p>

      <div
        className={cn(
          'mt-3 flex-1 overflow-x-auto',
          showMore ? 'max-h-full overflow-y-auto' : 'max-h-36 overflow-y-hidden'
        )}
      >
        <table className="min-w-full border-gray-300 bg-white text-sm">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">
                <div className="flex items-center justify-between gap-1">
                  Dimensions
                  <SwitchInput />
                </div>
              </th>
              <th className="px-4 py-2 text-left">Features</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tableData.map((item, j) => (
              <tr
                key={item.room}
                className={cn(
                  'w-full',
                  j % 2 === 0 ? 'bg-primary-100' : 'bg-white'
                )}
              >
                <td className="min-w-32 px-4 py-2">{item.room}</td>
                <td className="px-4 py-2">{item.size}</td>
                <td className="flex min-w-96 px-4 py-2">
                  {item.features.join(', ')}
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
      <div className="flex items-center justify-between text-sm">
        <span>Broker: Coldwell Banker Marquise Realty</span>
        <span>MLS®#: R2839028</span>
      </div>
    </div>
  );
}

export default Rooms;
