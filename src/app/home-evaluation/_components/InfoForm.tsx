'use client';

import React, { useState } from 'react';

import { Button } from '@components/ui/Button';

import AutoAddress from './Autocomplete';

const defultClassName =
  'border_b w-full !border-b border-white bg-transparent p-1 text-white outline-none placeholder:text-gray-300';

function InfoForm() {
  const [setpCount, setStepCount] = useState(1);

  const [data, setState] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    address: '',
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const res = await fetch(`${process.env.CRM_API_HOST}/api/v1/sell`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...data,
    //     name: data.fullName,
    //   }),
    // });

    // if (res.ok) {
    //   setStepCount(2);
    //   setState({
    //     fullName: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    //     address: '',
    //   });
    // }
    setStepCount(3);
  };

  const handleNextStep = () => {
    if (data.address) setStepCount(2);
  };
  if (setpCount === 1) {
    return (
      <div className="absolute  left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-3">
          <h1 className="w-[70%] text-center text-xl font-medium text-white md:text-2xl lg:text-3xl">
            Sell Your Home with The Local Preserve Oakville Real Estate Experts
          </h1>

          <div className="mx-auto mt-4 flex w-full max-w-xs items-center md:max-w-sm lg:max-w-lg">
            <div className="h-9 flex-1 overflow-auto rounded-l bg-white">
              <AutoAddress
                onSelectAddress={e => {
                  setState({ ...data, address: e });
                  console.log(e);
                }}
              />
            </div>
            <Button
              className="rounded-l-none bg-primary-500 lg:w-1/4"
              variant="default"
              onClick={() => handleNextStep()}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (setpCount === 2) {
    return (
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-center text-lg font-medium text-white">
            Almost There!
          </p>
          <p className="text-center text-xl text-white">
            Please Fill In Your Information
          </p>
        </div>
        <form
          onSubmit={e => {
            handleFormSubmit(e);
          }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <input
            placeholder="Full Name"
            type="text"
            className={defultClassName}
            required
          />
          <input
            placeholder="Phone"
            type="text"
            className={defultClassName}
            value={data.fullName}
            onChange={e => setState({ ...data, fullName: e.target.value })}
            required
          />
          <input
            placeholder="Email"
            type="email"
            className={defultClassName}
            value={data.email}
            onChange={e => setState({ ...data, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            className="w-full border-2 border-white  bg-transparent p-1 text-white"
            rows={4}
            value={data.message}
            onChange={e => setState({ ...data, message: e.target.value })}
            required
          />

          <Button
            className="mt-4 flex items-center justify-center px-6"
            variant="default"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="absolute left-1/2 top-1/2 flex w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-center text-2xl font-medium text-white">
          Thank You for Submitting.
        </p>
        <p className="text-center text-3xl font-medium text-white">
          We&apos;re estimating your bungalow&apos;s worth.
        </p>
        <p className="text-center text-xl text-white">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    </div>
  );
}

export default InfoForm;
