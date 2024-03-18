'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import MapGL, { Layer } from '@urbica/react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import Modal from './Popup';

const Marker = dynamic(() =>
  import('@urbica/react-map-gl').then(mod => mod.Marker)
);

interface MapProps {
  data?: {
    Lng: string | number;
    Lat: string | number;
    name?: string;
    address?: string;
  }[];
  icon: React.ReactNode;
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const MapPinLocation: React.FC<MapProps> = ({ data, icon }) => {
  const [popup, setPopup] = useState<any>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative size-full">
      <MapGL
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={data ? Number(data[0].Lat) : 43.47151010338547}
        longitude={data ? Number(data[0].Lng) : -79.74806084049912}
        zoom={11.9}
        doubleClickZoom
        onViewportChange={() => {}}
        boxZoom
        scrollZoom
      >
        <Layer
          id="boundaries"
          type="line"
          source="boundaries"
          paint={{
            'line-color': '#28777E',
            'line-width': 3,
          }}
        />

        {data &&
          data.map(item => {
            return (
              <Marker
                key={item.Lat}
                longitude={Number(item.Lng)}
                latitude={Number(item.Lat)}
              >
                <button
                  type="button"
                  aria-label={item.name || 'property location'}
                  className="absolute flex items-center justify-center gap-1 rounded-md bg-primary-500 p-2 text-center font-normal text-white transition-all duration-100 after:absolute after:left-1/2 after:top-full after:ml-[-5px] after:border-4 after:border-solid after:border-x-transparent after:border-b-transparent after:border-t-primary"
                  onClick={() => {
                    if (item.name || item.address) {
                      setOpen(true);
                      setPopup(item);
                    }
                  }}
                >
                  {icon}
                </button>
              </Marker>
            );
          })}
      </MapGL>
      <Modal
        show={open}
        item={popup}
        handleModalClose={() => {
          setOpen(false);
          setPopup(null);
        }}
      />
    </div>
  );
};

export default MapPinLocation;
