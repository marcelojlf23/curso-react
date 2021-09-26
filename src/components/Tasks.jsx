import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion })=> {
    return (
        <>
            {
                tasks.map((task, index) => <Task key={index} task={task} handleTaskDeletion={handleTaskDeletion} handleTaskClick={handleTaskClick}/>)
            }
        </>
    )
}

export default Tasks;