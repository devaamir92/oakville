'use client';

import { useEffect } from 'react';

import { logout } from '@lib/auth';

import { Button } from '@components/ui/Button';

import { useLayout } from '@context/LayoutContext';

interface Props {
  session: any;
}

const SignOut: React.FC<Props> = ({ session }) => {
  const { onClose } = useLayout();
  useEffect(() => {
    if (session) {
      onClose();
    }
  }, [session, onClose]);

  return (
    <Button type="button" onClick={() => logout()} className="bg-primary-800">
      Logout
    </Button>
  );
};

export default SignOut;
