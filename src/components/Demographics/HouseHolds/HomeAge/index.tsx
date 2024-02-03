'use client';

import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';

interface HomeAgeProps {
  data: { name: string; value: number }[];
}

const HomeAge: React.FC<HomeAgeProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <BarChart
        width={400}
        height={200}
        data={data}
        barGap={20}
        margin={{
          top: 20,
          right: 0,
          left: 0,
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
          barSize={50}
          fill="#114B5F"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HomeAge;
