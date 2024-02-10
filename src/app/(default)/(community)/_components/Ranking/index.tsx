'use client';

import React from 'react';
import { Cell, Legend, Pie, PieChart, Sector } from 'recharts';

interface Props {
  ranking: number;
}

const COLORS = ['#124589', '#3498DB'];

const renderShape = function PieShape(props: any) {
  const { cx, cy, fill } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={5} textAnchor="middle" fontSize={12} fill={fill}>
        {props.payload.value}/10
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={25}
        outerRadius={35}
        fill={fill}
        startAngle={0}
        endAngle={360}
      />
    </g>
  );
};
const RankingPie: React.FC<Props> = ({ ranking }) => {
  const data = [
    { name: 'Group A', value: ranking },
    { name: 'Group B', value: 10 - ranking },
  ];

  return (
    <PieChart width={150} height={100}>
      <Pie
        data={data}
        width="100%"
        height="100%"
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={-270}
        innerRadius={25}
        outerRadius={35}
        fill="#8884d8"
        dataKey="value"
        activeIndex={0}
        activeShape={renderShape}
      >
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        verticalAlign="bottom"
        align="center"
        iconType="circle"
        iconSize={10}
        layout="horizontal"
        wrapperStyle={{ fontSize: 12 }}
        content={({ payload }) => {
          return (
            <div className="mt-2 flex items-center justify-center gap-2">
              <span>Fraser Ranking</span>
            </div>
          );
        }}
      />
    </PieChart>
  );
};

export default RankingPie;
