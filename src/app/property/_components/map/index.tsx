'use client';

import React from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const [viewState, setViewState] = React.useState({
    latitude,
    longitude,
    zoom: 12.83,
  });

  return (
    <div id="map" className="fle flex flex-col gap-5">
      <h3 className="flex items-center gap-1 text-lg font-medium 2xl:text-xl">
        The Preserve Oakville Neighbourhood
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

export default Map;
