import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Material Cost', value: 6.56 },
  { name: 'Sustaining Cost', value: 4.98 },
  { name: 'Development Cost', value: 4.23 },
  { name: 'Financing Cost', value: 3.56 },
];

function TopExpensesBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart layout="vertical" data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TopExpensesBarChart;
