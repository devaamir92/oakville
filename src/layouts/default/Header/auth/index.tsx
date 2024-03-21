'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useLayout } from '@context/LayoutContext';

import Login from './Login';
import Register from './Register';
import FinalStep from './Final';
import DialogBox from './Dailog';

interface LinkProps {
  isLogin?: boolean;
}

type FormState = 'SIGN_IN' | 'SIGN_UP' | 'FINAL_STEP';

const Auth: React.FC<LinkProps> = ({ isLogin }) => {
  const { login, setLogin } = useLayout();
  const [formState, setFormState] = useState<FormState>('SIGN_IN');
  if (isLogin) {
    setLogin(true);
  }

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
    setFormState('SIGN_IN');
    setState({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
    });
  };

  useEffect(() => {
    if (login) {
      onClose();
    }
  }, [login]);

  return (
    <div>
      <DialogBox show={login} size="sm">
        {formState === 'SIGN_IN' && <Login switchForm={switchForm} />}
        {formState === 'SIGN_UP' && (
          <Register switchForm={switchForm} setState={setState} state={state} />
        )}
        {formState === 'FINAL_STEP' && (
          <FinalStep
            switchForm={switchForm}
            setState={setState}
            state={state}
          />
        )}

        <p className="mt-2 text-center text-sm font-light text-gray-600">
          By creating an account, you acknowledge that you have read and agreed
          to our{' '}
          <Link
            href="/terms"
            className="font-medium text-gray-700 hover:underline"
          >
            Terms of Service
          </Link>
        </p>
      </DialogBox>
    </div>
  );
};

export default Auth;
