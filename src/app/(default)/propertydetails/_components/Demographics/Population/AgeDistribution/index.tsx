'use client';

import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';

interface AgeDistributionProps {
  data: { name: string; value: number }[];
}

const AgeDistribution: React.FC<AgeDistributionProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart
        width={400}
        height={100}
        data={data}
        margin={{
          top: 15,
          left: 10,
          right: 10,
          bottom: 0,
        }}
      >
        <XAxis
          axisLine={false}
          tickLine={false}
          fontSize={12}
          stroke="#000"
          dataKey="name"
        />

        <Bar
          dataKey="value"
          label={{
            position: 'top',
            fill: '#000',
            fontSize: 12,
          }}
          barSize={25}
          fill="#7765e3"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AgeDistribution;
