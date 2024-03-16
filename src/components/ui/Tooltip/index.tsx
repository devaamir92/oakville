'use client';

import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import '@styles/Tooltip.css';
import { BsExclamationCircle } from 'react-icons/bs';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const TooltipLogin = ({ children, title }: Props) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            className="z-20 !w-full !rounded-lg border bg-white"
            sideOffset={5}
          >
            <div className="flex w-full max-w-xs items-center gap-2 p-2">
              <div>
                <BsExclamationCircle size={24} className="text-primary-400" />
              </div>
              <div className="flex-1">
                <p className="text-justify text-xs text-gray-600">{title}</p>
              </div>
            </div>
            <Tooltip.Arrow className="TooltipArrow " />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipLogin;
