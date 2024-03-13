import React from 'react';

import { Button } from '@components/ui/Button';

function VerifyUser() {
  return (
    <div className="absolute top-40 max-w-96 rounded bg-white px-6 pb-6 pt-4 shadow">
      <form action="" className="flex flex-col gap-4">
        <h2 className="text-center text-xl font-semibold">
          Verify your account
        </h2>
        <p className="text-center text-sm text-gray-600">
          We have sent a verification link to your email. Please verify your
          account to continue.
        </p>
        <Button type="submit" className="w-full">
          Resend verification link
        </Button>
      </form>
    </div>
  );
}

export default VerifyUser;
