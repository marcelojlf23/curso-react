import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuifb4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  // it's invoked each change of monitored variable in dependence list
  // if empty just execut when comp are executed by the first time
  // with empty list array (fetchTasks{,[]}), it's triggered when component are assembled
  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    }

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ... task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }
  
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks,
      {
        title: taskTitle,
        id: uuifb4(),
        completed: false
      }
    ];

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskDeletion={handleTaskDeletion} handleTaskClick={handleTaskClick}/>
          </>
        )} />
        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  );
}

export default App;