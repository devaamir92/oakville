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

interface EduLevelProps {
  data: {
    name: string;
    value: number;
  }[];
}

const barColors = ['#059669', '#22c55e', '#34d399', '#86efac', '#059669'];

const EduLevel: React.FC<EduLevelProps> = ({ data }) => {
  const renderLegend = () => {
    return (
      <ul className="flex flex-col gap-1">
        {data.map((entry, index) => (
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
            {entry.name} {entry.value}%
          </li>
        ))}
      </ul>
    );
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, fill } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={5}
          textAnchor="middle"
          fontSize={14}
          fill={fill}
        >
          NBH
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={35}
          outerRadius={50}
          fill={fill}
          startAngle={0}
          endAngle={360}
        />
      </g>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={110}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
            activeIndex={0}
            activeShape={renderActiveShape}
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
    </div>
  );
};

export default EduLevel;
