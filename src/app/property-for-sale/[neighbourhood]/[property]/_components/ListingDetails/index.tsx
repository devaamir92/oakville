'use client';

import React, { useState } from 'react';

import { Button } from '@components/ui/Button';
import cn from '@utils/cn';

interface ListingDetailsProps {
  Ad_text: string;
  Extras: string;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({ Ad_text, Extras }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <p className="text-md font-medium">Description</p>
      <div
        className={cn(
          'text-justify text-sm',
          showMore ? 'max-h-full overflow-auto' : 'max-h-16 overflow-hidden'
        )}
      >
        <span>{Ad_text}</span>
        <div className="mt-5 flex flex-col gap-1">
          <p className="text-md font-medium">Extras</p>
          {Extras && <span>{Extras}</span>}
        </div>
      </div>
      <Button
        className="w-fit p-0 text-blue-500 hover:no-underline"
        variant="link"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </div>
  );
};

export default ListingDetails;
