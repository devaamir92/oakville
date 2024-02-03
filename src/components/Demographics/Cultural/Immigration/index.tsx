'use client';

import React from 'react';

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from 'recharts';

interface ImmigrationProps {
  data: {
    name: string;
    value: number;
  }[];
}

const pieColors = ['#5d4a66', '#d64933'];

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
        innerRadius={35}
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
    <ResponsiveContainer width="100%" height={100}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={50}
          innerRadius={35}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
          activeIndex={0}
          activeShape={PieShape}
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>

        <Legend
          verticalAlign="middle"
          layout="vertical"
          align="right"
          content={
            <ul className="flex flex-col gap-2">
              {data.map((entry, index) => (
                <li key={`legend-${entry.name}`} className="flex items-center">
                  <span
                    className="mr-2 size-3 rounded-full"
                    style={{ backgroundColor: pieColors[index] }}
                  />
                  <span className="text-sm">
                    {entry.name} {entry.value}%
                  </span>
                </li>
              ))}
            </ul>
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Immigration;
