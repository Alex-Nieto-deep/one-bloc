// import './App.css';
import React from 'react';
import {AppIU} from './AppUI'

// const defaultTasks = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {

  const localStorageTasks = localStorage.getItem('TASKS_V1');
  let parsedTasks;

  if(!localStorageTasks) {
    localStorage.setItem('TASKS_V1', JSON.stringify([]))
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStorageTasks);
  }

  const [searchValue, setSearchValue] = React.useState('');
  const [tasks, setTasks] = React.useState(parsedTasks);

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if(!searchValue >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {
      const searchText = searchValue.toUpperCase();
      const taskText = task.text.toUpperCase();
      return taskText.includes(searchText);
    })
  }

  const saveTasks = (newTasks) => {
    localStorage.setItem('TASKS_V1', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  const toggleCompleteTask = (text) => {
    const indexTask = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks[indexTask].completed = !newTasks[indexTask].completed;
    saveTasks(newTasks);
  }

  const deleteTask = (text) => {
    const indexTask = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(indexTask, 1);
    saveTasks(newTasks);
  }

  return (
    <AppIU
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      toggleCompleteTask={toggleCompleteTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;
