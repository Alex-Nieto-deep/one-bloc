import React from 'react';
import './TaskList'


function TaskList(props) {
  return (
    <section>
    <ul>
      {props.children}
    </ul>
  </section>
  );
}

export { TaskList };