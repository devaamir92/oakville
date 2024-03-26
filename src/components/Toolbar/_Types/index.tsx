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
  name?: string;
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
          'flex cursor-pointer rounded px-3 py-1.5 text-sm text-white  transition-colors ease-in-out',
          {
            ' hover:text-secondary-600 hover:outline hover:outline-1':
              !isChecked,
            'text-secondary-600 outline outline-1  outline-secondary-600':
              isChecked,
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

const Types: React.FC<Props> = ({ items, name = 'type' }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [checkedItems, setCheckedItems] = useState<any>(
    items
      .map(item =>
        searchParams.getAll(name).includes(item.value) ? item.id : null
      )
      .filter(item => item !== null)
  );

  const handleSetParms = (id: any) => {
    const params = new URLSearchParams(searchParams.toString());

    if (id === 0) {
      params.delete(name);
      replace(`${pathname}?${params.toString()}`);
      setCheckedItems([]);
      return;
    }

    const selectedType = items.find(type => type.id === id);

    if (selectedType) {
      params.append(name, selectedType.value);
    }

    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleRemoveParms = (id: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === 0) {
      params.delete(name);
      replace(`${pathname}?${params.toString()}`);
      setCheckedItems([]);
      return;
    }
    const selectedType = items.find(type => type.id === id);

    if (selectedType) {
      params.delete(name, selectedType.value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleToggleCheckbox = (id: number, checked: boolean) => {
    if (checked) {
      setCheckedItems((prevCheckedItems: any) => [...prevCheckedItems, id]);
      handleSetParms(id);
    } else {
      setCheckedItems((prevCheckedItems: any) =>
        prevCheckedItems.filter((item: any) => item !== id)
      );
      handleRemoveParms(id);
    }
  };

  return (
    <ul className="flex gap-3">
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
