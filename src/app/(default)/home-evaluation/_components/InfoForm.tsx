'use client';

import React, { useState } from 'react';

import { capiClient } from '@lib/capiclient';

import { Button } from '@components/ui/Button';

import Modal from '@components/ui/Modal';
import { Input } from '@components/ui/Input';

import AutoAddress from './Autocomplete';

// const defultClassName =
//   'border_b w-full !border-b border-white bg-transparent p-1 text-white outline-none placeholder:text-gray-300';

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
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      message: data.message,
    };
    try {
      const res = await capiClient.post('/api/v1/sell', payload);
      if (res.status === 201) {
        setStepCount(3);
        setState({
          fullName: '',
          email: '',
          phone: '',
          message: '',
          address: '',
        });
      }
      return res;
    } catch (err: any) {
      return err;
    }
  };
  const handleNextStep = () => {
    if (data.address) setStepCount(2);
  };

  return (
    <>
      <div className="absolute  left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-3">
          <h1 className="w-[90%] text-center text-xl font-medium text-white md:w-[70%]  md:text-2xl lg:text-3xl">
            Sell Your Home with The Local Preserve Oakville Real Estate Experts
          </h1>

          <div className="mx-auto mt-4 flex w-full max-w-xs items-center md:max-w-sm lg:max-w-lg">
            <div className="h-9 flex-1 overflow-auto rounded-l bg-white">
              <AutoAddress
                onSelectAddress={e => {
                  setState({ ...data, address: e });
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
      <Modal
        show={setpCount > 1}
        OnClose={() => {
          setStepCount(1);
          setState({
            fullName: '',
            email: '',
            phone: '',
            message: '',
            address: '',
          });
        }}
        size="sm"
      >
        {setpCount === 2 && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-center text-lg font-medium text-gray-800">
                Almost There!
              </p>
              <p className="text-center text-xl text-gray-800">
                Please Fill In Your Information
              </p>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={e => {
                handleFormSubmit(e);
              }}
            >
              <Input
                placeholder="Full Name"
                type="text"
                value={data.fullName}
                onChange={e => setState({ ...data, fullName: e.target.value })}
                required
              />
              <Input
                placeholder="Phone"
                type="text"
                value={data.phone}
                onChange={e => setState({ ...data, phone: e.target.value })}
                required
              />
              <Input
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={e => setState({ ...data, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Message"
                rows={4}
                value={data.message}
                onChange={e => setState({ ...data, message: e.target.value })}
                required
                className="flex  w-full rounded border border-slate-300 bg-transparent px-2 py-1 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button
                className="flex items-center justify-center px-6"
                variant="default"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        )}
        {setpCount === 3 && (
          <div className="flex flex-col gap-4">
            <p className="text-center text-xl font-bold text-gray-800">
              Thank You for Submitting.
            </p>
            <p className="text-center text-base text-gray-800">
              We&apos;re estimating your property&apos;s worth.
            </p>
            <p className="text-center text-base text-gray-800">
              We&apos;ll get back to you shortly.
            </p>
            <Button
              className="flex items-center justify-center px-6"
              variant="default"
              onClick={() => {
                setStepCount(1);
                setState({
                  fullName: '',
                  email: '',
                  phone: '',
                  message: '',
                  address: '',
                });
              }}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
      ;
    </>
  );
}

export default InfoForm;
