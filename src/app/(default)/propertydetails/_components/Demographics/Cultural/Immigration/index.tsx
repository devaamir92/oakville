'use client';

import React from 'react';

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';

interface ImmigrationProps {
  data: {
    name: string;
    value: number;
  }[];
}

const pieColors = ['#1f77b4', '#a5c9e1'];

const PieLabel = function PieLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  ...rest
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
      {rest.name} {value}%
    </text>
  );
};

const PieShape = function PieShape(props: any) {
  const { cx, cy, fill } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={5} textAnchor="middle" fontSize={14} fill={fill}>
        NBH
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={30}
        outerRadius={50}
        fill={fill}
        startAngle={0}
        endAngle={360}
      />
    </g>
  );
};

const Immigration: React.FC<ImmigrationProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={50}
          innerRadius={30}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          label={PieLabel}
          activeIndex={0}
          activeShape={PieShape}
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Immigration;
