import React from 'react';

import VerifyUser from '@components/VerifyUser';

import LoginSteps from './Login';

interface BlurDailogProps {
  session: any;
  isLocked: boolean;
}

const BlurDailog: React.FC<BlurDailogProps> = ({ session, isLocked }) => {
  return (
    <div className="blurContent absolute inset-0 z-10 flex h-full items-center justify-center">
      {!session && <LoginSteps />}
      {session && !session?.user.verified && isLocked && <VerifyUser />}
    </div>
  );
};

export default BlurDailog;
