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

interface LanguageProps {
  data: {
    name: string;
    value: number;
  }[];
}

const Language: React.FC<LanguageProps> = ({ data }) => {
  function hexToRgb(hex: string): number[] | null {
    const match = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    return match ? match.slice(1, 4).map(c => parseInt(c, 16)) : null;
  }

  function shade(value: number, baseColor: string): string {
    const v = value / 100;
    const rgb = hexToRgb(baseColor);
    if (!rgb) {
      return baseColor;
    }
    const shadedRgb = rgb.map(c => Math.round(c * (1 - v)));
    return `rgb(${shadedRgb.join(',')})`;
  }

  return (
    <ResponsiveContainer width="100%" height={115}>
      <BarChart
        width={600}
        height={104}
        data={data}
        layout="vertical"
        margin={{ right: 30, left: -20 }}
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
          {data.map(entry => (
            <Cell key={`cell-${entry}`} fill={shade(entry.value, '#1f77b4')} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Language;
