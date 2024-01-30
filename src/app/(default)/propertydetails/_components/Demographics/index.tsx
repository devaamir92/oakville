'use client';

import React from 'react';

import Cultural from './Cultural';
import HouseHolds from './HouseHolds';
import Population from './Population';
import SocioEconomic from './SocioEconomic';

function Demographics() {
  return (
    <div className="flex flex-auto flex-col">
      <Population />
      <Cultural />
      <SocioEconomic />
      <HouseHolds />
    </div>
  );
}

export default Demographics;
