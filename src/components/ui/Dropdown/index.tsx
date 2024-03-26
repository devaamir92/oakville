import React, { useEffect, useRef, useState } from 'react';
import {
  Content,
  DropdownMenu,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

import cn from '@utils/cn';

interface DropdownProps {
  icon?: React.ReactNode;
  label?: string;
  title?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
  align?: 'start' | 'end' | 'center';
  contentClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  icon,
  label,
  className,
  ariaLabel,
  title,
  align = 'start',
  contentClassName,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (ref.current?.offsetWidth) {
      setWidth(ref.current.offsetWidth);
    }
  }, [ref.current?.offsetWidth]);

  return (
    <DropdownMenu>
      <Root>
        <Trigger ref={ref} asChild>
          <button
            type="button"
            title={title}
            area-label={ariaLabel}
            className={cn(
              'flex w-full items-center justify-between  text-sm text-white focus:outline-none',
              className
            )}
          >
            {label && <span className="truncate">{label}</span>}
            {icon}
          </button>
        </Trigger>
        <Portal>
          <Content
            align={align}
            className={cn(
              'z-50  overflow-y-auto rounded-[3px] bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
              contentClassName
            )}
            style={{
              minWidth: width <= 160 ? '160px' : `${width}px`,
            }}
            sideOffset={8}
          >
            {children}
          </Content>
        </Portal>
      </Root>
    </DropdownMenu>
  );
};

export default Dropdown;
