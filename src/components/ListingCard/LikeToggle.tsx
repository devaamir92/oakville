'use client';

import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

import { useLayout } from '@context/LayoutContext';
import { addFavorite } from '@lib/api/addFavorite';

interface LikeToggleProps {
  listingId?: string;
  session: any;
}

const LikeToggle: React.FC<LikeToggleProps> = ({ listingId, session }) => {
  const { toggle } = useLayout();

  const handleAddFavorite = async () => {
    // console.log('Adding to favorites');
    const res = await addFavorite(listingId as string);
    console.log(res);
  };

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session) {
      toggle();
    } else if (session.user.role === 'User') {
      handleAddFavorite();
    } else {
      // Show a message that only users can add to favorites
    }
  };

  return (
    <div className="flex items-center">
      {/* session.user.role */}
      <button
        type="button"
        aria-label="Favourite"
        onClick={handleFavorite}
        className="text-red-500"
      >
        <FaRegHeart size={18} />
      </button>
    </div>
  );
};

export default LikeToggle;
