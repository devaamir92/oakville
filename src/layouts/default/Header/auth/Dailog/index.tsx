'use client';

import React from 'react';
import {
  Close,
  Content,
  Dialog,
  Overlay,
  Portal,
  Root,
} from '@radix-ui/react-dialog';
import { FaTimes } from 'react-icons/fa';

import cn from '@utils/cn';
import { useLayout } from '@context/LayoutContext';

interface DialogBoxProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  show: boolean;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  children,
  size = 'sm',
  show,
}) => {
  const { toggle } = useLayout();

  return (
    <Dialog>
      <Root open={show}>
        <Portal>
          <Overlay className="fixed inset-0 bg-black opacity-20" />
          <Content
            className={cn(
              'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 focus:outline-none',
              size === 'sm' && 'w-[400px]',
              size === 'md' && 'w-[600px]',
              size === 'lg' && 'w-[800px]'
            )}
          >
            <Close asChild>
              <button
                type="button"
                className="absolute right-2  top-2 inline-flex size-6 appearance-none items-center justify-center rounded-full text-gray-500 hover:bg-primary-200 focus:outline-none"
                aria-label="Close"
                onClick={() => {
                  toggle();
                }}
              >
                <FaTimes />
              </button>
            </Close>
            {children}
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default DialogBox;
