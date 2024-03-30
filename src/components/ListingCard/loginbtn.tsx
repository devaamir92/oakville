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
    <div
      className={cn('blurContent absolute inset-0 z-[2] w-full', {
        hidden: !isLocked,
      })}
    >
      <div
        className={cn(
          'absolute inset-0 z-[3] flex items-center justify-center p-4',
          {
            hidden: !isLocked,
          }
        )}
      >
        <div className="relative hidden size-full items-center justify-center lg:flex">
          <TooltipLogin
            title={
              status === 'U'
                ? 'Real estate boards require you to create an account to view sold listing.'
                : 'Real estate boards require you to be signed in to access this property.'
            }
          >
            <button
              type="button"
              onClick={() => setLogin(true)}
              className=" flex h-9 items-center justify-center rounded bg-primary-500 px-3 py-1.5 text-sm font-medium text-white"
            >
              Login Required
            </button>
          </TooltipLogin>
        </div>
        <button
          type="button"
          onClick={() => setLogin(true)}
          className="flex flex-col gap-2 rounded bg-white p-2 lg:hidden"
        >
          <p className="text-center text-sm font-semibold text-gray-700">
            {status === 'U'
              ? 'Real estate boards require you to create an account to view sold listing.'
              : 'Real estate boards require you to be signed in to access this property.'}
            <span className="mx-2 text-blue-500 underline">Login Here</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default LoginBtn;
