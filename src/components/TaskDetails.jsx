import React from 'react';
import { useHistory, useParams } from 'react-router';
import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-contianer">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
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