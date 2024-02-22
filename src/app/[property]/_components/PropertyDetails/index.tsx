import React from 'react';

const data = [
  { key: 'Area', value: 'Halton' },
  { key: 'Family Room', value: 'Yes' },
  { key: 'Heat Type', value: 'Forced Air' },
  { key: 'A/C', value: 'Central Air' },
  { key: 'Water', value: 'Munciple' },
  { key: 'Garage', value: 'Attached' },
  { key: 'Phys Hdcap-Equip', value: 'N' },
  { key: 'Exterior', value: 'Brick' },
  { key: 'UFFI', value: 'No' },
  { key: 'Neighbourhood', value: 'Rural Oakville' },
  { key: 'Fireplace', value: 'Yes' },
  { key: 'Heating', value: 'Gas' },
  { key: 'Sewers', value: 'Sewers' },
  { key: 'Garage Spaces', value: '2.0' },
  { key: 'Elevator', value: 'N' },
  { key: 'Laundry Level', value: 'Upper' },
  { key: 'Pool', value: 'Yes' },
  { key: 'Approx Age', value: '0-5' },
  // { key: 'MLS Size', value: '1521 sqft' },
  // { key: 'Parking', value: '2' },
  // { key: 'Property type', value: 'Condo Apt' },
  // { key: 'Parking type', value: 'Owned' },
  // { key: 'Style:', value: '2 Storey w/Bsmt' },
  // { key: 'Listed on', value: 'Jan 4, 2024' },
  // { key: 'Listed on', value: 'Jan 4, 2024' },
  // { key: 'Parking', value: '2' },
  // { key: 'Property type', value: 'Condo Townhouse' },
  // { key: 'Property Taxes', value: '$ 4,500' },
  // { key: 'Style:', value: '2 Storey w/Bsmt' },
  // { key: 'MLS Size', value: '1521 sqft' },
  // { key: 'Drive', value: 'Private' },
  // { key: 'Water', value: 'Municipal' },
  // { key: 'Basement', value: 'Finished' },
  // { key: 'Heat Source', value: 'Gas' },
  // { key: 'Kitchens', value: '1' },
  // { key: 'Rooms', value: '6' },
  // { key: 'Washrooms', value: '3' },
  // { key: 'Air Conditioning', value: 'Central Air' },
];

function PropertyDetails() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-medium">Details</p>
      <div className="flex flex-col gap-0 divide-y-[1px] divide-gray-300 md:flex-row md:gap-4 md:divide-y-0 lg:gap-12">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {data.slice(0, 9).map(item => (
                <tr key={item.key} className="text-sm">
                  <td className="py-1.5 font-medium text-gray-500">
                    {item.key}
                  </td>
                  <td className="py-1.5 text-right font-medium text-gray-700 md:text-left">
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
              {data.slice(9, 18).map(item => (
                <tr key={item.key} className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    {item.key}
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
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

export default PropertyDetails;
