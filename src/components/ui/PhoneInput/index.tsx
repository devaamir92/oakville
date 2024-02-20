'use client';

import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface Props {
  onChange: (value: string) => void;
}

const PhoneInputComponent: React.FC<Props> = ({ onChange }) => {
  return (
    <PhoneInput
      id="phone"
      placeholder="Enter Phone Number"
      defaultCountry="CA"
      onChange={onChange}
      className="h-[40px] rounded border border-slate-300 bg-transparent px-2 py-1 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
      required
    />
  );
};

export default PhoneInputComponent;
