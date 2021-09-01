import React from 'react';
import './TaskSearch.css'

function TaskSearch() {

  const [searchValue, setSearchValue] = React.useState('');

  const onChangeValueSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return [
    <input
      className="TaskSearch" placeholder="Buscar"
      onChange={onChangeValueSearch}
      value={searchValue}
      />,
    <p>{searchValue}</p>
  ];
}

export { TaskSearch };