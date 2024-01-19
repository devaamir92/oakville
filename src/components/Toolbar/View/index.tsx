'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FaList, FaLocationDot } from 'react-icons/fa6';

import { Button } from '@components/ui/Button';

export default function ViewChanger() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleViewChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get('view') === 'list') {
      params.set('view', 'map');
    } else {
      params.set('view', 'list');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      className="flex !h-auto items-center gap-2 rounded-none !py-0 px-0  text-sm text-white"
      variant="ghost"
      onClick={() => handleViewChange()}
    >
      {searchParams.get('view') === 'list' ? (
        <FaLocationDot size={14} />
      ) : (
        <FaList size={14} />
      )}
      {searchParams.get('view') === 'list' ? 'Map View' : 'List View'}
    </Button>
  );
}
