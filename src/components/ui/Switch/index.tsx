'use client';

import React, { useState } from 'react';

import { Root, Switch, Thumb } from '@radix-ui/react-switch';

function SwitchInput() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <div className="flex items-center">
          <Switch asChild>
            <Root
              onCheckedChange={e => setChecked(e)}
              className="relative  h-[20px] w-[65px] cursor-default rounded-full border-none  bg-[#ccc]   focus:outline-none   data-[state=checked]:bg-primary-400"
              style={{
                WebkitTapHighlightColor: 'rgba(0,0,0,0)',
              }}
            >
              {checked ? (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white">
                  Feet
                </span>
              ) : (
                <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs">
                  Meter
                </span>
              )}

              <Thumb className="block h-[16px] w-[18px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform focus:outline-none data-[state=checked]:translate-x-[44px]" />
            </Root>
          </Switch>
        </div>
      </form>
    </div>
  );
}

export default SwitchInput;
