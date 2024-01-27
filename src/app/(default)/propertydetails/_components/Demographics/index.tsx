import React from 'react';

import Population from './Population';
import Cultural from './Cultural';
import SocioEconomic from './SocioEconomic';
import HouseHolds from './HouseHolds';

function Demographics() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Population />
      <Cultural />
      <SocioEconomic />
      <HouseHolds />
    </div>
  );
}

export default Demographics;
