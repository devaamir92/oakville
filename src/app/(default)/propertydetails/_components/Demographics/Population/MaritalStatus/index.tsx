'use client';

import React from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';

interface MaritalStatusProps {
  data: { name: string; value: number }[];
}

const barColors = ['#00BDDD', '#9C27B0', '#FF0000', '#324056', '#BCD530'];

const renderLegend = ({ ...rest }) => {
  return (
    <ul className="flex flex-col gap-1">
      {rest.payload.map((entry: any, index: any) => (
        <li
          key={entry.name}
          className="flex items-center gap-3 text-xs font-medium"
        >
          <svg width="10" height="10" className="rounded-full">
            <rect
              width="10"
              height="10"
              fill={barColors[index]}
              stroke="none"
            />
          </svg>
          {entry.value} {entry.payload.value}%
        </li>
      ))}
    </ul>
  );
};

const renderShape = function PieShape(props: any) {
  const { cx, cy, fill } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={5} textAnchor="middle" fontSize={14} fill={fill}>
        NBH
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={50}
        outerRadius={70}
        fill={fill}
        startAngle={0}
        endAngle={360}
      />
    </g>
  );
};

const MaritalStatus: React.FC<MaritalStatusProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          width="100%"
          height="100%"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          fill="#8884d8"
          dataKey="value"
          activeIndex={0}
          activeShape={renderShape}
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
  );
};

export default MaritalStatus;
