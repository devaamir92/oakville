'use client';

import Link from 'next/link';
import { useState } from 'react';

import Modal from '@components/ui/Modal';

import Login from './Login';
import Register from './Register';
import FinalStep from './Final';

type FormState = 'SIGN_IN' | 'SIGN_UP' | 'FINAL_STEP';

function Auth() {
  const [formState, setFormState] = useState<FormState>('SIGN_IN');

  const switchForm = (step: string) => {
    setFormState(step as FormState);
  };

  return (
    <Modal
      title="Login"
      className="rounded bg-primary-400 px-7 py-2 text-white"
    >
      {formState === 'SIGN_IN' && <Login switchForm={switchForm} />}
      {formState === 'SIGN_UP' && <Register switchForm={switchForm} />}
      {formState === 'FINAL_STEP' && <FinalStep switchForm={switchForm} />}

      <p className="mt-2 text-center text-sm font-light text-gray-600">
        By creating an account, you acknowledge that you have read and agreed to
        our{' '}
        <Link
          href="/privacy"
          className="font-medium text-gray-700 hover:underline"
        >
          Privacy Policy.
        </Link>
      </p>
    </Modal>
  );
}

export default Auth;
