import React from 'react';
import './TaskItem.css'

function TaskItem(props) {

  return (
    <li className="TaskItem">
    <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onCompleted}
      >
      √
    </span>
    <p className={`TaskItem-p ${props.completed && 'TaskItem-p--complete'}`}>
      {props.text}
    </p>
    <span className="Icon Icon-delete"
      onClick={props.onDeleted}
      >
      X
    </span>
  </li>
  );
}

export { TaskItem };