'use client';

import { signOut } from 'next-auth/react';

import { Button } from '@components/ui/Button';

const SignOut = () => {
  return (
    <Button type="button" onClick={() => signOut()} className="bg-primary-800">
      Logout
    </Button>
  );
};

export default SignOut;
