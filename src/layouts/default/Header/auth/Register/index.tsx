'use client';

import React, { useState } from 'react';
import { z } from 'zod';

import Link from 'next/link';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface RegisterProps {
  switchForm: (step: string) => void;
  setState: (state: any) => void;
  state: any;
  title?: string;
}

const Register: React.FC<RegisterProps> = ({
  switchForm,
  setState,
  state,
  title = 'Create a Free Account',
}) => {
  const [error, setError] = useState<string>('');

  const handleExists = async () => {
    const res = await fetch(`${process.env.API_HOST}/api/v1/auth/exists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
      }),
    });

    const data = await res.json();

    if (data.exists) {
      setError('Email already exists');
    } else {
      switchForm('FINAL_STEP');
    }
  };

  const handleValidate = () => {
    if (!state.email) {
      setError('Email is required');
      return;
    }
    const schema = z.object({
      email: z.string().email(),
    });

    try {
      schema.parse({ email: state.email });
      setError('');
      handleExists();
    } catch (err: any) {
      setError(err.errors[0].message);
    }
  };

  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">{title}</h4>
      </div>
      {error && (
        <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
          <ul className="ml-5 list-disc text-red-500">
            <li className="py-2 capitalize">{error}</li>
          </ul>
        </div>
      )}

      <form className="mt-4 flex flex-col gap-5">
        <Input
          id="email"
          type="email"
          value={state.email}
          placeholder="Email Address"
          onChange={event => setState({ ...state, email: event.target.value })}
          required
        />
        <div className="mt-2">
          <Button
            className="w-full"
            variant="default"
            onClick={() => handleValidate()}
          >
            Next
          </Button>
        </div>
      </form>
      <div className="mt-2 flex items-center justify-center">
        Already have an account?
        <Button
          variant="link"
          onClick={() => switchForm('SIGN_IN')}
          className=" font-medium text-primary-500 hover:underline"
        >
          Login
        </Button>
      </div>
      <p className="mt-4 text-center text-sm font-light text-gray-600">
        By creating an account you acknowledge that you have read and agree to
        <Link
          href="/privacy"
          className="ml-1 font-medium text-blue-500 hover:underline"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Register;
