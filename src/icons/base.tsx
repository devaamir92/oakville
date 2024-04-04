import React from 'react';

interface BaseProps {
  children?: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      height={14}
      width={14}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1080 1080"
      xmlSpace="preserve"
    >
      {children}
    </svg>
  );
};

export default Base;
