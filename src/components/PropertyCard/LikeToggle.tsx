'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import cn from '@utils/cn';

interface LikeToggleProps {
  className?: string;
}

const LikeToggle: React.FC<LikeToggleProps> = ({ className }) => {
  const [like, setLike] = useState(false);

  const handleLike = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setLike(!like);
  };

  return (
    <div>
      {like ? (
        <FaHeart
          className={cn('cursor-pointer text-primary-500', className)}
          onClick={handleLike}
        />
      ) : (
        <FaRegHeart
          className={cn('cursor-pointer text-primary-500', className)}
          onClick={handleLike}
        />
      )}
    </div>
  );
};

export default LikeToggle;
