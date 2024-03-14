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
    <Button type="button" className="bg-primary-500" onClick={() => Logout()}>
      Logout
    </Button>
  );
};

export default SignOut;
