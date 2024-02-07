'use client';

import React from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const Map = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 43.48683277118204,
    longitude: -79.7270483834316,
    zoom: 12.83,
  });

  return (
    <MapGL
      style={{ width: '100%', height: '100%' }}
      {...viewState}
      scrollZoom
      boxZoom
      doubleClickZoom
      onMove={evt => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
    />
  );
};

export default Map;
