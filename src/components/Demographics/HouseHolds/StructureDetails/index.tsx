import React from 'react';
import { TbHome, TbHomeDollar } from 'react-icons/tb';

function StructureDetails() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex">
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
            <TbHome className="text-[#114B5F]" size={28} />
          </div>
          <span className="text-center text-xs font-medium">
            Total # of Occupied Private Dwellings
          </span>
          <span className="text-xs">3,404</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-2">
          <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
            <TbHomeDollar className="text-[#70939f]" size={28} />
          </div>
          <span className="text-center text-xs font-medium">
            Dominant Year Built
          </span>
          <span className="text-xs">2011-2016</span>
        </div>
      </div>
    </div>
  );
}

export default StructureDetails;
