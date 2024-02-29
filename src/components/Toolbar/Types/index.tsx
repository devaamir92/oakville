'use client';

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import cn from '@utils/cn';

interface Props {
  items: {
    id: number;
    label: string;
    value: string;
  }[];
}

const CheckboxItem = ({
  item,
  isChecked,
  onToggleCheckbox,
}: {
  item: { id: number; label: string; value: string };
  isChecked: boolean;
  onToggleCheckbox: (id: number, checked: boolean) => void;
}) => {
  return (
    <li key={item.label}>
      <label
        htmlFor={item.label}
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
          id={item.label}
          className="hidden"
          value={item.value}
          checked={isChecked}
          onChange={() => onToggleCheckbox(item.id, !isChecked)}
        />
        {item.label}
      </label>
    </li>
  );
};

const Types: React.FC<Props> = ({ items }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [checkedItems, setCheckedItems] = useState<any>(
    items
      .map(item =>
        searchParams.getAll('type').includes(item.value) ? item.id : null
      )
      .filter(item => item !== null)
  );

  const handleSetParms = (id: any) => {
    const params = new URLSearchParams(searchParams.toString());

    const selectedType = items.find(type => type.id === id);

    if (selectedType) {
      params.append('type', selectedType.value);
    }

    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleRemoveParms = (id: any) => {
    const params = new URLSearchParams(searchParams.toString());

    const selectedType = items.find(type => type.id === id);

    if (selectedType) {
      params.delete('type', selectedType.value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleToggleCheckbox = (id: number, checked: boolean) => {
    if (checked) {
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, id]);
      handleSetParms(id);
    } else {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== id)
      );
      handleRemoveParms(id);
    }
  };

  return (
    <ul className="flex flex-col gap-3">
      {items.map(item => (
        <CheckboxItem
          key={item.id}
          item={item}
          isChecked={checkedItems.includes(item.id)}
          onToggleCheckbox={handleToggleCheckbox}
        />
      ))}
    </ul>
  );
};

export default Types;
