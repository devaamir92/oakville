import Link from 'next/link';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface LoginProps {
  switchForm: (step: string) => void;
}

const Login: React.FC<LoginProps> = ({ switchForm }) => {
  const [errors, setErrors] = useState<any>(null);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const user = await signIn('credentials', {
        redirect: false,
        email: state.email,
        password: state.password,
      });
      if (user?.ok) {
        window.location.reload();
      }
      if (user?.error) {
        setErrors([{ message: user.error }]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const schema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
  });

  const handleSubmit = () => {
    try {
      schema.parse({
        email: state.email,
        password: state.password,
      });
      setErrors(null);
      handleRegister();
    } catch (err: any) {
      setErrors(err.errors);
    }
  };

  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Log in to Your Account</h4>
      </div>
      {errors && (
        <div className="flex h-full items-center rounded border border-red-300 bg-red-100 px-2 text-sm">
          <ul className="ml-5 list-disc text-red-500">
            {errors.map((error: any) => (
              <li key={error.message} className="py-2 capitalize">
                {error.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form className="mt-4 flex flex-col gap-5">
        <Input
          id="email"
          type="email"
          placeholder="Email Address"
          value={state.email}
          onChange={e => setState({ ...state, email: e.target.value })}
        />
        <div className="flex flex-col gap-3">
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={e => setState({ ...state, password: e.target.value })}
          />
          <div className="flex items-center justify-between">
            <label
              htmlFor="remember"
              className="flex items-center gap-1 text-sm text-gray-800"
            >
              <input type="checkbox" id="remember" />
              Remember me
            </label>

            <Link
              href="/resetpass"
              className="text-sm text-gray-800 hover:underline  "
            >
              Forget Password?
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <Button
            className="w-full"
            variant="default"
            onClick={e => handleSubmit(e)}
          >
            Login
          </Button>
        </div>
      </form>
      <div className="mt-2 flex items-center justify-center">
        <Button
          variant="link"
          className=" font-medium text-gray-700 hover:underline"
          onClick={() => switchForm('SIGN_UP')}
        >
          Create an account
        </Button>
      </div>
    </div>
  );
};

export default Login;
