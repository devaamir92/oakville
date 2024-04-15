'use client';

import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  Close,
  Content,
  Dialog,
  Overlay,
  Portal,
  Root,
} from '@radix-ui/react-dialog';

import getSlug from '@utils/getSlug';
import getBedroomString from '@utils/getbedroomString';

import Card from '@components/ListingCard';
import { getSession } from '@lib/getsession';
import { useLayout } from '@context/LayoutContext';

interface PopupProps {
  items: any;
  show: boolean;
  handleModalClose: () => void;
}

const Modal: React.FC<PopupProps> = ({ items, show, handleModalClose }) => {
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
            className="model fixed left-1/2 top-1/2 z-[3] w-96 -translate-x-1/2 -translate-y-1/2 rounded bg-white px-4 pb-4 pt-2  focus:outline-none"
          >
            <div className="flex flex-col gap-2">
              <Close asChild className="self-end">
                <button
                  type="button"
                  className="inline-flex size-6 appearance-none items-center justify-center rounded-full text-gray-500 hover:bg-primary-200 focus:outline-none"
                  aria-label="Close"
                  onClick={handleModalClose}
                >
                  <FaTimes />
                </button>
              </Close>
              <div className="h-80 w-full overflow-y-auto">
                <div className="flex flex-col gap-4">
                  {items &&
                    items.map((item: any) => (
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
                        slug={getSlug(item.Community, item.Slug)}
                        isLocked={item.Status === 'U' ? true : item.Is_locked}
                        tssql={
                          item.Status === 'U' ? item.Cd : item.Timestamp_sql
                        }
                        dom={item.Dom}
                        status={item.Status}
                      />
                    ))}
                </div>
              </div>
            </div>
          </Content>
        </Portal>
      </Root>
    </Dialog>
  );
};

export default Modal;
