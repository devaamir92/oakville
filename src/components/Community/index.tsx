'use client';

import React, { useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import CommunityCard from './card';
import cn from '@utils/cn';

interface CommunityProps {
  data: any[];
}

function Community({ data }: CommunityProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= data.length ? 0 : nextIndex;
    });
  };

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? data.length - 1 : nextIndex;
    });
  };

  const cardCount = Math.ceil(data.length / 4);
  const rows = Array.from({ length: cardCount }, (_, i) => (
    <div
      key={i}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data.slice(i * 4, (i + 1) * 4).map(item => (
        <CommunityCard
          key={item.title}
          title={item.title}
          image={item.imageUrl}
          href={item.href}
          alt={item.alt}
        />
      ))}
    </div>
  ));

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous"
        disabled={currentIndex === 0}
        onClick={handlePrevClick}
        className={cn(
          'absolute -left-10 top-1/2 -translate-y-1/2 disabled:opacity-50',
          { 'cursor-not-allowed': currentIndex === 0 }
        )}
      >
        <FaArrowLeft />
      </button>
      <div className="overflow-x-hidden">{rows[currentIndex]}</div>
      <button
        type="button"
        aria-label="Next"
        disabled={currentIndex === cardCount - 1}
        onClick={handleNextClick}
        className={cn(
          'absolute -right-10 top-1/2 -translate-y-1/2 disabled:opacity-50',
          {
            'cursor-not-allowed': currentIndex === cardCount - 1,
          }
        )}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Community;
