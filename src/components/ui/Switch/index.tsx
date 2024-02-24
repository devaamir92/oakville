'use client';

import React from 'react';

import { Root, Switch, Thumb } from '@radix-ui/react-switch';

interface SwitchInputProps {
  checked: boolean;
  onChange: (e: boolean) => void;
}

const SwitchInput: React.FC<SwitchInputProps> = ({ checked, onChange }) => {
  return (
    <div>
      <form>
        <div className="flex items-center">
          <Switch asChild>
            <Root
              checked={checked}
              onCheckedChange={e => onChange(e)}
              className="relative  h-[20px] w-[65px] cursor-default rounded-full border-none  bg-[#ccc]   focus:outline-none   data-[state=checked]:bg-primary-400"
              style={{
                WebkitTapHighlightColor: 'rgba(0,0,0,0)',
              }}
            >
              {checked ? (
                <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-xs text-gray-700">
                  Meter
                </span>
              ) : (
                <span className="right-1.2 absolute top-1/2 -translate-y-1/2 text-xs">
                  Feet
                </span>
              )}

              <Thumb className="block h-[16px] w-[18px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform focus:outline-none data-[state=checked]:translate-x-[44px]" />
            </Root>
          </Switch>
        </div>
      </form>
    </div>
  );
};

export default SwitchInput;
