'use client';

import React from 'react';
import Lottie from 'react-lottie';

import hello from '@assets/hello.json';

const HelloText: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
  };

  return (
    <div className="flex-1">
      <Lottie ariaLabel="Hello" options={defaultOptions} />
    </div>
  );
};

export default HelloText;
