'use client';

import React from 'react';

import { Switch, Root, Thumb } from '@radix-ui/react-switch';

const SwitchInput = () => (
  <form>
    <div className="flex items-center">
      <label className="leading-none text-white" htmlFor="airplane-mode" />

      <Switch id="airplane-mode">
        <Root
          className="relative  h-[22px] w-[44px] cursor-default rounded-full border-none  bg-[#ccc]   focus:outline-none   data-[state=checked]:bg-primary-400"
          style={{
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          }}
        >
          <Thumb className=" block h-[18px] w-[18px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform focus:outline-none data-[state=checked]:translate-x-[24px]" />
        </Root>
      </Switch>
    </div>
  </form>
);

export default SwitchInput;
