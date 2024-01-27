'use client';

import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

interface HomeAgeProps {
  data: { name: string; value: number }[];
}

const HomeAge: React.FC<HomeAgeProps> = ({ data }) => {
  return (
    <ResponsiveContainer
      width="60%"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '12px',
      }}
      height={150}
    >
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
          barSize={60}
          fill="#1d4ed8"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HomeAge;
