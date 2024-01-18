import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';

interface Props {
  switchForm: (step: string) => void;
}

const FinalStep: React.FC<Props> = ({ switchForm }) => {
  const setValue = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <div className="mx-auto flex justify-center py-5">
        <h4 className="text-2xl font-medium">Just One Step Away</h4>
      </div>
      <form className="mt-4 flex flex-col gap-5">
        <div className="flex gap-3">
          <Input id="firstname" type="text" placeholder="First Name" required />
          <Input id="lastname" type="text" placeholder="Last Name" required />
        </div>
        <PhoneInput
          id="phone"
          placeholder="Enter Phone Number"
          defaultCountry="CA"
          onChange={setValue}
          className="h-[40px] rounded border border-slate-300 bg-transparent px-2 py-1 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 "
          required
        />
        <div className="flex gap-3">
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="mt-2">
          <Button className="w-full" variant="default">
            Submit
          </Button>
        </div>
      </form>
      <div className="mt-2 flex items-center justify-center">
        <Button
          variant="link"
          className=" font-medium text-gray-700 hover:underline"
          onClick={() => switchForm('SIGN_IN')}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default FinalStep;
