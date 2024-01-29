import React from 'react';

import Base from './base';

interface MaleWithChildProps {
  className?: string;
}

const MaleWithChild: React.FC<MaleWithChildProps> = ({ className }) => {
  return (
    <Base className={className}>
      <g>
        <g>
          <ellipse
            transform="matrix(0.9871 -0.1602 0.1602 0.9871 -45.3283 59.5476)"
            cx="346.68"
            cy="310.93"
            rx="48.31"
            ry="48.31"
          />
          <path
            d="M441.31,462.55l-0.26-2.39c-3.04-28.52-5.45-51.05-20.02-67.42c-15-16.84-39.5-23.36-81.9-21.79
			c-48.91,1.79-63.06-26.87-64.33-29.69c0.01,0.02,0.01,0.03,0.01,0.05l-0.04-0.1c0.01,0.02,0.02,0.04,0.03,0.05
			c-0.28-1.08-4.74-15.61-21.01-11.61c-9.23,2.27-12.43,7.79-13.13,14c-0.65,5.77,0.67,11.59,3.5,16.66
			c5.88,10.53,21.37,31.93,53.84,41.67V576.7c0,11.85,9.81,21.41,21.76,20.99c11.38-0.4,20.24-10.1,20.24-21.49v-92.12l11.82-0.05
			v92.67c0,11.85,9.81,21.41,21.76,20.99c11.38-0.4,20.24-10.1,20.24-21.49V416.35c0,0,0,0,0.01,0c7.15,7.57,8.94,24.33,11.43,47.64
			l0.25,2.4c0.99,9.23,8.8,16.08,17.88,16.08c0.64,0,1.29-0.03,1.94-0.1C435.21,481.31,442.37,472.44,441.31,462.55z"
          />
        </g>
        <g>
          <ellipse
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.928 109.7547)"
            cx="131.02"
            cy="58.41"
            rx="58.41"
            ry="58.41"
          />
          <path
            d="M261.56,299.39l-20-91.81h0.01c-2.64-38.41-34.58-68.23-73.08-68.23h-84.4c-29.14,0-54.38,17.04-66.16,41.8
			c-2.77,5.8-4.79,12.02-5.95,18.55l-1.15,12.77v0.05L0.09,331.76c-1.05,11.55,7.47,21.75,19.03,22.79c0.64,0.06,1.27,0.09,1.9,0.09
			c10.75,0,19.91-8.21,20.9-19.12l9.81-108.93l1.35-14.97l0.12-0.01c1.07-5.38,9.19-6.23,11.76-1.77c0.27,0.46,0.45,0.98,0.54,1.51
			c0.07,0.34,0.1,0.69,0.1,1.03l0.1,4.79v355.3c0,14.36,11.64,26,26,26s26-11.64,26-26V370.35h17.71v202.12c0,14.36,11.64,26,26,26
			c14.36,0,26-11.64,26-26v-359.4c0-1.9,0.8-3.39,1.98-4.37c2.03-1.72,5.21-1.93,7.38-0.16c0.63,0.51,1.18,1.2,1.59,2.06l1.62,3.42
			l20.54,94.31c2.14,9.83,10.84,16.54,20.5,16.54c1.48,0,2.99-0.16,4.49-0.49C256.84,321.91,264.03,310.72,261.56,299.39z"
          />
        </g>
      </g>
    </Base>
  );
};

export default MaleWithChild;