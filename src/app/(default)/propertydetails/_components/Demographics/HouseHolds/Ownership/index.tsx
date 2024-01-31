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
            <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
              {index === 0 ? (
                <TbHome className="text-[#114B5F]" size={28} />
              ) : (
                <TbHomeDollar className="text-[#70939f]" size={28} />
              )}
            </div>
            <span className="text-center text-xs font-medium">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-3/5 items-center gap-2">
        <span className="text-sm">{data[0].value}%</span>
        <div className="h-2 flex-1 rounded bg-[#70939f] text-sm">
          <div
            style={{ width: `${data[0].value}%` }}
            className="flex h-2 items-center justify-between rounded-full bg-[#114B5F] px-2 text-xs text-white"
          />
        </div>
        <span className="text-sm">{data[1].value}%</span>
      </div>
    </div>
  );
};

export default Ownership;
