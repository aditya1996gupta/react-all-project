// src/hooks/useTasks.js
import { useState, useEffect } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState(() => {
        // Load tasks from local storage on initial load
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        // Save tasks to local storage whenever tasks change
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Add a new task
    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    // Toggle task completion
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return {
        tasks,
        addTask,
        toggleTask,
        deleteTask
    };
};

export default useTasks;
