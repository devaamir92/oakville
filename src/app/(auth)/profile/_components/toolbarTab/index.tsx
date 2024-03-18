'use client';

import cn from '@utils/cn';
import { usePathname, useRouter } from 'next/navigation';

interface Tab {
  param?: string | undefined;
}

const tabs = [
  {
    title: 'Favourite',
    value: 'fav',
  },
  {
    title: 'Saved Search',
    value: 'srch',
  },
];

const ToolbarTab: React.FC<Tab> = ({ param }) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleParams = (title: string) => {
    const params = new URLSearchParams();
    params.set('tab', title);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-4">
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.title}
          onClick={() => handleParams(tab.value)}
          className={cn({
            'h-9 rounded bg-primary-500 px-4 text-sm text-white transition-all duration-300 ease-in-out':
              tab.value === param || (tab.value === 'fav' && !param),
          })}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default ToolbarTab;
