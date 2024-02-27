'use client';

import React, { useState } from 'react';

import cn from '@utils/cn';
import { Button } from '@components/ui/Button';
import SwitchInput from '@components/ui/Switch';

// const tableData = [
//   {
//     room: 'Dining',
//     size: '12.99 X 12.01 ft',
//     features: ['Hardwood Floor', 'Pot Lights'],
//   },
//   {
//     room: 'Living',
//     size: '21.49 X 11.84 ft',
//     features: ['Hardwood Floor', 'Pot Lights', 'Gas Fireplace'],
//   },
//   {
//     room: 'Kitchen',
//     size: '12.34 X 8.99 ft',
//     features: ['Hardwood Floor', 'Breakfast Bar', 'Quartz Counter'],
//   },
//   {
//     room: 'Breakfast',
//     size: '8.99 X 8.99 ft',
//     features: ['Hardwood Floor', 'Pot Lights', 'W/O To Sunroom'],
//   },
//   {
//     room: 'Sunroom',
//     size: '31.50 X 19.09 ft',
//     features: ['Hot Tub', 'W/O To Yard'],
//   },
//   {
//     room: 'Prim Bdrm',
//     size: '14.93 X 12.01 ft',
//     features: ['Hardwood Floor', 'Gas Fireplace', '5 Pc Ensuite'],
//   },
//   {
//     room: '2nd Br',
//     size: '14.83 X 10.99 ft',
//     features: ['Hardwood Floor', 'Pot Lights'],
//   },
//   {
//     room: '3rd Br',
//     size: '15.49 X 10.83 ft',
//     features: ['Hardwood Floor', 'Pot Lights', '4 Pc Ensuite'],
//   },
//   {
//     room: 'Loft',
//     size: '14.01 X 11.15 ft',
//     features: ['Hardwood Floor', 'Pot Lights', 'Open Concept'],
//   },
//   {
//     room: 'Rec',
//     size: '37.83 X 21.65 ft',
//     features: ['Gas Fireplace', 'Pot Lights'],
//   },
//   {
//     room: 'Br',
//     size: '20.57 X 13.85 ft',
//     features: ['Broadloom', 'Pot Lights'],
//   },
//   {
//     room: '4th Br',
//     size: '14.17 X 10.24 ft',
//     features: ['Broadloom', 'Pot Lights'],
//   },
// ];

interface Props {
  data: any;
}
const Rooms: React.FC<Props> = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const [checked, setChecked] = useState(true);

  const TableData = [];

  for (let index = 1; index <= 12; index += 1) {
    const room = data[`Rm${index}_out`];
    if (room !== '') {
      TableData.push({
        key: index + 1,
        Room: room,
        Dimensions: [
          data[`Rm${index}_len`] || 0.0,
          data[`Rm${index}_wth`] || 0.0,
        ],
        Features: [
          data[`Rm${index}_dc1_out`],
          data[`Rm${index}_dc2_out`],
          data[`Rm${index}_dc3_out`],
        ],
      });
    }
  }

  const handlechecked = (e: boolean) => {
    setChecked(e);
  };

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
                  <SwitchInput onChange={handlechecked} checked={checked} />
                </div>
              </th>
              <th className="px-4 py-2 text-left">Features</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {TableData.map((room, j) => (
              <tr
                key={room.key}
                className={cn(
                  'w-full',
                  j % 2 === 0 ? 'bg-primary-100' : 'bg-white'
                )}
              >
                <td className="min-w-32 px-4 py-2">{room.Room}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-between gap-1">
                    <span>
                      {checked
                        ? `${room.Dimensions[0]} X ${room.Dimensions[1]} m`
                        : `${(room.Dimensions[0] * 3.28084).toFixed(2)} X ${(
                            room.Dimensions[1] * 3.28084
                          ).toFixed(2)} ft`}
                    </span>
                  </div>
                </td>
                <td className="flex min-w-96 px-4 py-2">
                  <ul className="flex gap-2">
                    {room.Features.map(feature => (
                      <li
                        key={feature}
                        className=" rounded bg-tertiary-400 px-1.5 text-white"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
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
        <span>Broker: {data.Rltr}</span>
        <span>MLS®#: {data.Ml_num}</span>
      </div>
    </div>
  );
};

export default Rooms;
