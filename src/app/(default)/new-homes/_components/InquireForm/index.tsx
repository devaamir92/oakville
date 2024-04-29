'use client';

import React, { useState } from 'react';

import { z } from 'zod';

import { capiClient } from '@lib/capiclient';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface InquireFormProps {
  title: string;
}

const InquireForm: React.FC<InquireFormProps> = ({ title }) => {
  const [errors, setErrors] = useState<any>(null);
  const [setups, setSetups] = useState<string>('step-1');
  const [checked, setChecked] = useState<boolean>(false);

  const data = z.object({
    firstName: z.string().min(2, { message: 'First Name is required' }),
    lastName: z.string().min(2, { message: 'Last Name is required' }),
    email: z.string().email({ message: 'Email is required' }),
    phone: z
      .string()
      .min(10, { message: 'Phone minimum 10 characters' })
      .max(12, { message: 'Phone maximum 12 characters' }),
  });

  const handleInquiry = async (result: any) => {
    const payload = {
      name: `${result.firstName} ${result.lastName}`,
      email: result.email,
      phone: result.phone,
      isAgent: checked,
      message: result.message,
      url: window.location.href,
      slug: 'clarehaven-estates',
    };
    try {
      const res = await capiClient.post('/api/v1/inquire', payload);
      if (res.status === 201) {
        setSetups('step-2');
        setErrors(null);
      }
      return res;
    } catch (err: any) {
      return err;
    }
  };

  const handleValidate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const realtor = formData.get('realtor') as string;

    const result = data.safeParse({
      firstName,
      lastName,
      email,
      phone,
      realtor,
    });

    if (result.success) {
      setErrors(null);
      const res = await handleInquiry({
        ...result.data,
        message,
      });

      if (res.status === 500) {
        setErrors([{ message: 'Unauthorized' }]);
      }
      const responceData = res.data;

      if (responceData.errors) {
        const resErrors = Object.values(responceData.errors).map(msg => ({
          msg,
        }));
        setErrors(resErrors);
      }
    } else {
      setErrors(result.error.errors);
    }
  };

  return (
    <div className="order-2 h-fit lg:sticky lg:top-[94px] lg:order-1 lg:w-[360px]">
      <div className="flex flex-col gap-2">
        {errors && (
          <ul className="mb-4 list-disc rounded border border-red-400 bg-red-50 p-2 text-sm">
            {errors.map((error: any) => (
              <li key={error.message} className="ml-4 text-red-500">
                {error.message}
              </li>
            ))}
          </ul>
        )}
      </div>

      {setups === 'step-1' && (
        <form
          onSubmit={handleValidate}
          className=" flex flex-col justify-between gap-6 rounded bg-secondary-300 p-6 2xl:h-3/4"
        >
          <h2 className="text-center text-lg font-medium">
            Register To Get Pricing for {title}
          </h2>
          <div className="flex gap-4">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="bg-white py-1"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="bg-white py-1"
            />
          </div>
          <Input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-white py-1"
          />
          <Input
            type="number"
            name="phone"
            placeholder="Phone"
            className="bg-white py-1"
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm">Are you a Realtor?</p>
            <div className="flex gap-2">
              <label
                htmlFor="checkboxyes"
                className="flex items-center gap-1 text-sm"
              >
                <input
                  className=""
                  name="realtor"
                  id="checkboxyes"
                  type="radio"
                  value="yes"
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                />
                Yes
              </label>
              <label
                htmlFor="checkboxno"
                className="flex items-center gap-1 text-sm"
              >
                <input
                  className=""
                  name="realtor"
                  value="no"
                  id="checkboxno"
                  type="radio"
                  onChange={() => setChecked(!checked)}
                  checked={!checked}
                />
                No
              </label>
            </div>
          </div>
          <Input
            type="text"
            name="message"
            placeholder="Message"
            className="bg-white py-1"
          />

          <Button type="submit" title="submit" variant="default" className="">
            Submit
          </Button>
        </form>
      )}
      {setups === 'step-2' && (
        <div className="flex flex-col  items-center justify-center gap-4 rounded bg-secondary-300 p-6 text-lg font-medium 2xl:h-3/4">
          <h5>Thank you for your interest</h5>
          <p className="text-sm text-gray-800">
            Our Agent will be in touch with you.
          </p>
        </div>
      )}
    </div>
  );
};

export default InquireForm;
