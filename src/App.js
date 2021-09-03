// import './App.css';
import React from 'react';
import {TaskCounter} from './TaskCounter'
import {TaskSearch} from './TaskSearch'
import {TaskList} from './TaskList'
import {TaskItem} from './TaskItem'
import {CreateTaskButton} from './CreateTaskButton'

const defaultTasks = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [tasks, setTasks] = React.useState(defaultTasks)

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
  return (
    <React.Fragment>
      <TaskCounter
        completedTasks={completedTasks}
        totalTasks={totalTasks}
      />
      <TaskSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TaskList>
        {searchedTasks.map(task => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </TaskList>

      <CreateTaskButton />
    </React.Fragment>
  );
}

export default App;
