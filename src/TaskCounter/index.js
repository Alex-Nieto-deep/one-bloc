import React from 'react';
import './TaskCounter.css'


function TaskCounter({completedTasks, totalTasks}) {
  return (
    <h2 className="TaskCounter">Has completado {completedTasks} de {totalTasks} Tareas</h2>
  );
}

export { TaskCounter };