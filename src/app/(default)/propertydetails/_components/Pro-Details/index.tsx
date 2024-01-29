import React from 'react';

const PropertyDetails = [
  { key: 'Neighbourhood', value: 'Mimico' },
  { key: 'Ensuite laundry', value: 'Yes' },
  { key: 'Listed on', value: 'Jan 4, 2024' },
  { key: 'Parking', value: '2' },
  { key: 'Property type', value: 'Condo Townhouse' },
  { key: 'Property Taxes', value: '$ 4,500' },
  { key: 'Style:', value: '2 Storey w/Bsmt' },
  { key: 'MLS Size', value: '1521 sqft' },
  { key: 'Area', value: 'Peel' },
  { key: 'Drive', value: 'Private' },
  { key: 'Water', value: 'Municipal' },
  { key: 'Sewer', value: 'Sewers' },
  { key: 'Basement', value: 'Finished' },
  { key: 'Exterior', value: 'Brick' },
  { key: 'Garage', value: 'Attached' },
  { key: 'Garage Spaces', value: '2.0' },
  { key: 'Heat Source', value: 'Gas' },
  { key: 'Heat Type', value: 'Forced Air' },
  { key: 'Kitchens', value: '1' },
  { key: 'Rooms', value: '6' },
  { key: 'Washrooms', value: '3' },
  { key: 'Air Conditioning', value: 'Central Air' },
  { key: 'Fireplace Stove', value: 'Yes' },
];

function ProDetails() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-medium">Property details</p>
      <div className="flex gap-4">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {PropertyDetails.slice(0, 14).map(item => (
                <tr key={item.key} className="text-sm">
                  <td className="px-4 py-1.5 font-medium text-gray-500">
                    {item.key}
                  </td>
                  <td className="px-4 py-1.5 font-medium text-gray-700">
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
              {PropertyDetails.slice(9, 28).map(item => (
                <tr key={item.key} className="text-sm">
                  <td className="px-4 py-1.5 font-medium text-gray-500">
                    {item.key}
                  </td>
                  <td className="px-4 py-1.5 font-medium text-gray-700">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {PropertyDetails.slice(18, 27).map(item => (
                <tr key={item.key} className="text-sm">
                  <td className="px-4 py-1.5 font-medium text-gray-500">
                    {item.key}
                  </td>
                  <td className="px-4 py-1.5 font-medium text-gray-700">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}

export default ProDetails;
