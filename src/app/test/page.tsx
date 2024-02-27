import React from 'react';

import Map from '@components/Mapbox';

const data = [
  {
    id: 1,
    latitude: '43.47987763732569',
    longitude: '-79.72205359484337',
    lp_dol: 1321321321,
    slug: '405-dundas-st-w8092538',
  },
  {
    id: 2,
    latitude: '43.4869806981343',
    longitude: '-79.72146284418334',
    lp_dol: 232132121,
    slug: '102-grovewood-common-cres-w8090776',
  },
  {
    id: 3,
    latitude: '43.48642962847345',
    longitude: '-79.72576688470645',
    lp_dol: 654653,
    slug: '297-oak-walk-dr-w8088910',
  },
  {
    id: 4,
    latitude: '43.49224622135329',
    longitude: '-79.72036573581471',
    lp_dol: 4984654654,
    slug: '1416-lakeport-cres-w8087832',
  },
];

function page() {
  return (
    <div className="h-screen">
      <Map data={data} />
    </div>
  );
}

export default page;
