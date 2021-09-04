import React from "react";
import {TaskCounter} from '../TaskCounter'
import {TaskSearch} from '../TaskSearch'
import {TaskList} from '../TaskList'
import {TaskItem} from '../TaskItem'
import {CreateTaskButton} from '../CreateTaskButton'

function AppIU({
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
  searchedTasks,
  toggleCompleteTask,
  deleteTask,
}) {
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
            onCompleted={() => toggleCompleteTask(task.text)}
            onDeleted={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>

      <CreateTaskButton />
    </React.Fragment>
  );
}

export { AppIU };