'use client';

import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

interface AgeDistributionProps {
  data: { name: string; value: number }[];
}

const AgeDistribution: React.FC<AgeDistributionProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        width={400}
        height={200}
        data={data}
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
          fontSize={12}
          stroke="#000"
          dataKey="name"
        />

        <Tooltip />
        <Bar
          dataKey="value"
          label={{
            position: 'top',
            fill: '#000',
            fontSize: 12,
          }}
          barSize={30}
          fill="#818cf8"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AgeDistribution;
