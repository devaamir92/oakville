'use client';

import Link from 'next/link';
import { useState } from 'react';

import Login from '@layouts/default/Header/auth/Login';
import Register from '@layouts/default/Header/auth/Register';
import FinalStep from '@layouts/default/Header/auth/Final';

type FormState = 'SIGN_IN' | 'SIGN_UP' | 'FINAL_STEP';

const LoginSteps: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('SIGN_IN');

  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
  });

  const switchForm = (step: string) => {
    setFormState(step as FormState);
  };

  return (
    <div className="absolute top-40 max-w-96 rounded bg-white px-6 pb-6 pt-4 shadow">
      {formState === 'SIGN_IN' && <Login switchForm={switchForm} />}
      {formState === 'SIGN_UP' && (
        <Register switchForm={switchForm} setState={setState} state={state} />
      )}
      {formState === 'FINAL_STEP' && (
        <FinalStep switchForm={switchForm} setState={setState} state={state} />
      )}

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
    </div>
  );
};

export default LoginSteps;
