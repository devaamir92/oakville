'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';

import MapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from '@urbica/react-map-gl';

import Cluster from '@urbica/react-map-gl-cluster';

import { FaHome } from 'react-icons/fa';

import mapLine from '@assets/map/map.json';

import Popup from './Popup';

import 'mapbox-gl/dist/mapbox-gl.css';
import { popupDetail } from './actions';

const ClusterMarker = dynamic(() => import('./Maker').then(mod => mod.default));

interface MapProps {
  data: {
    Ml_num: number;
    Lng: string;
    Lat: string;
    Lp_dol: number;
    Slug: string;
  }[];
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const Map: React.FC<MapProps> = ({ data }) => {
  const [popup, setPopup] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const component = (props: any) => {
    return (
      <ClusterMarker
        onClick={() => {
          console.log('click');
        }}
        latitude={props.latitude}
        longitude={props.longitude}
        pointCount={props.pointCount}
      />
    );
  };

  return (
    <div className="relative size-full">
      <MapGL
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={43.47151010338547}
        longitude={-79.74806084049912}
        zoom={11.9}
        doubleClickZoom
        onViewportChange={() => {}}
        boxZoom
        scrollZoom
        onMove={(e: any) => console.log(e)}
      >
        <Source id="boundaries" type="geojson" data={mapLine} />
        <Layer
          id="boundaries"
          type="line"
          source="boundaries"
          paint={{
            'line-color': '#28777E',
            'line-width': 3,
          }}
        />

        <Cluster
          radius={30}
          extend={150}
          // ref={clusterRef}
          nodeSize={36}
          component={component}
        >
          {data.map(item => (
            <Marker
              key={item.Ml_num}
              latitude={parseFloat(item.Lat)}
              longitude={parseFloat(item.Lng)}
            >
              <button
                type="button"
                onClick={async () => {
                  const res = await popupDetail(item.Slug);
                  console.log(res);
                  setPopup(res);
                  setOpen(true);
                }}
                className="relative inline-block cursor-pointer select-none"
              >
                <span className="absolute flex items-center justify-center gap-1 rounded-md bg-green-800 p-2 text-center font-normal text-white transition-all duration-100 after:absolute after:left-1/2 after:top-full after:ml-[-5px] after:border-4 after:border-solid after:border-x-transparent after:border-b-transparent after:border-t-primary hover:scale-150 hover:bg-green-600">
                  <FaHome />
                  {Intl.NumberFormat('en-US', {
                    notation: 'compact',
                    maximumFractionDigits: 2,
                  }).format(item.Lp_dol)}
                </span>
              </button>
            </Marker>
          ))}
        </Cluster>

        <NavigationControl position="top-left" />
      </MapGL>
      {popup && (
        <Popup
          show={open}
          item={popup}
          handleModalClose={() => {
            setOpen(false);
            setPopup(null);
          }}
        />
      )}
    </div>
  );
};

export default Map;
