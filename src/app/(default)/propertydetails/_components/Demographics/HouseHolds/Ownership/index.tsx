import React from 'react';
import { TbHome, TbHomeDollar } from 'react-icons/tb';

interface OwnershipProps {
  data: { name: string; value: number }[];
}

const Ownership: React.FC<OwnershipProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex flex-1 flex-col items-center justify-center gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              {index === 0 ? (
                <TbHome className="text-indigo-600" size={28} />
              ) : (
                <TbHomeDollar className="text-indigo-300" size={28} />
              )}
            </div>
            <span className="text-center text-xs font-medium">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-3/5 items-center gap-2">
        <span className="text-sm">{data[0].value}%</span>
        <div className="h-2 flex-1 rounded bg-indigo-300 text-sm">
          <div
            style={{ width: `${data[0].value}%` }}
            className="flex h-2 items-center justify-between rounded-full bg-indigo-500 px-2 text-xs text-white"
          />
        </div>
        <span className="text-sm">{data[1].value}%</span>
      </div>
    </div>
  );
};

export default Ownership;
