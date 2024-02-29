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
    <div className="flex max-w-[440px] flex-col gap-3 p-4">
      {Object.keys(data).map(type => (
        <div key={type}>
          <h3 className="mb-2 text-sm font-semibold capitalize text-gray-500">
            {type}
          </h3>
          <ul className="flex flex-wrap  gap-4">
            <Checkbox
              items={data[type].map(item => ({
                label: item.name,
                value: item.value,
                id: item.id,
              }))}
              utilities={type}
            />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
