import React from 'react';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface RegisterProps {
  switchForm: (step: string) => void;
}

const Register: React.FC<RegisterProps> = ({ switchForm }) => {
  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Create a Free Account</h4>
      </div>
      <form className="mt-4 flex flex-col gap-5">
        <Input id="email" type="email" placeholder="Email Address" required />
        <div className="mt-2">
          <Button
            className="w-full"
            variant="default"
            onClick={() => switchForm('FINAL_STEP')}
          >
            Next
          </Button>
        </div>
      </form>
      <div className="mt-2 flex items-center justify-center">
        Already have an account?
        <Button
          variant="link"
          onClick={() => switchForm('SIGN_IN')}
          className=" font-medium text-gray-700 hover:underline"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Register;
