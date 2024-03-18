'use client';

import React from 'react';
import { Content, Dialog, Overlay, Portal, Root } from '@radix-ui/react-dialog';

interface PopupProps {
  item: any;
  show: boolean;
  handleModalClose: () => void;
}

const Modal: React.FC<PopupProps> = ({ item, show, handleModalClose }) => {
  return (
    <Dialog>
      <Root open={show} onOpenChange={handleModalClose}>
        <Portal>
          <Overlay className="fixed inset-0 bg-black opacity-20" />

          <Content
            onEscapeKeyDown={handleModalClose}
            className="model fixed left-1/2 top-1/2 z-[3] w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-4  focus:outline-none"
          >
            {item && (
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                {item.phone && <p className="text-sm">{item.phone}</p>}
                <p className="text-sm">{item.address}</p>
                <button
                  type="button"
                  className="rounded-md bg-primary-500 p-2 text-center text-sm font-normal text-white transition-all duration-100"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            )}
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default Modal;
