'use client';

import React from 'react';

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const DominantLanguage = [
  { name: 'English', value: 11 },
  { name: 'Mandarin', value: 10 },
  { name: 'Arabic', value: 7 },
  { name: 'Urdu', value: 7 },
  { name: 'Multiple Languages', value: 6 },
];
const barColors = ['#1f77b4', '#4c92c3', '#79add2', '#a5c9e1', '#1f77b4'];
const pieColors = ['#1f77b4', '#a5c9e1'];
const ImmigrationStatus = [
  {
    status: 'Immigrant',
    value: 49,
  },
  {
    status: 'Non-Immigrant',
    value: 51,
  },
];

function PieLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: any) {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      fontSize={12}
      fontWeight={600}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {ImmigrationStatus[index].status} ({value}%)
    </text>
  );
}

function Cultural() {
  return (
    <div className="rounded border border-gray-300 bg-white ">
      <h4 className="px-4 py-2 text-lg font-medium text-black">Cultural</h4>
      <hr />
      <div className="flex">
        <div className="flex flex-1 flex-col gap-2 border-r border-gray-300 p-4">
          <p className="text-lg font-medium">Dominant Language</p>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart
              width={600}
              height={200}
              data={DominantLanguage}
              layout="vertical"
              margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
              barGap={5}
            >
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                width={150}
                fontWeight={600}
                fontSize={12}
                axisLine={false}
                tickLine={false}
                stroke="#000"
              />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#1f77b4"
                barSize={20}
                label={{
                  position: 'right',
                  fill: '#000',
                  formatter: (value: number) => `${value}%`,
                  fontSize: 12,
                }}
              >
                {DominantLanguage.map((entry, index) => (
                  <Cell key={`cell-${entry}`} fill={barColors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-1 flex-col gap-2 border-gray-300 p-4">
          <p className="inline-flex text-lg font-medium">Immigration Status</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={ImmigrationStatus}
                cx="50%"
                cy="50%"
                outerRadius={50}
                innerRadius={25}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label={PieLabel}
              >
                {ImmigrationStatus.map((entry, index) => (
                  <Cell
                    key={entry.status}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Cultural;
