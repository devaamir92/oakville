'use client';

import TooltipLogin from '@components/ui/Tooltip';
import { useLayout } from '@context/LayoutContext';

import cn from '@utils/cn';

interface VerBtnProps {
  isLocked: any;
  status?: string;
  showBtn?: boolean;
}

const VerBtn: React.FC<VerBtnProps> = ({ isLocked, status, showBtn }) => {
  const { setVerify } = useLayout();

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
            hidden: !isLocked || !showBtn,
          }
        )}
      >
        <div className="relative hidden size-full items-center justify-center lg:flex">
          <TooltipLogin title="Real estate boards require you to create an account to view sold listing.">
            <button
              type="button"
              onClick={() => setVerify(true)}
              className=" flex h-9 items-center justify-center rounded bg-primary-500 px-3 py-1.5 text-sm font-medium text-white"
            >
              Verification Required
            </button>
          </TooltipLogin>
        </div>
        <button
          type="button"
          onClick={() => setVerify(true)}
          className="flex flex-col gap-2 rounded border border-primary-500 bg-white p-2 shadow lg:hidden"
        >
          <p className="text-center text-sm font-semibold text-gray-700">
            {status === 'U'
              ? 'Real estate boards require you to create an account to view sold listing.'
              : 'Real estate boards require you to be signed in to access this property.'}
            <span className="mx-2 text-blue-500 underline">Verification</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default VerBtn;
