// src/components/ExpenseList.js
import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);

    return (
        <div className="expense-list">
            {expenses.map((expense) => (
                <div key={expense.id} className="expense-item">
                    <p>{expense.description} - ${expense.amount} ({expense.category})</p>
                    <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseList;
