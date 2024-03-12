'use client';

import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { addFavourite, addFavouriteAdmin } from '@lib/api/addFavourite';

import { useLayout } from '@context/LayoutContext';
import { useFavLayout } from '@context/FavContext';

interface LikeToggleProps {
  mls?: string;
  session: any;
}

const LikeToggle: React.FC<LikeToggleProps> = ({ mls, session }) => {
  const { setLogin } = useLayout();
  const { favourite, setFavourite } = useFavLayout();

  const handleAddFavourite = async () => {
    if (session.user.role === 'User') {
      const res = await addFavourite(mls as string);
      setFavourite(res.data);
    } else {
      const res = await addFavouriteAdmin(mls as string);
      setFavourite(res.data);
    }
  };

  const handleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session) {
      setLogin(true);
    } else {
      handleAddFavourite();
    }
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        aria-label="Favourite"
        onClick={handleFavourite}
        className="text-red-500 outline-none focus:outline-none"
      >
        {favourite?.includes(mls) ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-red-500" />
        )}
      </button>
    </div>
  );
};

export default LikeToggle;
