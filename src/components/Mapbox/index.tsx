'use client';

import React, { useState } from 'react';
import MapGL, { Layer, NavigationControl, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
  lat: number;
  lng: number;
  zoom: number;
  geojson?: any;
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const Map: React.FC<Props> = ({ lat, lng, zoom, geojson }) => {
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
      bearing={0} // Rotate the map
      doubleClickZoom
      onMove={evt => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
    >
      <Source id="boundaries" type="geojson" data={geojson} />
      <Layer
        id="boundaries"
        type="line"
        source="boundaries"
        paint={{
          'line-color': '#28777E',
          'line-width': 3,
        }}
      />
      <NavigationControl showZoom showCompass visualizePitch />
    </MapGL>
  );
};

export default Map;
