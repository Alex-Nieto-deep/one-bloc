// import './App.css';
import React from 'react';
import {AppIU} from './AppUI'
import {TaskContext, TaskProvider} from '../TaskContext';


function App() {


  return (
    <TaskProvider>
      <AppIU/>
    </TaskProvider>
  );
}

export default App;
