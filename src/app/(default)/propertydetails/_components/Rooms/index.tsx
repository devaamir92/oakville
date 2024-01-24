import React from 'react';

const tableData = [
  {
    room: 'Dining',
    size: '12.99 X 12.01 ft',
    features: ['Hardwood Floor', 'Pot Lights'],
  },
  {
    room: 'Living',
    size: '21.49 X 11.84 ft',
    features: ['Hardwood Floor', 'Pot Lights', 'Gas Fireplace'],
  },
  {
    room: 'Kitchen',
    size: '12.34 X 8.99 ft',
    features: ['Hardwood Floor', 'Breakfast Bar', 'Quartz Counter'],
  },
  {
    room: 'Breakfast',
    size: '8.99 X 8.99 ft',
    features: ['Hardwood Floor', 'Pot Lights', 'W/O To Sunroom'],
  },
  {
    room: 'Sunroom',
    size: '31.50 X 19.09 ft',
    features: ['Hot Tub', 'W/O To Yard'],
  },
  {
    room: 'Prim Bdrm',
    size: '14.93 X 12.01 ft',
    features: ['Hardwood Floor', 'Gas Fireplace', '5 Pc Ensuite'],
  },
  {
    room: '2nd Br',
    size: '14.83 X 10.99 ft',
    features: ['Hardwood Floor', 'Pot Lights'],
  },
  {
    room: '3rd Br',
    size: '15.49 X 10.83 ft',
    features: ['Hardwood Floor', 'Pot Lights', '4 Pc Ensuite'],
  },
  {
    room: 'Loft',
    size: '14.01 X 11.15 ft',
    features: ['Hardwood Floor', 'Pot Lights', 'Open Concept'],
  },
  {
    room: 'Rec',
    size: '37.83 X 21.65 ft',
    features: ['Gas Fireplace', 'Pot Lights'],
  },
  {
    room: 'Br',
    size: '20.57 X 13.85 ft',
    features: ['Broadloom', 'Pot Lights'],
  },
  {
    room: '4th Br',
    size: '14.17 X 10.24 ft',
    features: ['Broadloom', 'Pot Lights'],
  },
];

function Rooms() {
  return (
    <div className="mt-4 flex-1">
      <table className="min-w-full border border-gray-300 bg-white text-sm">
        <thead className="bg-[#f2f2f2]">
          <tr>
            <th className="border-b px-4 py-2 text-left">Room</th>
            <th className="border-b px-4 py-2 text-left">Dimensions</th>
            <th className="border-b px-4 py-2 text-left">Features</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.room} className="hover:bg-gray-100">
              <td className="border-b px-4 py-2">{item.room}</td>
              <td className="border-b px-4 py-2">{item.size}</td>
              <td className="border-b px-4 py-2">{item.features.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
