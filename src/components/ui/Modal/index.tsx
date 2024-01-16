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

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Root>
        <Trigger asChild>
          <Button>Open</Button>
        </Trigger>
        <Portal>
          <Overlay className="fixed inset-0 bg-black opacity-20" />
          <Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 focus:outline-none">
            <Close asChild>
              <button
                type="button"
                className="absolute right-2  top-2 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-gray-500 hover:bg-primary-200 focus:outline-none"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </Close>
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default Modal;
