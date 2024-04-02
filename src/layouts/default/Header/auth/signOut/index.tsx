'use client';

import { logout } from '@lib/auth';

import { Button } from '@components/ui/Button';
import { useFavLayout } from '@context/FavContext';

const SignOut: React.FC = () => {
  const { setFavourite } = useFavLayout();

  async function Logout() {
    await logout();
    setFavourite([]);
  }
  return (
    <Button
      type="button"
      className="h-12 bg-primary-500 text-base lg:h-9 lg:text-sm"
      onClick={() => Logout()}
    >
      Logout
    </Button>
  );
};

export default SignOut;
