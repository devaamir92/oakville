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
  title?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  show?: boolean;
  OnClose?: () => void;
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
    <Dialog>
      <Root open={show} onOpenChange={OnClose}>
        <Trigger asChild>
          <button
            type="button"
            onClick={OnClose}
            className={cn(className, 'flex items-center gap-2')}
          >
            {icon}
            {title}
          </button>
        </Trigger>
        <Portal>
          <Overlay className="DialogOverlay" />
          <Content
            onEscapeKeyDown={OnClose}
            className={cn(
              'DialogContent',
              size === 'sm' && 'w-[380px]',
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
