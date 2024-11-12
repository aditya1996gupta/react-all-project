// src/App.js
import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

function App() {
    return (
        <ExpenseProvider>
            <div className="App">
                <h1>Expense Tracker</h1>
                <ExpenseForm />
                <ExpenseChart />
                <ExpenseList />
            </div>
        </ExpenseProvider>
    );
}

export default App;
