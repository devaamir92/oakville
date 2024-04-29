'use client';

import { useEffect, useState } from 'react';

import { useLayout } from '@context/LayoutContext';

import Login from './Login';
import Register from './Register';
import FinalStep from './Final';
import DialogBox from './Dailog';
import Verification from './Verification';

interface LinkProps {
  isLogin?: boolean;
}

type FormState = 'SIGN_IN' | 'SIGN_UP' | 'FINAL_STEP' | 'VER_STEP';

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
    key: null,
  });

  const switchForm = (step: string) => {
    setFormState(step as FormState);
  };

  useEffect(() => {
    switchForm('SIGN_IN');
    if (login) {
      setState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        key: null,
      });
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
        {formState === 'VER_STEP' && (
          <Verification
            switchForm={switchForm}
            setState={setState}
            state={state}
          />
        )}
      </DialogBox>
    </div>
  );
};

export default Auth;
