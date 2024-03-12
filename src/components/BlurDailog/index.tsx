import React from 'react';

import LoginSteps from './Login';

interface BlurDailogProps {
  isVerify: boolean | undefined;
}

const BlurDailog: React.FC<BlurDailogProps> = ({ isVerify }) => {
  return (
    <div
      className="absolute inset-0 z-10 flex h-full items-center justify-center"
      style={{
        background: 'rgba(0,0,0,0.1)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <LoginSteps />
    </div>
  );
};

export default BlurDailog;
