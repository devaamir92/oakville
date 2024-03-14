'use client';

import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import '@styles/Tooltip.css';
import { BsExclamationCircle } from 'react-icons/bs';

interface Props {
  children: React.ReactNode;
}

const TooltipLogin = ({ children }: Props) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            className="TooltipContent z-20 !rounded-lg border"
            sideOffset={5}
          >
            <div className="flex max-w-xs items-center gap-4 p-2">
              <div>
                <BsExclamationCircle size={24} className="text-primary-400" />
              </div>
              <p className="w-full text-wrap text-justify text-xs text-gray-600">
                Real estate boards require you to create an account to view MLS
                &quot;VOW&quot; ( Virtual Office Website) listings.
              </p>
            </div>
            <Tooltip.Arrow className="TooltipArrow " />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipLogin;
