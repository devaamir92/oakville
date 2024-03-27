'use client';

import React, { useEffect, useState } from 'react';
import { Content, Dialog, Overlay, Portal, Root } from '@radix-ui/react-dialog';

import getSlug from '@utils/getSlug';

import Card from '@components/ListingCard';
import { getSession } from '@lib/getsession';
import { useLayout } from '@context/LayoutContext';
import getBedroomString from '@utils/getbedroomString';

interface PopupProps {
  item: any;
  show: boolean;
  handleModalClose: () => void;
}

const Modal: React.FC<PopupProps> = ({ item, show, handleModalClose }) => {
  const [session, setSession] = useState(null);
  const { login } = useLayout();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, [login]);
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
              <Card
                session={session}
                mls={item.Ml_num}
                key={item.id}
                bathrooms={item.Bath_tot ?? 0}
                bedrooms={getBedroomString(
                  Number(item.Br),
                  Number(item.Br_plus)
                )}
                imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
                location={item.Addr}
                price={Number(item.Lp_dol).toLocaleString() ?? '0'}
                parking={item.Park_spcs ?? '0'}
                slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
                isLocked={item.Is_locked}
                tssql={item.Timestamp_sql}
              />
            )}
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default Modal;
