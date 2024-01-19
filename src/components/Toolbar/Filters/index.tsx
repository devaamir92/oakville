'use client';

import React, { useState } from 'react';

import cn from '@utils/cn';

interface Props {
  data: {
    [key: string]: {
      name: string;
      value: string;
    }[];
  };
}

const CheckboxItem = ({ item }: { item: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li key={item}>
      <label
        htmlFor={item}
        className={cn(
          'flex cursor-pointer rounded px-3 py-1 text-sm outline outline-1 outline-primary-500 transition-colors duration-200 ease-in-out',
          {
            'hover:bg-primary-200': !isChecked,
            'bg-primary-500 text-white': isChecked,
          }
        )}
      >
        <input
          type="checkbox"
          id={item}
          className="hidden"
          value={item}
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
        />
        {item}
      </label>
    </li>
  );
};

const Filters: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex max-w-[378px] flex-col gap-4">
      {Object.keys(data).map(type => (
        <div key={type}>
          <h3 className="mb-2 text-sm font-semibold capitalize text-gray-500">
            {type}
          </h3>
          <ul className="flex flex-wrap justify-between gap-3">
            {data[type].map(item => (
              <CheckboxItem key={item.name} item={item.name} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
