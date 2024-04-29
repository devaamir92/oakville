'use client';

import { z } from 'zod';
import React, { useState } from 'react';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import Link from 'next/link';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

import InputPassword from '@components/ui/Input/inputPassword';
import Loading from '@components/ui/Loading';

import { login } from '@lib/auth';

interface Props {
  switchForm: (step: string) => void;
  setState: (state: any) => void;
  state: any;
}

const FinalStep: React.FC<Props> = ({ switchForm, setState, state }) => {
  const [errors, setErrors] = useState<any>(null);
  const [pending, setPending] = useState(false);

  const setValue = (value: string) => {
    setState({ ...state, phone: value });
  };

  const data = z.object({
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    phone: z
      .string()
      .min(12, { message: 'Phone must be at least 12 characters' }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  });

  const handleRegister = async () => {
    try {
      const response = await fetch(
        `${process.env.API_HOST}/api/v1/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${state.firstName} ${state.lastName}`,
            phone: state.phone,
            email: state.email,
            password: state.password,
          }),
        }
      );
      const responceData = await response.json();
      if (responceData.errors) {
        const roors = Object.values(responceData.errors).map(message => ({
          message,
        }));
        setErrors(roors);
        setPending(false);
      } else {
        const formdata = new FormData();
        formdata.append('email', state.email);
        formdata.append('password', state.password);
        await login(null, formdata);
        setPending(false);
        switchForm('VER_STEP');
      }
    } catch (err) {
      setErrors([{ message: 'Something went wrong' }]);
      setPending(false);
    }
  };

  const handleSubmit = () => {
    setPending(true);
    try {
      data.parse({
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        password: state.password,
      });
      handleRegister();
    } catch (err: any) {
      setPending(false);
      setErrors(err.errors);
    }
  };

  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Signup Form</h4>
      </div>
      {errors && (
        <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
          <ul className="ml-5 list-disc text-red-500">
            {errors.map((error: any) => (
              <li key={error.message} className="py-2 ">
                {error.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form className="mt-4 flex flex-col gap-5">
        <div className="flex gap-3">
          <Input
            id="firstname"
            type="text"
            placeholder="First Name"
            value={state.firstName}
            onChange={event =>
              setState({ ...state, firstName: event.target.value })
            }
          />
          <Input
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={state.lastName}
            onChange={event =>
              setState({ ...state, lastName: event.target.value })
            }
          />
        </div>
        <PhoneInput
          id="phone"
          placeholder="Enter Phone Number"
          defaultCountry="CA"
          onChange={setValue}
          value={state.phone}
          className="h-[40px] rounded border border-slate-300 bg-transparent px-2 py-1 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
        />
        <div className="flex gap-3">
          <InputPassword
            id="password"
            name="password"
            placeholder="Password"
            required
            value={state.password}
            className="w-full text-sm"
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
        </div>
        <div className="mt-2">
          <Button
            className="w-full gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            variant="default"
            onClick={() => handleSubmit()}
            disabled={pending}
          >
            {pending && <Loading />}
            Signup
          </Button>
        </div>
      </form>
      <div className="mt-2 flex items-center justify-center">
        <Button
          variant="link"
          className=" font-medium text-gray-700 hover:underline"
          onClick={() => switchForm('SIGN_IN')}
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

export default FinalStep;
