'use client';

import React from 'react';

import { FaHome } from 'react-icons/fa';

import dynamic from 'next/dynamic';

import MapGL, { Layer, Source } from '@urbica/react-map-gl';

import mapLine from '@assets/map/map.json';

import 'mapbox-gl/dist/mapbox-gl.css';

const Marker = dynamic(() =>
  import('@urbica/react-map-gl').then(mod => mod.Marker)
);

interface MapProps {
  data: {
    Lng: string;
    Lat: string;
  }[];
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const MapPinLocation: React.FC<MapProps> = ({ data }) => {
  return (
    <div className="relative size-full">
      <MapGL
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={43.65107}
        longitude={-79.347015}
        zoom={11.9}
        doubleClickZoom
        onViewportChange={() => {}}
        boxZoom
        scrollZoom
      >
        {/* <Source id="boundaries" type="geojson" data={mapLine} />
        <Layer
          id="boundaries"
          type="line"
          source="boundaries"
          paint={{
            'line-color': '#28777E',
            'line-width': 3,
          }}
        /> */}

        {data.map(item => {
          return (
            <Marker
              key={item.Lat}
              longitude={Number(item.Lng)}
              latitude={Number(item.Lat)}
            >
              <div className="absolute flex items-center justify-center gap-1 rounded-md bg-primary-500 p-2 text-center font-normal text-white transition-all duration-100 after:absolute after:left-1/2 after:top-full after:ml-[-5px] after:border-4 after:border-solid after:border-x-transparent after:border-b-transparent after:border-t-primary">
                <FaHome />
              </div>
            </Marker>
          );
        })}
      </MapGL>
    </div>
  );
};

export default MapPinLocation;
