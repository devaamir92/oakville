'use client';

import React from 'react';

import { Button } from '@components/ui/Button';

function Verification() {
  const handleValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Verification Required');
  };

  return (
    <div>
      <Button
        onClick={e => handleValidation(e)}
        className=" bg-white text-base font-medium text-primary-500 transition-all duration-200 ease-in-out hover:bg-primary-100"
      >
        Verification Required
      </Button>
    </div>
  );
}

export default Verification;
