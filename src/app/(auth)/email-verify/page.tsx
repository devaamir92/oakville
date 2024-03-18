'use client';

import React, { useEffect, useState } from 'react';

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
        <div className="flex  min-w-60 flex-col gap-4 rounded bg-green-100 p-4">
          <h1 className="text-center text-xl">Email verified successfully</h1>
          <p className="text-center text-gray-500">
            You can now login to your account
          </p>
        </div>
      )}
      {response?.statusCode === 400 && (
        <div className="flex  min-w-60 flex-col gap-4 rounded bg-red-100 p-4">
          <h1 className="text-center text-xl">Link Expired</h1>
          <p className="text-center text-gray-500">
            Please request a new verification link
          </p>
        </div>
      )}
      {response?.statusCode === 500 && (
        <div className="flex  min-w-60 flex-col gap-4 rounded bg-red-100 p-4">
          <h1 className="text-center text-xl">Server Error</h1>
          <p className="text-center text-gray-500">
            Something went wrong. Please try again later
          </p>
        </div>
      )}
    </div>
  );
}

export default VerPage;
