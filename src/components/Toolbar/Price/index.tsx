'use client';

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Input } from '@components/ui/Input';

import RangeSlider from './RangeSlider';

function Price() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [min, setMin] = useState(Number(searchParams.get('min') || 0));
  const [max, setMax] = useState(Number(searchParams.get('max')) || 25000000);

  const handlePriceChange = (e: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('min', String(e[0]));
    params.set('max', String(e[1]));
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleMinChange = (event: any) => {
    setMin(Number(event.target.value));
    handlePriceChange([Number(event.target.value), max]);
  };

  const handleMaxChange = (event: any) => {
    setMax(Number(event.target.value));
    handlePriceChange([min, Number(event.target.value)]);
  };

  const onchangeComplete = (e: any) => {
    setMin(e[0]);
    setMax(e[1]);
    handlePriceChange(e);
  };

  return (
    <div className="flex max-w-xs flex-col gap-4">
      <div className="flex items-center gap-2">
        <Input
          type="number"
          className="h-[32px]"
          onChange={handleMinChange}
          value={min}
          min={0}
        />
        <span className="px-2 text-gray-400">-</span>
        <Input
          type="number"
          className="h-[32px]"
          onChange={handleMaxChange}
          value={max}
          max={25000000}
        />
      </div>
      <div className="px-2">
        <RangeSlider min={min} max={max} onchangeComplete={onchangeComplete} />
      </div>
    </div>
  );
}

export default Price;
