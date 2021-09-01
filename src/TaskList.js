import React from 'react';


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