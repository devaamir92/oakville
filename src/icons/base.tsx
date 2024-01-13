import React from 'react';

interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ className, children }) => {
  return (
    <svg
      className={className}
      version="1.1"
      width={14}
      height={14}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      xmlSpace="preserve"
    >
      {children}
    </svg>
  );
};

export default Base;
