'use client';

import React, { useState } from 'react';

// import dynamic from 'next/dynamic';

import MapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from '@urbica/react-map-gl';
import { groupBy } from 'lodash-es';

// import Cluster from '@urbica/react-map-gl-cluster';

import mapLine from '@assets/map/map.json';
import { usePropLayout } from '@context/PropertiesContext';

import cn from '@utils/cn';

import Popup from './Popup';
import { popupDetail } from './actions';

import 'mapbox-gl/dist/mapbox-gl.css';

// const ClusterMarker = dynamic(() => import('./Maker').then(mod => mod.default));

interface MapProps {
  data: {
    Ml_num: string;
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
  const { selectedMls, pageMls } = usePropLayout();

  const groupData = groupBy(data, 'Lat');

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
        {Object.values(groupData).map(item => (
          <Marker
            key={item[0].Ml_num}
            latitude={parseFloat(item[0].Lat)}
            longitude={parseFloat(item[0].Lng)}
          >
            <button
              aria-label="marker"
              type="button"
              onClick={async () => {
                const res = await popupDetail(
                  item.map(property => property.Ml_num)
                );

                setPopup(res);
                setOpen(true);
              }}
              className={cn(
                'relative size-4 cursor-pointer rounded-full bg-tertiary-500 text-white shadow-[3px_4px_5px_#0000008f] ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-125',
                {
                  'bg-red-500 ring-gray-300': pageMls?.includes(item[0].Ml_num),
                },
                {
                  'scale-150 bg-red-500':
                    item[0].Lat + item[0].Lng === selectedMls,
                }
              )}
            >
              <span
                className={cn(
                  'absolute -left-[15px] top-6 flex  h-5 w-12 items-center justify-center rounded border border-primary-300 bg-white text-xs font-medium text-black shadow after:absolute after:bottom-full after:left-1/2 after:ml-[-5px] after:border-4 after:border-solid after:border-x-transparent after:border-b-primary-400 after:border-t-transparent',
                  {
                    'border-white bg-red-500 text-gray-300 after:border-b-red-500':
                      pageMls?.includes(item[0].Ml_num),
                  },
                  {
                    hidden: item.length === 1,
                  }
                )}
              >
                {item.length} units
              </span>
              {/* <span
                className={cn(
                  'absolute inset-x-0 z-50 size-4 cursor-pointer rounded-full bg-tertiary-500 text-white shadow-[3px_4px_5px_#0000008f] ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-125',
                  {
                    'scale-150 bg-red-500':
                      item[0].Lat + item[0].Lng === selectedMls,
                  },
                  {
                    'bg-red-500 ring-gray-300': pageMls?.includes(
                      item[0].Ml_num
                    ),
                  }
                )}
              >
                {item.length > 1 && item.length}
              </span> */}
            </button>
          </Marker>
        ))}

        {/* {data.map(item => (
          <Marker
            key={item.Ml_num}
            latitude={parseFloat(item.Lat)}
            longitude={parseFloat(item.Lng)}
          >
            <button
              aria-label="marker"
              type="button"
              onClick={async () => {
                const res = await popupDetail(item.Slug);
                setPopup(res);
                setOpen(true);
              }}
              className={cn('relative z-0')}
            >
              <span
                className={cn(
                  'absolute inset-x-0 z-50 size-4 cursor-pointer rounded-full bg-tertiary-500 shadow-[3px_4px_5px_#0000008f] ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-125',
                  {
                    'scale-150 bg-red-500': item.Lat + item.Lng === selectedMls,
                  },
                  {
                    'bg-red-500 ring-gray-300': pageMls?.includes(item.Ml_num),
                  }
                )}
              />
            </button>
          </Marker>
        ))} */}

        <NavigationControl position="top-left" />
      </MapGL>
      {popup && (
        <Popup
          show={open}
          items={popup}
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
