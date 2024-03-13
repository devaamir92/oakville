'use client';

import { Button } from '@components/ui/Button';

import { useLayout } from '@context/LayoutContext';

const LoginButton = () => {
  const { setLogin } = useLayout();

  return (
    <Button
      type="button"
      onClick={() => setLogin(true)}
      className="h-9 w-full bg-primary-400 hover:bg-primary-500"
    >
      Book a showing
    </Button>
  );
};

export default LoginButton;
