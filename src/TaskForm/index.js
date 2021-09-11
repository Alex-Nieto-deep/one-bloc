import React from 'react';
import { TaskContext } from '../TaskContext'
import './TaskForm.css';

function TaskForm() {

  const [ newTaskValue, setnewTaskValue ] = React.useState('');

  const onChange = (event) => {
    setnewTaskValue(event.target.value);
  }
  const {
    addTask,
    setOpenModal
  } = React.useContext(TaskContext);

  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nueva tarea</label>
      <textarea
        value = {newTaskValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TaskForm-buttonContainer">
        <button
          type="button"
          className="TaskForm-button TaskForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TaskForm-button TaskForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
  );
}

export { TaskForm };