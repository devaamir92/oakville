'use client';

import Link from 'next/link';

import React, { useEffect, useState } from 'react';

import { useFormState, useFormStatus } from 'react-dom';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import type { User } from '@lib/auth';
import { login } from '@lib/auth';

interface LoginProps {
  switchForm: (step: string) => void;
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      variant="default"
      type="submit"
      aria-disabled={pending}
    >
      Login
    </Button>
  );
}

const Login: React.FC<LoginProps> = ({ switchForm }) => {
  const [state, fromAction] = useFormState(login, null);
  const [fieldErrors, setFieldErrors] = useState<User | undefined>(undefined);
  const [isRemembered, setIsRemembered] = useState(false);

  useEffect(() => {
    setFieldErrors({});

    if (state?.status === 400) {
      setFieldErrors(state?.errors);
    }
  }, [state]);

  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Log in to Your Account</h4>
      </div>
      {state?.message && (
        <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
          <ul className="ml-5 list-disc text-red-500">
            <li className="py-2 capitalize">{state?.message}</li>
          </ul>
        </div>
      )}
      <form className="mt-4 flex flex-col gap-5" action={fromAction}>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        {fieldErrors?.email && (
          <span className="text-sm capitalize text-red-500">
            {fieldErrors?.email}
          </span>
        )}
        <div className="flex flex-col gap-3">
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {fieldErrors?.password && (
            <span className="text-sm capitalize text-red-500">
              {fieldErrors?.password}
            </span>
          )}
          <div className="flex items-center justify-between">
            <label
              htmlFor="remember"
              className="flex items-center gap-1 text-sm text-gray-800"
            >
              <input
                type="checkbox"
                id="remember"
                checked={isRemembered}
                onChange={e => setIsRemembered(e.target.checked)}
              />
              Remember me
            </label>

            <Link
              href="/reset-password"
              className="text-sm text-gray-800 hover:underline  "
            >
              Forget Password?
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <LoginButton />
        </div>
      </form>
      <div className="mt-2 flex items-center justify-center">
        <Button
          variant="link"
          className=" font-medium text-gray-700 hover:underline"
          onClick={() => switchForm('SIGN_UP')}
        >
          Create an account
        </Button>
      </div>
    </div>
  );
};

export default Login;
