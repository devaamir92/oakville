import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface Props {
  min: number;
  max: number;
  type: string;
  onchangeComplete: (value: number | number[]) => void;
}

const RangeSlider: React.FC<Props> = ({ min, max, type, onchangeComplete }) => {
  return (
    <Slider
      range
      allowCross={false}
      min={0}
      max={type === 'rent' ? 10000 : 25000000}
      step={type === 'rent' ? 100 : 10000}
      value={[min, max]}
      defaultValue={[min, max]}
      onChange={onchangeComplete}
      trackStyle={{ backgroundColor: '#6B8656', height: 5 }}
      handleStyle={{
        borderColor: '#6B8656',
        height: 20,
        top: 2.5,
        width: 20,
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.13)',
      }}
      railStyle={{ backgroundColor: '#e9e9e9', height: 5 }}
    />
  );
};

export default RangeSlider;
