'use client';

import { z } from 'zod';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface Props {
  switchForm: (step: string) => void;
  setState: (state: any) => void;
  state: any;
}

const FinalStep: React.FC<Props> = ({ switchForm, setState, state }) => {
  const [errors, setErrors] = useState<any>(null);

  const setValue = (value: string) => {
    setState({ ...state, phone: value });
  };

  const data = z.object({
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    phone: z
      .string()
      .min(12, { message: 'phone must be at least 12 characters' }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  });

  const handleLogin = async () => {
    try {
      const user = await signIn('credentials', {
        redirect: true,
        email: state.email,
        password: state.password,
      });

      if (user?.error) {
        setErrors([{ message: user.error }]);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
      } else {
        handleLogin();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    try {
      data.parse({
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        password: state.password,
      });
      handleRegister();
    } catch (err: any) {
      setErrors(err.errors);
    }
  };

  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Just One Step Away</h4>
      </div>
      {errors && (
        <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
          <ul className="ml-5 list-disc text-red-500">
            {errors.map((error: any) => (
              <li key={error.message} className="py-2 capitalize">
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
          <Input
            id="password"
            type="password"
            value={state.password}
            placeholder="Password"
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
        </div>
        <div className="mt-2">
          <Button
            className="w-full"
            variant="default"
            onClick={() => handleSubmit()}
          >
            Submit
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
    </div>
  );
};

export default FinalStep;
