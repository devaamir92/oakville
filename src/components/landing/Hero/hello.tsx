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

  return <Lottie ariaLabel="Hello" options={defaultOptions} />;
};

export default HelloText;
