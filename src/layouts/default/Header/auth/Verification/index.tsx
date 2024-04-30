'use client';

import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import { apiClient } from '@lib/apiclient';
import { useLayout } from '@context/LayoutContext';
import { updateUser } from '@lib/api/auth/updateUser';
import { getSession } from '@lib/getsession';

interface VerificationProps {
  switchForm: (step: string) => void;
  setState: (state: any) => void;
  state: any;
  title?: string;
}

const Verification: React.FC<VerificationProps> = ({
  switchForm,
  setState,
  state,
  title = 'OTP Verification',
}) => {
  const [error, setError] = useState<string>('');
  const { setLogin } = useLayout();

  const handleVerify = async () => {
    const payload = {
      otp: Number(state.key),
    };
    try {
      const res = await apiClient.post('/api/v1/auth/verify-otp', payload);
      if (res.status === 201) {
        toast.success('Your email has been successfully verified');
        setError('');
        await updateUser();
        setLogin(false);
        switchForm('SIGN_IN');
      }
    } catch (err: any) {
      if (err.status === 404) {
        setError('Invalid OTP');
      }
      if (err.status === 400) {
        setError('OTP must be a number');
      }
      if (err.status === 429) {
        setError('You have reached the maximum number of attempts');
      }
    }
  };

  const handleResend = async () => {
    const session = await getSession();
    try {
      const res = await fetch(`${process.env.API_HOST}/api/v1/auth/send-otp`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      if (res.status === 200) {
        toast.success('Verification code resent. Please check your email.');
      }
      if (res.status === 429) {
        setError('You have reached the maximum number of attempts');
      }
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <div>
      <div className="mx-auto flex flex-col items-center gap-2 py-5">
        <h4 className="text-2xl font-medium">{title}</h4>
        <div className=" flex flex-col items-center gap-1 text-sm">
          <p className="font-medium">We sent you a code to verify your email</p>
          <p className="text-gray-500">Sent to {state.email}</p>
        </div>
      </div>
      {error && (
        <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
          <ul className="ml-5 list-disc text-red-500">
            <li className="py-2">{error}</li>
          </ul>
        </div>
      )}

      <form className="mt-2 flex flex-col gap-4">
        <Input
          id="code"
          type="number"
          value={state.key}
          placeholder="Verification Code"
          onChange={event => setState({ ...state, key: event.target.value })}
          required
        />
        <Button
          className="w-full"
          variant="default"
          onClick={() => handleVerify()}
        >
          Submit
        </Button>
        <p className="flex items-center justify-center gap-1 text-sm text-gray-500">
          Did&apos;t received the verification OTP?
          <button
            type="button"
            onClick={() => handleResend()}
            className=" font-semibold text-blue-500 transition-all ease-in-out hover:text-blue-700"
          >
            Resend agin
          </button>
        </p>
      </form>
    </div>
  );
};

export default Verification;
