'use client';

import React, { useState } from 'react';

import cn from '@utils/cn';

interface Props {
  items: string[];
}

const CheckboxItem = ({ item }: { item: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li key={item}>
      <label
        htmlFor={item}
        className={cn(
          'flex cursor-pointer rounded px-3 py-1.5 text-sm outline outline-1 outline-primary-500 transition-colors duration-200 ease-in-out',
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

const Types: React.FC<Props> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map(item => (
        <CheckboxItem key={item} item={item} />
      ))}
    </ul>
  );
};

export default Types;
