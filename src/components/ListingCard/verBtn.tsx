'use client';

import TooltipLogin from '@components/ui/Tooltip';

import cn from '@utils/cn';

interface VerBtnProps {
  isLocked: any;
}

const VerBtn: React.FC<VerBtnProps> = ({ isLocked }) => {
  return (
    <button
      type="button"
      aria-label="login required"
      className={cn('absolute inset-0 z-[2] bg-red-500', {
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
          <TooltipLogin title="Real estate boards require you to be signed in to access sold prices history.">
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
