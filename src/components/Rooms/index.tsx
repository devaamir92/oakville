'use client';

import React, { useState } from 'react';

import cn from '@utils/cn';
import { Button } from '@components/ui/Button';
import SwitchInput from '@components/ui/Switch';

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
        {TableData.length === 0 && (
          <div className="flex h-16 items-center justify-center rounded border">
            <p className="text-sm text-gray-500">No rooms found</p>
          </div>
        )}
        {TableData.length > 0 && (
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
                    <ul className="flex flex-wrap gap-2">
                      {room.Features.map(
                        feature =>
                          feature !== '' && (
                            <li
                              key={feature}
                              className="text-nowrap rounded bg-tertiary-400 px-1.5 text-white"
                            >
                              {feature}
                            </li>
                          )
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
