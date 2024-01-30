import React from 'react';

const PropertyDetails = [
  { key: 'Neighbourhood', value: 'Mimico' },
  { key: 'Property type', value: 'Condo Apt' },
  { key: 'Heat Type', value: 'Forced Air' },
  { key: 'Ensuite laundry', value: 'Yes' },
  { key: 'MLS Size', value: '1521 sqft' },
  { key: 'Parking', value: '2' },
  { key: 'Parking type', value: 'Owned' },
  { key: 'Style:', value: '2 Storey w/Bsmt' },
  { key: 'Listed on', value: 'Jan 4, 2024' },
  { key: 'Property Taxes', value: '$ 4,500' },
];

function ProDetails() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-medium">Property details</p>
      <div className="flex gap-4">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {PropertyDetails.slice(0, 5).map(item => (
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
              {PropertyDetails.slice(5, 10).map(item => (
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
      </div>
    </div>
  );
}

export default ProDetails;
