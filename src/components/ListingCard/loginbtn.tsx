'use client';

import TooltipLogin from '@components/ui/Tooltip';

import { useLayout } from '@context/LayoutContext';
import cn from '@utils/cn';

interface LoginBtnProps {
  isLocked: any;
  status?: string;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ isLocked, status }) => {
  const { setLogin } = useLayout();

  return (
    <button
      onClick={() => setLogin(true)}
      type="button"
      aria-label="login required"
      className={cn('absolute inset-0 z-[2] w-full', {
        hidden: !isLocked,
      })}
      style={{
        background: 'rgba(0,0,0,0.1)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div
        className={cn('absolute inset-0 z-[3]', {
          hidden: !isLocked,
        })}
      >
        <div className="relative flex size-full items-center justify-center">
          <TooltipLogin
            title={
              status === 'U'
                ? 'Real estate boards require you to create an account to view sold listing.'
                : 'Real estate boards require you to be signed in to access this property.'
            }
          >
            <span className=" flex h-9 items-center justify-center rounded bg-white px-3 py-1.5 text-sm font-medium text-primary-500">
              Login Required
            </span>
          </TooltipLogin>
        </div>
      </div>
    </button>
  );
};

export default LoginBtn;
