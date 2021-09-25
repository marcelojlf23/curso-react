import React, { useState } from 'react';
import "./AddTask.css";
import Button from './Button.jsx';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)     
        
        setInputData('');
    }

    return ( 

        <div className="add-task-container">
            <input 
                type="text" 
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input" />
            <div className="add-task-button-containe">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
};
 
export default AddTask;