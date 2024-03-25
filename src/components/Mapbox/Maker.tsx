import dynamic from 'next/dynamic';
import React from 'react';

const Marker = dynamic(() =>
  import('@urbica/react-map-gl').then(mod => mod.Marker)
);

interface ClusterMarkerProps {
  latitude: number;
  longitude: number;
  pointCount: number;
  onClick?: (props: any) => void;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = props => {
  return (
    <Marker latitude={props.latitude} longitude={props.longitude}>
      <div
        role="button"
        tabIndex={0}
        className="flex size-8 justify-center rounded-full bg-primary p-2 text-white shadow-md"
        onClick={() => {
          const { onClick, ...otherProps } = props;
          onClick?.(otherProps);
        }}
        onKeyPress={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            // eslint-disable-next-line no-console
            console.log('Pressed!');
          }
        }}
      >
        <span className="text-sm">{props.pointCount}</span>
      </div>
    </Marker>
  );
};

export default ClusterMarker;
