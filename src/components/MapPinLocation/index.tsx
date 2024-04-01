'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import MapGL from '@urbica/react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { FaCross, FaStarAndCrescent } from 'react-icons/fa';

import SikhIcon from '@icons/SikhIcon';
import HinduIcon from '@icons/Hindu';

import cn from '@utils/cn';

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
    religion?: string;
    type?: string;
  }[];
  icon?: React.ReactNode;
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
        {data &&
          data.map(item => {
            return (
              <Marker
                key={item.Lat}
                longitude={Number(item.Lng)}
                latitude={Number(item.Lat)}
              >
                <div className="group">
                  <button
                    type="button"
                    aria-label={item.name || 'property location'}
                    className={cn(
                      'absolute flex items-center justify-center gap-1 rounded-lg bg-primary-500 p-1.5 text-center font-normal text-white transition-all duration-100 after:absolute after:left-1/2 after:top-full after:ml-[-5px] after:border-4 after:border-solid after:border-x-transparent after:border-b-transparent after:border-t-primary',
                      {
                        'bg-red-600 after:border-t-red-600':
                          item.type === 'Public Schools',
                      },
                      {
                        'bg-blue-600 after:border-t-blue-600':
                          item.type === 'Catholic Schools',
                      },
                      {
                        'bg-yellow-600 after:border-t-yellow-600':
                          item.type === 'Montessori Schools',
                      },
                      {
                        'bg-green-600 after:border-t-green-600':
                          item.type === 'Private Schools',
                      }
                    )}
                    onClick={() => {
                      if (item.name || item.address) {
                        setOpen(true);
                        setPopup(item);
                      }
                    }}
                  >
                    {icon}
                    {(() => {
                      switch (item.religion) {
                        case 'hindu':
                          return <HinduIcon />;
                        case 'sikh':
                          return <SikhIcon />;
                        case 'christian':
                          return <FaCross size="16" />;
                        case 'islam':
                          return <FaStarAndCrescent size="16" />;
                        default:
                          return null;
                      }
                    })()}
                  </button>
                  <span className="absolute top-8 hidden min-w-fit whitespace-nowrap rounded bg-white p-2 text-base font-medium shadow group-hover:block">
                    {item.name}
                  </span>
                </div>
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
