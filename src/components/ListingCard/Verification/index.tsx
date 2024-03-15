'use client';

import React from 'react';

import { Button } from '@components/ui/Button';
import Modal from '@components/ui/Modal';
import { useLayout } from '@context/LayoutContext';

function Verification() {
  const { verify, setVerify } = useLayout();
  const handleValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Verification Required');
  };
  return (
    <Modal
      show={verify}
      OnClose={() => setVerify(false)}
      title="Verification Required"
      className="h-9 rounded bg-white px-2 text-base font-medium text-primary-500 transition-all duration-200 ease-in-out hover:bg-primary-100"
    >
      <form action="" className="flex flex-col gap-4">
        <h2 className="text-center text-xl font-semibold">
          Verify your account
        </h2>
        <p className="text-center text-sm text-gray-600">
          We have sent a verification link to your email. Please verify your
          account to continue.
        </p>
        <Button type="submit" className="w-full" onClick={handleValidation}>
          Resend verification link
        </Button>
      </form>
    </Modal>
  );
}

export default Verification;
