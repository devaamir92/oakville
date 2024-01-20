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
  label: string;
  className?: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  icon,
  label,
  className,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current?.offsetWidth) {
      setWidth(ref.current.offsetWidth);
    }
  }, [ref.current?.offsetWidth]);

  return (
    <DropdownMenu>
      <Root
        onOpenChange={() => {
          setOpen(!open);
        }}
      >
        <Trigger ref={ref} asChild>
          <button
            type="button"
            className={cn(
              'flex w-full items-center justify-between  text-sm text-white focus:outline-none',
              className
            )}
          >
            <span className="mr-2 truncate">{label}</span>
            {icon}
          </button>
        </Trigger>
        <Portal>
          <Content
            className="z-50 overflow-y-auto rounded-[3px] bg-white p-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
            style={{
              minWidth: width,
            }}
            sideOffset={2}
          >
            {children}
          </Content>
        </Portal>
      </Root>
    </DropdownMenu>
  );
};

export default Dropdown;
