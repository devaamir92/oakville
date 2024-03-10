'use client';

import { Button } from '@components/ui/Button';

import { useLayout } from '@context/LayoutContext';

const LoginBtn = () => {
  const { setLogin } = useLayout();

  return (
    <div>
      <Button
        onClick={() => setLogin(true)}
        className=" bg-white text-base font-medium text-primary-500 transition-all duration-200 ease-in-out hover:bg-primary-100"
      >
        Login Required
      </Button>
    </div>
  );
};

export default LoginBtn;
