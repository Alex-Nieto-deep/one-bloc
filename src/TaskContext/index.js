import React from "react";
import {useLocalStorage} from './useLocalStorage';


const TaskContext = React.createContext();

function TaskProvider(props) {

  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TASKS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];

  if(!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {
      const searchText = searchValue.toUpperCase();
      const taskText = task.text.toUpperCase();
      return taskText.includes(searchText);
    })
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
    <TaskContext.Provider value={{
      loading,
      error,
      completedTasks,
      totalTasks,
      searchValue,
      setSearchValue,
      searchedTasks,
      toggleCompleteTask,
      deleteTask,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };