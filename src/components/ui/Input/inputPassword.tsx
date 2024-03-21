'use client';

import React, { useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import cn from '@utils/cn';

interface InputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState<string>('password');
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex h-9 w-full items-center gap-1 rounded border border-[#CBD5E1] px-2 py-1">
      <input
        ref={ref}
        className={cn(
          'password-input w-full bg-transparent outline-none',
          className
        )}
        type={type}
        {...props}
      />
      <button
        type="button"
        aria-label="show/hide"
        onClick={() => {
          setShowPassword(!showPassword);
          setType(showPassword ? 'password' : 'text');
        }}
      >
        <span
          className={cn('text-[#A0AEC0]', {
            'opacity-0': !ref.current?.value,
          })}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </button>
    </div>
  );
};

export default InputPassword;
