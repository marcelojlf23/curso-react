import React from 'react';
import { useParams } from 'react-router';
import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams()
    return ( 
        <>
            <div className="back-button-contianer">
                <Button>Voltar</Button>
            </div>
            <div className="task-datails-container">
                <h3>{params.taskTitle}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus sint excepturi cupiditate vel eligendi. Quam.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;