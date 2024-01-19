'use client';

import React from 'react';
import Lottie from 'react-lottie';

import hello from '@assets/hello.json';

function HelloText() {
  return (
    <div>
      <Lottie
        options={{
          animationData: hello,
          loop: true,
          autoplay: true,
        }}
        style={{ width: 600 }}
      />
    </div>
  );
}

export default HelloText;
