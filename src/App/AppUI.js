import React from "react";
import {TaskCounter} from '../TaskCounter'
import {TaskSearch} from '../TaskSearch'
import {TaskList} from '../TaskList'
import {TaskItem} from '../TaskItem'
import {CreateTaskButton} from '../CreateTaskButton'
import { TaskContext } from '../TaskContext'


function AppIU() {
  return (
    <React.Fragment>
      <TaskCounter />
      <TaskSearch />

      <TaskContext.Consumer>
        {({error, loading, searchedTasks, toggleCompleteTask, deleteTask}) => (
          <TaskList>
            { error && <p>tranquilo, vuelve a cargar la pagina</p>}
            { loading && <p>Estamos cargando, un momento por favor</p>}
            { (!loading && !searchedTasks.length) && <p>Crea tu primera tarea</p>}


              {searchedTasks.map(task => (
                <TaskItem
                  key={task.text}
                  text={task.text}
                  completed={task.completed}
                  onCompleted={() => toggleCompleteTask(task.text)}
                  onDeleted={() => deleteTask(task.text)}
                />
              ))}
          </TaskList>
        )}
      </TaskContext.Consumer>

      <CreateTaskButton />
    </React.Fragment>
  );
}

export { AppIU };