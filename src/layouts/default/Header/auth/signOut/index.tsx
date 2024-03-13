'use client';

import { logout } from '@lib/auth';

import { Button } from '@components/ui/Button';

const SignOut: React.FC = () => {
  return (
    <Button type="button" onClick={() => logout()} className="primary-500">
      Logout
    </Button>
  );
};

export default SignOut;
