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

interface EmploymentProps {
  data: {
    name: string;
    value: number;
  }[];
}

const barColors = ['#059669', '#34d399'];

const Employment: React.FC<EmploymentProps> = ({ data }) => {
  const renderLegend = () => {
    return (
      <ul>
        {data.map((entry, index) => (
          <li
            key={entry.name}
            className="flex items-center gap-3 text-xs font-medium"
          >
            <div className="flex justify-between">
              {entry.name === 'Employed' ? (
                <div className="flex gap-2">
                  <div className="border-r border-r-gray-300 pr-2">
                    <h2
                      className="text-xl font-bold"
                      style={{
                        color: barColors[index],
                      }}
                    >
                      {entry.value}%
                    </h2>
                    <p className="text-xs">{entry.name}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm">Dominant Profession #1</p>
                      <p className="text-gray-500">
                        Business Finance Administration
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Dominant Profession #2</p>
                      <p className="text-xs text-gray-500">Management</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2
                    className="text-xl font-bold"
                    style={{
                      color: barColors[index],
                    }}
                  >
                    {entry.value}%
                  </h2>
                  <p className="text-xs">{entry.name}</p>
                </div>
              )}
            </div>
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
          innerRadius={30}
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
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
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

export default Employment;
