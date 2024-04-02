'use client';

import React, { useState } from 'react';

// import dynamic from 'next/dynamic';

import MapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from '@urbica/react-map-gl';

// import Cluster from '@urbica/react-map-gl-cluster';

import { FaHome } from 'react-icons/fa';

import mapLine from '@assets/map/map.json';

import cn from '@utils/cn';

import Popup from './Popup';

import 'mapbox-gl/dist/mapbox-gl.css';
import { popupDetail } from './actions';

// const ClusterMarker = dynamic(() => import('./Maker').then(mod => mod.default));

interface MapProps {
  data: {
    Ml_num: string;
    Lng: string;
    Lat: string;
    Lp_dol: number;
    Slug: string;
  }[];
  selectedMls?: string;
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaW1hdHRlaCIsImEiOiJja3J2dTZqamEwYTZpMnZsanUxcWhrcW9jIn0.c3dQrAz3T8LQNnfvP3z_Wg';

const Map: React.FC<MapProps> = ({ data, selectedMls }) => {
  const [popup, setPopup] = useState<any>(null);
  const [open, setOpen] = useState(false);

  // const component = (props: any) => {
  //   return (
  //     <ClusterMarker
  //       latitude={props.latitude}
  //       longitude={props.longitude}
  //       pointCount={props.pointCount}
  //     />
  //   );
  // };

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
        {/* 
        <Cluster
          radius={30}
          extend={150}
          // ref={clusterRef}
          nodeSize={36}
          component={component}
        >
          
        </Cluster> */}

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
                setPopup(res);
                setOpen(true);
              }}
              className="relative inline-block cursor-pointer select-none"
            >
              <span
                className={cn(
                  'absolute flex items-center justify-center gap-1 rounded-md bg-green-800 p-2 text-center font-normal text-white transition-all duration-100 after:absolute after:left-1/2 after:top-full after:ml-[-5px] after:border-4 after:border-solid after:border-x-transparent after:border-b-transparent after:border-t-primary hover:scale-150 hover:bg-green-600',
                  {
                    'scale-150 bg-green-600': item.Ml_num === selectedMls,
                  }
                )}
              >
                <FaHome />
                {Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  maximumFractionDigits: 2,
                }).format(item.Lp_dol)}
              </span>
            </button>
          </Marker>
        ))}

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
