// src/components/Task.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
    const { toggleTask, deleteTask } = useContext(TaskContext);

    return (
        <li className={task.completed ? "completed" : ""}>
            {task.text}
            <div>
                <button className="complete-btn" onClick={() => toggleTask(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Task;
