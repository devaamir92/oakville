'use client';

import TooltipLogin from '@components/ui/Tooltip';
import { useLayout } from '@context/LayoutContext';

import cn from '@utils/cn';

interface VerBtnProps {
  isLocked: any;
  status?: string;
}

const VerBtn: React.FC<VerBtnProps> = ({ isLocked, status }) => {
  const { setVerify } = useLayout();

  return (
    <button
      type="button"
      aria-label="Verify required"
      onClick={() => setVerify(true)}
      className={cn('blurContent absolute inset-0 z-[2] w-full', {
        hidden: !isLocked,
      })}
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
              Verification Required
            </span>
          </TooltipLogin>
        </div>
      </div>
    </button>
  );
};

export default VerBtn;
