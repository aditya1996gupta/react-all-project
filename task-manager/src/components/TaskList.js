// src/components/TaskList.js
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
    const { tasks, addTask } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText(""); // Clear input
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="New task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
