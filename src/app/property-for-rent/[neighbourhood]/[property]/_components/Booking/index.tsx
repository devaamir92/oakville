'use client';

import React, { useState } from 'react';
import { z } from 'zod';

import { apiClient } from '@lib/apiclient';

import Modal from '@components/ui/Modal';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface BookingProps {
  mls: string;
  addr: string;
  apt: string;
}

const Booking: React.FC<BookingProps> = ({ mls, addr, apt }) => {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<any>(null);
  const [setups, setSetups] = useState<string>('step-1');

  const OnClose = () => {
    setShow(!show);
    setErrors(null);
    setSetups('step-1');
  };

  const handleBooking = async (result: any) => {
    const payload = {
      mls,
      name: `${result.firstName} ${result.lastName}`,
      email: result.email,
      phone: result.phone,
      note: result.note,
      url: window.location.href,
    };
    try {
      const res = await apiClient.post('/api/v1/booking', payload);
      return res;
    } catch (err: any) {
      console.log(err);
      if (err.response?.status === 401) {
        console.log(err.response.status);
      }
      return err;
    }
  };

  const data = z.object({
    firstName: z.string().min(2, { message: 'First Name is required' }),
    lastName: z.string().min(2, { message: 'Last Name is required' }),
    email: z.string().email(),
    phone: z
      .string()
      .min(12, { message: 'Phone must be at least 12 characters' }),
    note: z.string().min(2, { message: 'Note is required' }),
  });

  const handleValidate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const note = formData.get('note') as string;

    const result = data.safeParse({
      firstName,
      lastName,
      email,
      phone,
      note,
    });

    if (result.success) {
      setErrors(null);
      const res = await handleBooking(result.data);
      if (res.status === 401) {
        setErrors([{ message: 'Unauthorized' }]);
      }
      if (res.status === 400) {
        setErrors([
          { message: 'You are not authorized to perform this action' },
        ]);
      }
      if (res.status === 201) {
        setSetups('step-2');
      }
      const responceData = res;
      if (responceData.errors) {
        const resErrors = Object.values(responceData.errors).map(message => ({
          message,
        }));
        setErrors(resErrors);
      }
    } else {
      setErrors(result.error.errors);
    }
  };

  return (
    <Modal
      show={show}
      title="Book a showing"
      OnClose={OnClose}
      className="flex h-9 w-full items-center justify-center rounded bg-primary-400 text-sm text-white transition-all duration-300 ease-out hover:bg-primary-500"
    >
      {setups === 'step-1' ? (
        <>
          {' '}
          <div className="flex flex-col  items-center justify-center gap-0 text-lg font-medium">
            <h5>Interested ?</h5>
            <h6>Book A Showing</h6>
          </div>
          <p className="mb-6 mt-3 text-center text-sm text-gray-600">
            {apt ? `${apt} - ` : ''} {addr}
          </p>
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
          <form onSubmit={handleValidate} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input type="text" name="first_name" placeholder="First Name" />
              <Input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <Input type="email" required name="email" placeholder="Email" />
            <Input type="tel" name="phone" placeholder="Phone" />
            <Input type="text" name="note" placeholder="Date Time" />
            <Button
              className="mb-4 h-9 w-full bg-primary-400 capitalize"
              variant="default"
              type="submit"
            >
              Submit
            </Button>
          </form>{' '}
        </>
      ) : (
        <div className="flex flex-col  items-center justify-center gap-4 text-lg font-medium">
          <h5>Thank you for your interest</h5>
          <p className="text-sm text-gray-800">
            Our Agent will be in touch with you.
          </p>
        </div>
      )}
    </Modal>
  );
};

export default Booking;
