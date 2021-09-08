import React from 'react';
import './CreateTaskButton.css'

function CreateTaskButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
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