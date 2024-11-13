import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Money In', value: 556568 },
  { name: 'Money Out', value: 556568 },
];

const COLORS = ['#0088FE', '#FF8042'];

function FinancialRingChart() {
  // Calculate total for displaying in the center
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      {/* Centered number display */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        ₹{(total / 100000).toFixed(2)} Cr
      </div>
    </div>
  );
}

export default FinancialRingChart;
