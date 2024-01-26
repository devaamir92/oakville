'use client';

import React from 'react';

import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

const data = [
  { name: 'Single', value: 27 },
  { name: 'Married', value: 67 },
  { name: 'Divorced/Separated', value: 5 },
  { name: 'Other', value: 1 },
];

const dataAge = [
  { name: '0-9', NBH: 18 },
  { name: '10-14', NBH: 8 },
  { name: '15-19', NBH: 8 },
  { name: '20-29', NBH: 12 },
  { name: '30-44', NBH: 31 },
  { name: '45-54', NBH: 13 },
  { name: '55-64', NBH: 6 },
  { name: '65-74', NBH: 2 },
  { name: '75+', NBH: 2 },
];

const barColors = ['#1f77b4', '#4c92c3', '#79add2', '#a5c9e1', '#1f77b4'];

const renderLegend = () => {
  return (
    <ul>
      {data.map((entry, index) => (
        <li
          key={entry.name}
          className="flex items-center gap-3 text-sm font-medium"
        >
          <svg width="10" height="10" className="rounded-full">
            <rect
              width="10"
              height="10"
              fill={barColors[index]}
              stroke="none"
            />
          </svg>
          {entry.name} {entry.value}%
        </li>
      ))}
    </ul>
  );
};

function Population() {
  return (
    <div className="rounded border border-gray-300 bg-white ">
      <h4 className="px-4 py-2 text-lg font-medium text-black">Population</h4>
      <hr />
      <div className="flex">
        <div className="flex flex-1 flex-col border-r border-gray-300 p-4">
          <p className="text-lg font-medium">Marital Status</p>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={barColors[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                content={renderLegend}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col border-gray-300 p-4">
          <p className="text-lg font-medium">Age Distibution</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              width={400}
              height={200}
              data={dataAge}
              margin={{
                top: 10,
                left: 20,
                right: 20,
                bottom: 0,
              }}
            >
              <XAxis
                axisLine={false}
                tickLine={false}
                fontSize={14}
                stroke="#000"
                dataKey="name"
              />

              <Tooltip />
              <Bar
                dataKey="NBH"
                label={{
                  position: 'top',
                  fill: '#000',
                  fontSize: 12,
                }}
                barSize={30}
                fill="#8884d8"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Population;
