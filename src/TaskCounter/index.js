import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskCounter.css'


function TaskCounter() {
  const {completedTasks, totalTasks} = React.useContext(TaskContext)
  return (
    <h2 className="TaskCounter">Has completado {completedTasks} de {totalTasks} Tareas</h2>
  );
}

export { TaskCounter };