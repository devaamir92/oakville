'use client';

import { logout } from '@lib/auth';

import { Button } from '@components/ui/Button';

const SignOut = () => {
  return (
    <Button type="button" onClick={() => logout()} className="bg-primary-800">
      Logout
    </Button>
  );
};

export default SignOut;
