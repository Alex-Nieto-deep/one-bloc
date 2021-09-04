import React from 'react';
import './CreateTaskButton.css'

function CreateTaskButton(prop) {
  const onClickButton = () => {
    alert('Aca deber ir el nodal');
  }
  return (
    <button
      className="CreateTaskButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTaskButton };