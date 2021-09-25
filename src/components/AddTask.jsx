import React from 'react';
import "./AddTask.css";
import Button from './Button.jsx';

const AddTask = () => {
    return ( 
        <div className="add-task-container">
            <input type="text" className="add-task-input" />
            <div className="add-task-button-containe">
                <Button>Adicionar</Button>
            </div>
        </div>
    )
};
 
export default AddTask;