'use client';

import React from 'react';
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

import cn from '@utils/cn';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  show: boolean;
  OnClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  className,
  size = 'sm',
  icon,
  show,
  OnClose,
}) => {
  return (
    <Dialog open={show} onOpenChange={OnClose}>
      <Root>
        <Trigger asChild>
          <button
            type="button"
            className={cn(className, 'flex items-center gap-2')}
          >
            {icon}
            {title}
          </button>
        </Trigger>
        <Portal>
          <Overlay className="fixed inset-0 bg-black opacity-20" />
          <Content
            onEscapeKeyDown={OnClose}
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
                onClick={OnClose}
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
