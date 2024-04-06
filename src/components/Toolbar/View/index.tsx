'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FaList, FaLocationDot } from 'react-icons/fa6';

import { Button } from '@components/ui/Button';

interface Props {
  view?: string | null;
}

export default function ViewChanger({ view }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleViewChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (view === 'list') {
      params.set('view', 'map');
    } else {
      params.set('view', 'list');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      className="hidden !h-auto items-center gap-2 rounded-none !py-0 px-0  text-sm text-white lg:flex"
      variant="ghost"
      onClick={() => handleViewChange()}
    >
      {view === 'list' ? <FaLocationDot size={14} /> : <FaList size={14} />}
      {view === 'list' ? 'Map View' : 'List View'}
    </Button>
  );
}
