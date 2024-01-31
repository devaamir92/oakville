'use client';

import React from 'react';

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface StructureTypeProps {
  data: {
    name: string;
    value: number;
  }[];
}

const barColors = ['#114B5F', '#295d6f', '#416f7f', '#58818f', '#70939f'];

const StructureType: React.FC<StructureTypeProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={115}>
      <BarChart
        width={600}
        height={100}
        data={data}
        layout="vertical"
        margin={{ right: 10, left: -20 }}
        barGap={3}
      >
        <XAxis type="number" hide />
        <YAxis
          dataKey="name"
          type="category"
          width={150}
          height={100}
          fontWeight={600}
          fontSize={12}
          axisLine={false}
          tickLine={false}
          stroke="#000"
        />

        <Bar
          dataKey="value"
          fill="#1f77b4"
          barSize={12}
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

export default StructureType;
