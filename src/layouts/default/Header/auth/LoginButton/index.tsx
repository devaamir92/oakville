'use client';

import { useLayout } from '@context/LayoutContext';

import { Button } from '@components/ui/Button';

import Auth from '..';

function LoginButton() {
  const { setLogin } = useLayout();
  return (
    <div>
      <Button onClick={() => setLogin(true)} className="bg-primary-700">
        Login
      </Button>
      <Auth />
    </div>
  );
}

export default LoginButton;
