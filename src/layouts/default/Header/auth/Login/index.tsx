import React from 'react';
import Link from 'next/link';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface LoginProps {
  switchForm: (step: string) => void;
}

const Login: React.FC<LoginProps> = ({ switchForm }) => {
  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Log in to Your Account</h4>
      </div>
      <form className="mt-4 flex flex-col gap-5">
        <Input id="email" type="email" placeholder="Email Address" required />
        <div className="flex flex-col gap-3">
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
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
          <Button className="w-full" variant="default">
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
