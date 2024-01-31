import React from 'react';

const data = [
  {
    name: 'Property Type',
    value: 'Detached',
  },
  {
    name: 'Property Tax',
    value: '$4,500',
  },
  {
    name: 'Lot Size',
    value: '50 x 100',
  },
  {
    name: 'Total Parking Spaces',
    value: '4',
  },
  {
    name: 'Storeys',
    value: '2',
  },
  {
    name: 'Exterior',
    value: 'Brick',
  },
  {
    name: 'Basement',
    value: 'Finished',
  },
  {
    name: 'Dir/Cross St',
    value: 'Dundas St & Preserve Dr',
  },
];

function ListingHighlights() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-medium">Highlights</p>
      <div className="flex gap-12">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {data.slice(0, 4).map(item => (
                <tr key={item.name} className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    {item.name}
                  </td>
                  <td className=" py-1.5 font-medium text-gray-700">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {data.slice(4, 20).map(item => (
                <tr key={item.name} className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    {item.name}
                  </td>
                  <td className=" py-1.5 font-medium text-gray-700">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListingHighlights;
