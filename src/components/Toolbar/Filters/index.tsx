import React from 'react';

import Checkbox from './Checkbox';

interface Props {
  data: {
    [key: string]: {
      id: number;
      name: string;
      value: string;
    }[];
  };
}

const Filters: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex w-screen flex-col flex-wrap gap-3 p-4 lg:max-w-[440px]">
      {Object.keys(data).map(type => (
        <div key={type} className="w-full">
          <h3 className="mb-2 text-sm font-semibold capitalize text-gray-500">
            {type}
          </h3>

          <Checkbox
            items={data[type].map(item => ({
              label: item.name,
              value: item.value,
              id: item.id,
            }))}
            utilities={type}
          />
        </div>
      ))}
    </div>
  );
};

export default Filters;
