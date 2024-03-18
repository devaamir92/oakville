'use client';

import React, { useState } from 'react';

import { Button } from '@components/ui/Button';
import Modal from '@components/ui/Modal';
import { useLayout } from '@context/LayoutContext';
import { sendEmailVerification } from '@lib/api/auth/sendEmailVerification';

function Verification() {
  const { verify, setVerify } = useLayout();
  const [sussess, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const handleValidation = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await sendEmailVerification();
      if (res.status === 200) {
        setSuccess(true);
        setError('');
      }
      if (res.status === 500) {
        setError('Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setError(err.message);
    }
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
        {sussess && (
          <p className="text-center text-sm text-primary-500">
            Verification link has been sent to your email
          </p>
        )}
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        {!sussess && (
          <Button type="submit" className="w-full" onClick={handleValidation}>
            Resend verification link
          </Button>
        )}
        {sussess && (
          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              setVerify(false);
              setSuccess(false);
              setError('');
            }}
          >
            Close
          </Button>
        )}
      </form>
    </Modal>
  );
}

export default Verification;
