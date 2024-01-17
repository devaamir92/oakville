'use client';

import React, { useState } from 'react';
import { Input } from '@components/ui/Input';

import RangeSlider from './RangeSlider';

function Price() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9000000);

  const handleMinChange = (event: any) => {
    setMin(Number(event.target.value));
  };

  const handleMaxChange = (event: any) => {
    setMax(Number(event.target.value));
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
          max={9000000}
        />
      </div>
      <div className="px-2">
        <RangeSlider min={0} max={9000000} setMax={setMax} setMin={setMin} />
      </div>
    </div>
  );
}

export default Price;
