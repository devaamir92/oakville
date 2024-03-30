'use client';

import React from 'react';
import { FaLock } from 'react-icons/fa6';

import { Button } from '@components/ui/Button';
import { useLayout } from '@context/LayoutContext';
import cn from '@utils/cn';

interface Props {
  isLocked: boolean;
  session: any;
  Lsc: string;
}

const BlurContainer: React.FC<Props> = ({ isLocked, session, Lsc }) => {
  const { setLogin, setVerify } = useLayout();

  return (
    <div
      className={cn(
        'blurContent absolute top-0 flex size-full items-center justify-center',
        {
          hidden:
            (session && isLocked && session?.user.verified) ||
            (session && !isLocked),
        }
      )}
    >
      <div className="flex max-w-md flex-col gap-2 rounded bg-white p-4 shadow">
        {!session && (
          <>
            <div className="flex items-center gap-2 ">
              <FaLock className="" />
              <h3 className="text-center text-lg font-medium text-gray-800">
                Login Required
              </h3>
            </div>
            {Lsc === 'Sld' ? (
              <p>
                Real estate boards require you to create an account to view sold
                listing.
              </p>
            ) : (
              <p>
                Real estate boards require you to be signed in to access this
                property.
              </p>
            )}
            <p className="flex flex-wrap items-center">
              <Button
                variant="link"
                className="px-1 text-base font-bold text-primary-500 underline"
                onClick={() => setLogin(true)}
              >
                Log in
              </Button>
              to see all the details.
            </p>
          </>
        )}

        {session && isLocked && !session?.user.verified && (
          <>
            <div className="flex items-center gap-2 ">
              <FaLock />
              <h3 className="text-center text-lg font-medium text-gray-800">
                Verify your account
              </h3>
            </div>
            <p>
              We have sent a verification link to your email. Please verify your
              account to continue.
            </p>
            <p className="flex flex-wrap items-center">
              if expired or not received.
              <Button
                variant="link"
                className="px-1 text-base font-bold text-primary-500 underline"
                onClick={() => setVerify(true)}
              >
                Resend link
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlurContainer;
