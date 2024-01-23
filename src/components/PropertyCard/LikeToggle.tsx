'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const LikeToggle: React.FC = () => {
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
          size={20}
          className="cursor-pointer text-primary-500"
          onClick={handleLike}
        />
      ) : (
        <FaRegHeart
          size={20}
          className="cursor-pointer text-primary-500"
          onClick={handleLike}
        />
      )}
    </div>
  );
};

export default LikeToggle;
