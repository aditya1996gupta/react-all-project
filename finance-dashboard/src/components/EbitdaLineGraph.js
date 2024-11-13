import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', EBITDA: 1200 },
  { month: 'Feb', EBITDA: 2100 },
  { month: 'Mar', EBITDA: 800 },
  { month: 'Apr', EBITDA: 1600 },
  { month: 'May', EBITDA: 1400 },
  { month: 'Jun', EBITDA: 1800 },
  { month: 'Jul', EBITDA: 2300 },
];

function EbitdaLineGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="EBITDA" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default EbitdaLineGraph;
