import React from 'react';
import './TaskSearch.css'

function TaskSearch() {
  const onChangeValueSearch = (event) => {
    console.log(event.target.value);
  }
  return (
    <input
      className="TaskSearch" placeholder="Buscar"
      onChange={onChangeValueSearch}

      />
  );
}

export { TaskSearch };