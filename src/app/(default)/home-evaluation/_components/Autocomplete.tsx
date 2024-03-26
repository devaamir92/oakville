import type { FC } from 'react';

import React from 'react';

import Autocomplete from 'react-google-autocomplete';

interface AutoProps extends React.ComponentPropsWithoutRef<'input'> {
  onSelectAddress: (e: any) => void;
}

const AutoAddress: FC<AutoProps> = ({ onSelectAddress, ...props }) => {
  return (
    <Autocomplete
      className="size-full px-2"
      apiKey="AIzaSyB1fd77vj_-qwGSQcXbdfMfv9LQxIOkpa8"
      onPlaceSelected={place => {
        onSelectAddress(place && place.formatted_address);
      }}
      libraries={['places']}
      options={{
        types: ['address'],
        componentRestrictions: { country: 'ca' },
      }}
      {...props}
    />
  );
};
export default AutoAddress;
