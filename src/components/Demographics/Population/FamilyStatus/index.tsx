import Image from 'next/image';
import React from 'react';

interface Props {
  data: { name: string; value: number }[];
}

function FamilyStatus({ data }: Props) {
  return (
    <div className="flex flex-1 flex-col border-gray-300 px-4">
      <p className="text-md mb-4 font-medium">Family Status</p>
      <div className="flex items-center justify-center gap-32">
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
            <Image
              src="/images/svg/family.svg"
              alt="Parents With Children"
              width={28}
              height={28}
            />
          </div>
          <span className="max-w-20 text-center text-xs font-medium">
            {'>'} {data[0].name} {data[0].value}%
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
              <Image
                src="/images/svg/SingleManWithChildren.svg"
                alt="Single Parent With Children"
                width={20}
                height={20}
              />
            </div>
            <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
              <Image
                src="/images/svg/SingleWomenWithChildren.svg"
                alt="Parents With Children"
                width={20}
                height={20}
              />
            </div>
          </div>
          <span className="max-w-20 text-center text-xs font-medium">
            {'>'} {data[1].name} {data[1].value}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default FamilyStatus;
