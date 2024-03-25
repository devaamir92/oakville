'use client';

import React, { useEffect, useState } from 'react';

import { z } from 'zod';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';

import { sendResetLink } from '@lib/api/auth/resetLink';
import { validateHash } from '@lib/api/auth/validateHash';
import { resetPassword } from '@lib/api/auth/resetPassword';
import InputPassword from '@components/ui/Input/inputPassword';
import { useLayout } from '@context/LayoutContext';

const restPassSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

function ResetPage(searchParams: any) {
  const [error, setError] = useState('');
  const [nextStep, seNextStep] = useState(0);
  const key = searchParams?.searchParams.key;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setLogin } = useLayout();

  const handleFormAction = async (formData: FormData) => {
    const email = formData.get('email') as string;
    try {
      const res = await sendResetLink(email);
      if (res.status === 200) {
        seNextStep(1);
        formData.delete('email');
        setError('');
      }
      if (res.status === 404) {
        setError('Email not found');
      }
      if (res.status === 500) {
        setError('Server Error');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setLogin(false);
    const validate = async () => {
      try {
        const res = await validateHash(key);
        if (res.success) {
          seNextStep(3);
        }
        if (res.statusCode === 400) {
          seNextStep(4);
          setError(res.message);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };
    if (key) {
      validate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const handleResetPassword = async () => {
    const validate = restPassSchema.safeParse({ password });
    if (!validate.success) {
      setError(validate.error.errors[0].message);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await resetPassword(password, key);
      if (res.success) {
        setError('');
        seNextStep(5);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundColor: '#f3f4f6',
        height: 'calc(100vh - 70px)',
      }}
    >
      {nextStep === 0 && (
        <div className="flex max-w-3xl flex-col justify-center gap-4 rounded bg-white p-8 shadow">
          <h4 className="text-2xl text-gray-700">Reset Your Password</h4>
          <p className="text-sm text-gray-500">
            Enter the email registered with your Preserve Oakville account.
          </p>
          {error && (
            <ul className="w-full list-disc rounded border border-red-400 bg-red-50 p-2 text-sm">
              <li key={error} className="ml-4 text-red-500">
                {error}
              </li>
            </ul>
          )}
          <form className="flex flex-col gap-4" action={handleFormAction}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@abc.com"
              required
            />
            <Button variant="default" type="submit">
              Send Link
            </Button>
          </form>
        </div>
      )}
      {nextStep === 1 && (
        <div className="flex max-w-3xl flex-col justify-center gap-4 rounded bg-white p-8 shadow">
          <h4 className="text-2xl text-gray-700">Reset Your Password</h4>
          <p className="text-sm text-gray-500">
            We have sent a reset link to your email. Please check your inbox.
          </p>
          <Button
            variant="default"
            onClick={() => {
              seNextStep(0);
              setError('');
            }}
          >
            Ok
          </Button>
        </div>
      )}

      {nextStep === 3 && (
        <div className="flex max-w-3xl flex-col justify-center gap-4 rounded bg-white p-8 shadow">
          <h4 className="text-2xl text-gray-700">Reset Your Password</h4>
          <p className="text-sm text-gray-500">Enter your new password.</p>
          {error && (
            <ul className="w-full list-disc rounded border border-red-400 bg-red-50 p-2 text-sm">
              <li key={error} className="ml-4 text-red-500">
                {error}
              </li>
            </ul>
          )}
          <form
            className="flex flex-col gap-4 text-sm"
            action={handleResetPassword}
          >
            <InputPassword
              id="password"
              name="password"
              placeholder="Password"
              required
              className="text-sm"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <InputPassword
              className="text-sm"
              id="password"
              name="confpassword"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <Button variant="default" className="text-sm" type="submit">
              Reset Password
            </Button>
          </form>
        </div>
      )}

      {nextStep === 4 && (
        <div className="flex max-w-3xl flex-col justify-center gap-4 rounded bg-white p-8 shadow">
          {error && (
            <ul className="w-full list-disc rounded border border-red-400 bg-red-50 p-2 text-sm">
              <li key={error} className="ml-4 text-red-500">
                {error}
              </li>
            </ul>
          )}
        </div>
      )}
      {nextStep === 5 && (
        <div className="flex max-w-3xl flex-col justify-center gap-4 rounded bg-white p-8 shadow">
          <h4 className="text-2xl text-gray-700">Password Reset</h4>
          <p className="text-sm text-gray-500">
            Your password has been reset. You can now login with your new
            password.
          </p>
          {error && (
            <ul className="w-full list-disc rounded border border-red-400 bg-red-50 p-2 text-sm">
              <li key={error} className="ml-4 text-red-500">
                {error}
              </li>
            </ul>
          )}
          <Button
            variant="default"
            onClick={() => {
              seNextStep(0);
              setError('');
            }}
          >
            Ok
          </Button>
        </div>
      )}
    </div>
  );
}

export default ResetPage;
