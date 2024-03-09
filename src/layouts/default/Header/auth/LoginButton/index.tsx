'use client';

import { useLayout } from '@context/LayoutContext';

import { Button } from '@components/ui/Button';

import Auth from '..';

function LoginButton() {
  const { toggle } = useLayout();
  return (
    <div>
      <Button onClick={toggle} className="bg-primary-700">
        Login
      </Button>
      <Auth />
    </div>
  );
}

export default LoginButton;
