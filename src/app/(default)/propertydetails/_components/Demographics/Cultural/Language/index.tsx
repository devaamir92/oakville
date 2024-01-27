'use client';

import React from 'react';

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface LanguageProps {
  data: {
    name: string;
    value: number;
  }[];
}

const barColors = ['#1f77b4', '#4c92c3', '#79add2', '#a5c9e1', '#1f77b4'];

const Language: React.FC<LanguageProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={170}>
      <BarChart
        width={600}
        height={200}
        data={data}
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
          {data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={barColors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Language;
