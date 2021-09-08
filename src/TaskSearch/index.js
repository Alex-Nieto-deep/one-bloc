import React from 'react';
import './TaskSearch.css'
import { TaskContext } from '../TaskContext';

function TaskSearch() {

  const {searchValue, setSearchValue} = React.useContext(TaskContext);

  const onChangeValueSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <input
      className="TaskSearch"
      placeholder="Buscar"
      onChange={onChangeValueSearch}
      value={searchValue}
      />
  );
}

export { TaskSearch };