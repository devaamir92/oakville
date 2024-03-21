'use client';

import React, { useEffect, useState } from 'react';

import { FaCheck, FaExclamation } from 'react-icons/fa';
import Link from 'next/link';
import { TbClockX } from 'react-icons/tb';

import { verifyEmailAddress } from '@lib/api/auth/emailVerification';

function VerPage(searchParams: any) {
  const [response, setResponse] = useState<any>();

  const key = searchParams?.searchParams.key;

  useEffect(() => {
    const validate = async () => {
      try {
        const res = await verifyEmailAddress(key);
        setResponse(res);
      } catch (err: any) {
        setResponse(err.message);
      }
    };
    if (key) {
      validate();
    }
  }, [key]);

  return (
    <div className="flex h-[calc(100vh-70px)] items-center justify-center">
      {!response && <p className="text-xl">Verifying your email...</p>}
      {response?.success && (
        <div className=" flex flex-col items-center justify-center gap-4">
          <div className="absolute -top-0 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-green-500 bg-green-500">
            <FaCheck className="text-white" size={24} />
          </div>
          <h1 className="text-center text-xl">Email Verified</h1>
          <p className="-mt-2 text-sm">
            Your email address was successfully verified
          </p>
          <Link
            href="/"
            className="flex h-9 items-center justify-center  rounded bg-primary-500 px-4 py-1 text-sm text-white transition-all duration-200 ease-in-out hover:bg-primary-600"
          >
            Back to Home
          </Link>
        </div>
      )}
      {response?.statusCode === 400 && (
        <div className=" flex flex-col items-center justify-center gap-4">
          <div className="absolute -top-0 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-red-500 bg-red-500">
            <TbClockX className="text-white" size={30} />
          </div>
          <h1 className="text-center text-xl">Link Expired</h1>
          <p className="-mt-2 text-sm">
            Please request a new verification link
          </p>
        </div>
      )}
      {response?.statusCode === 500 && (
        <div className=" flex flex-col items-center justify-center gap-4">
          <div className="absolute -top-0 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-red-500 bg-red-500">
            <FaExclamation className="text-white" size={24} />
          </div>
          <h1 className="text-center text-xl">Server Error</h1>
          <p className="-mt-2 text-sm">
            Something went wrong. Please try again later
          </p>
        </div>
      )}
    </div>
  );
}

export default VerPage;
