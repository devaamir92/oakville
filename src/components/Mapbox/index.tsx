'use client';

import React, { useState } from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
  lat: number;
  lng: number;
  zoom: number;
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const Map: React.FC<Props> = ({ lat, lng, zoom }) => {
  const [viewState, setViewState] = useState({
    latitude: lat,
    longitude: lng,
    zoom,
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
    >
      <NavigationControl />
    </MapGL>
  );
};

export default Map;
