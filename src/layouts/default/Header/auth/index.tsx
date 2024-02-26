'use client';

import Link from 'next/link';
import { useState } from 'react';

import cn from '@utils/cn';
import Modal from '@components/ui/Modal';

import Login from './Login';
import Register from './Register';
import FinalStep from './Final';

type FormState = 'SIGN_IN' | 'SIGN_UP' | 'FINAL_STEP';

interface AuthProps {
  className?: string;
  isLocked?: boolean;
}

const Auth: React.FC<AuthProps> = ({ className, isLocked }) => {
  const [formState, setFormState] = useState<FormState>('SIGN_IN');
  const [showModal, setShowModal] = useState(false);
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

  const onClose = () => {
    setShowModal(false);
    setFormState('SIGN_IN');
    setState({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
    });
  };

  return (
    <Modal
      title={isLocked ? 'Login Required' : 'Login'}
      className={cn(
        'rounded bg-primary-800 px-6 py-1.5 text-white lg:px-7 lg:py-2',
        className
      )}
      show={showModal}
      OnClose={onClose}
    >
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
    </Modal>
  );
};

export default Auth;
