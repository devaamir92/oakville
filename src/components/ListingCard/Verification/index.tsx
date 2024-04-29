'use client';

import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { Button } from '@components/ui/Button';
import Modal from '@components/ui/Modal';
import { useLayout } from '@context/LayoutContext';
import { Input } from '@components/ui/Input';
import { updateUser } from '@lib/api/auth/updateUser';
import { apiClient } from '@lib/apiclient';
import { httpClient } from '@lib/httpclient';

interface Props {
  session?: any;
}

const Verification: React.FC<Props> = ({ session }) => {
  const { verify, setVerify } = useLayout();
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<any>('');

  const handleVerify = async () => {
    const payload = {
      otp: Number(otp),
    };
    try {
      const res = await apiClient.post('/api/v1/auth/verify-otp', payload);
      if (res.status === 201) {
        toast.success('Your email has been successfully verified');
        setError('');
        setOtp('');
        await updateUser();
        setVerify(false);
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
    try {
      const res: any = await httpClient.get('/api/v1/auth/send-otp');
      if (res.statusCode === 200) {
        toast.success('Verification code resent. Please check your email.');
      }
      if (res.statusCode === 404) {
        setError('Invalid OTP');
      }
      if (res.statusCode === 400) {
        setError('OTP must be a number');
      }
      if (res.statusCode === 429) {
        setError('You have reached the maximum number of attempts');
      }
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <Modal
      show={verify}
      OnClose={() => {
        setVerify(false);
        setError('');
        setOtp('');
      }}
      title="Verification Required"
      className="h-9 rounded bg-white px-2 text-base font-medium text-primary-500 transition-all duration-200 ease-in-out hover:bg-primary-100"
    >
      <div>
        <div className="mx-auto flex flex-col items-center gap-2 py-5">
          <h4 className="text-2xl font-medium">OTP Verification</h4>
          <div className=" flex flex-col items-center gap-1 text-sm">
            <p className="font-medium">
              We sent you a code to verify your email
            </p>
            <p className="text-gray-500">{session?.user?.email}</p>
          </div>
        </div>
        {error && (
          <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
            <ul className="ml-5 list-disc text-red-500">
              <li className="py-2">{error}</li>
            </ul>
          </div>
        )}

        <form className="mt-2 flex flex-col gap-5">
          <Input
            id="code"
            type="number"
            value={otp}
            placeholder="Verification Code"
            onChange={event => setOtp(event.target.value)}
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
    </Modal>
  );
};

export default Verification;
