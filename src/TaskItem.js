import React from 'react';
import './TaskItem.css'

function TaskItem(props) {
  const onComplete = () => {
    alert('Se completo la tarea ' + props.text);
  };

  const onDelete = () => {
    alert('Se elimino la tarea ' + props.text);
  }
  return (
    <li className="TaskItem">
    <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}
      >
      √
    </span>
    <p className={`TaskItem-p ${props.completed && 'TaskItem-p--complete'}`}>
      {props.text}
    </p>
    <span className="Icon Icon-delete"
      onClick={onDelete}
      >
      X
    </span>
  </li>
  );
}

export { TaskItem };