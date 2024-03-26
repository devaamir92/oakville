'use client';

import React, { useState } from 'react';
import { z } from 'zod';

import { toast } from 'react-toastify';

import { capiClient } from '@lib/capiclient';

import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';

function Contact() {
  const [errors, setErrors] = useState<any>(null);

  const data = z.object({
    name: z.string().min(2, { message: 'Name is required' }),
    email: z.string().email({ message: 'Email is required' }),
    phone: z.string().min(12, { message: 'Phone minimum 12 characters' }),
    subject: z.string().min(2, { message: 'Subject is required' }),
    message: z.string().min(1, { message: 'Message is required' }),
  });

  const handleSubmit = async (result: any) => {
    const payload = {
      name: result.name,
      email: result.email,
      phone: result.phone,
      subject: result.subject,
      message: result.message,
    };
    try {
      const res = await capiClient.post('/api/v1/contact', payload);
      if (res.status === 201) {
        toast.success(
          'Your message has been successfully submitted. Thank you for reaching out to us.'
        );
        setErrors(null);
        const form = document.querySelector('form');
        form?.reset();
      }
      return res;
    } catch (err: any) {
      return err;
    }
  };

  const handleValidate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const result = data.safeParse({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (result.success) {
      setErrors(null);
      const res = await handleSubmit(result.data);

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
    <div className="mb-10 flex flex-1 flex-col items-center justify-center gap-4 lg:mb-0">
      <h1 className="mb-4 text-2xl font-medium text-gray-800 lg:mb-10">
        Submit a Message
      </h1>
      {errors && (
        <ul className="mb-4 w-96 list-disc rounded border border-red-400 bg-red-50 p-2 text-sm">
          {errors.map((error: any) => (
            <li key={error.message} className="ml-4 text-red-500">
              {error.message}
            </li>
          ))}
        </ul>
      )}
      <form
        onSubmit={handleValidate}
        className="flex min-w-full flex-col gap-6 md:min-w-[576px]"
      >
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" required placeholder="Your Email" />
        <Input type="text" name="phone" required placeholder="Phone Number" />
        <Input type="text" name="subject" required placeholder="Subject" />
        <textarea
          rows={4}
          className="w-full rounded border-2 border-gray-300 p-2"
          placeholder="Your Message"
          name="message"
        />
        <Button
          type="submit"
          className="mx-auto w-fit rounded bg-primary-500 px-10 py-2 text-white"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
