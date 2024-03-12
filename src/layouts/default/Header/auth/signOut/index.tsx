'use client';

import { useEffect } from 'react';

import { logout } from '@lib/auth';

import { Button } from '@components/ui/Button';

import { useLayout } from '@context/LayoutContext';
import { useFavLayout } from '@context/FavContext';
import { getFavourite } from '@lib/api/addFavourite';

interface Props {
  session: any;
}

const SignOut: React.FC<Props> = ({ session }) => {
  const { onClose } = useLayout();
  const { setFavourite } = useFavLayout();

  useEffect(() => {
    if (session) {
      onClose();
      const fetchFavourite = async () => {
        const res = await getFavourite();
        console.log(res);
        const favourite = res.data.map((item: any) => item.property.Ml_num);
        console.log(favourite);
        setFavourite(favourite);
      };
      fetchFavourite();
    }
  }, [session, onClose]);

  return (
    <Button type="button" onClick={() => logout()} className="bg-primary-800">
      Logout
    </Button>
  );
};

export default SignOut;
