'use client';

import React, { useState } from 'react';
import {
  Close,
  Content,
  Dialog,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import { FaTimes } from 'react-icons/fa';

import { Button } from '@components/ui/Button';
import cn from '@utils/cn';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  className,
  size = 'sm',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Root>
        <Trigger asChild>
          <button type="button" className={className}>
            {title}
          </button>
        </Trigger>
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
                className="absolute right-2  top-2 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-gray-500 hover:bg-primary-200 focus:outline-none"
                aria-label="Close"
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

export default Modal;
