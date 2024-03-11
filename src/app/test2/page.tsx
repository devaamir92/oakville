import React from 'react';

import MapPinLocation from '@components/MapPinLocation';

function page() {
  return (
    <div className="h-96">
      <MapPinLocation
        data={[
          {
            Lng: '-79.74806084049912',
            Lat: '43.47151010338547',
          },
        ]}
      />
    </div>
  );
}

export default page;
