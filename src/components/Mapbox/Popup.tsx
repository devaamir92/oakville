'use client';

import React from 'react';
import { Content, Dialog, Overlay, Portal, Root } from '@radix-ui/react-dialog';

import Card from './card';

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
            className="model fixed left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-4  focus:outline-none"
          >
            <Card
              key={item.id}
              bathrooms={item.Bath_tot ?? 0}
              bedrooms={
                Number(
                  Number(item.Br) + Number(item.Rooms_plus)
                ).toLocaleString() ?? '0'
              }
              imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
              location={item.Addr}
              price={Number(item.Lp_dol).toLocaleString() ?? '0'}
              parking={item.Park_spcs ?? '0'}
              slug={item.Slug}
            />
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default Modal;
