'use client';

import React, { useContext, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';

import {
  addFavourite,
  addFavouriteAdmin,
  getFavourite,
} from '@lib/api/addFavourite';

import { useLayout } from '@context/LayoutContext';
import { useFavLayout } from '@context/FavContext';

interface LikeToggleProps {
  mls?: string;
  session: any;
}

const LikeToggle: React.FC<LikeToggleProps> = ({ mls, session }) => {
  const { setLogin } = useLayout();
  const { favourite, setFavourite } = useFavLayout();
  // const handleAddFavourite = async () => {
  //   if (session.user.role === 'User') {
  //     const res = await getFavourite();
  //     setFavourite(res.data);

  //     console.log(favourite);
  //   }
  // };

  const handleAddFavourite = async () => {
    if (session.user.role === 'User') {
      const res = await addFavourite(mls as string);
      setFavourite(res.data);

      console.log(res.data);
    } else {
      const res = await addFavouriteAdmin(mls as string);
      console.log(res);
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
      {/* session.user.role */}
      <button
        type="button"
        aria-label="Favourite"
        onClick={handleFavourite}
        className="text-red-500"
      >
        {favourite?.includes(mls) ? (
          <FaRegHeart className="text-red-500" />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  );
};

export default LikeToggle;
