import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuifb4 } from "uuid";

const App = () => {
  const [tasks, setTesks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ])
  
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks,
      {
        title: taskTitle,
        id: uuifb4(),
        completed: false
      }
    ];

    setTesks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;