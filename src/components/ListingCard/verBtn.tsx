'use client';

import TooltipLogin from '@components/ui/Tooltip';
import { useLayout } from '@context/LayoutContext';

import cn from '@utils/cn';

interface VerBtnProps {
  isLocked: any;
}

const VerBtn: React.FC<VerBtnProps> = ({ isLocked }) => {
  const { setVerify } = useLayout();

  return (
    <button
      type="button"
      aria-label="Verify required"
      onClick={() => setVerify(true)}
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
          <TooltipLogin title="Real estate boards require you to be signed in to access this property.">
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
