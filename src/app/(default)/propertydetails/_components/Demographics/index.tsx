import React from 'react';

import Population from './Population';
import Cultural from './Cultural';

function Demographics() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Population />
      <Cultural />
    </div>
  );
}

export default Demographics;
