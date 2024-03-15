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
  const { onClose } = useLayout();

  return (
    <Dialog>
      <Root open={show}>
        <Portal>
          <Overlay className="DialogOverlay" />
          <Content
            className={cn(
              'DialogContent',
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
                  onClose();
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
