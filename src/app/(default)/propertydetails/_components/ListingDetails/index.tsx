'use client';

import React, { useState } from 'react';

import cn from '@utils/cn';
import { Button } from '@components/ui/Button';

function ListingDetails() {
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
        <span>
          The Cambie Collection by Pennyfarthing Homes continues its legacy on
          Vancouver&apos;s West Side with Basalt, located on 35th Ave and Cambie
          St. Boutique RARE half duplex townhome. Over 1500 sqft duplex style
          townhome with 2 parking spaces. Large open and functional floor plan
          with quality finishing, Bosch appliances, incl gas stove, modern high
          gloss cabinets, quartz countertops and hardwood flooring. Powder room
          on the main floor. This home features 2 large bedrooms up both with
          walk in closets and 2 full baths up. Storage room down with easy
          access. This home sits very close to QE Park and tennis courts.
          Transit at your doorstep. Don&apos;t miss this great opportunity... Oh
          BTW there is even A/C for those hot summers.
        </span>
        <div className="mt-5 flex flex-col gap-1">
          <p className="text-md font-medium">Extras</p>
          <span>
            1 Fridge, 2 Stove, Washer, Dryer, CAC, CVAC & Accessories, Ceiling
            Fan, All ELF&apos;s, Garden Shed (As-Is), GDO with one remote.
            Kitchen table & chairs, Wall Unit in Living Room, All Sceneries.
          </span>
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
}

export default ListingDetails;
