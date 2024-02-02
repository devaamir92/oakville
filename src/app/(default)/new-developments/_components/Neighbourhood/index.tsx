'use client';

import React from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const Neighbourhood = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 43.48683277118204,
    longitude: -79.7270483834316,
    zoom: 12.83,
  });

  return (
    <div id="map" className="fle flex flex-col gap-5">
      <h3 className="flex items-center gap-1 text-lg font-medium text-gray-800 2xl:text-xl">
        Neighbourhood
      </h3>
      <div className="h-56 overflow-hidden rounded">
        <MapGL
          style={{ width: '100%', height: '100%' }}
          {...viewState}
          scrollZoom
          boxZoom
          doubleClickZoom
          onMove={evt => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        >
          <NavigationControl />
        </MapGL>
      </div>
    </div>
  );
};

export default Neighbourhood;
