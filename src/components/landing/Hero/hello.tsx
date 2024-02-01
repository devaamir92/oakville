'use client';

import React from 'react';
import Lottie from 'react-lottie';

import hello from '@assets/hello.json';

function HelloText() {
  return (
    <div className="flex-1">
      <Lottie
        options={{
          animationData: hello,
          loop: true,
          autoplay: true,
        }}
      />
    </div>
  );
}

export default HelloText;
