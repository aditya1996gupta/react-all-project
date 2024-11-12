// src/context/TaskContext.js
import React, { createContext } from 'react';
import useTasks from '../hooks/useTasks';

// Create the TaskContext
export const TaskContext = createContext();

// Context provider component
export const TaskProvider = ({ children }) => {
    const { tasks, addTask, toggleTask, deleteTask } = useTasks();

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
