import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface Props {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}

const RangeSlider: React.FC<Props> = ({ min, max, setMin, setMax }) => {
  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setMin(value[0]);
      setMax(value[1]);
    }
  };

  return (
    <Slider
      range
      allowCross={false}
      min={min}
      max={max}
      defaultValue={[min, max]}
      onChange={handleSliderChange}
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
