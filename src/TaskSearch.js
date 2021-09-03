import React from 'react';
import './TaskSearch.css'

function TaskSearch({searchValue, setSearchValue}) {

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