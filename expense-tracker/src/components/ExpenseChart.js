// src/components/ExpenseChart.js
import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ExpenseChart = () => {
    const { expenses } = useContext(ExpenseContext);

    const data = expenses.reduce((acc, expense) => {
        const existing = acc.find(item => item.name === expense.category);
        if (existing) {
            existing.value += expense.amount;
        } else {
            acc.push({ name: expense.category, value: expense.amount });
        }
        return acc;
    }, []);

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default ExpenseChart;
