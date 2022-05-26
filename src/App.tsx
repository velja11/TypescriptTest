import React, { useState } from 'react';
import Todo from './models/todo';
import Todos from './components/Todos';
import NewTodoItem from './components/NewTodo';
import TodosContextProvider from './store/todo-context2';


function App() {
  
  
  return (
    <TodosContextProvider>
    <NewTodoItem  />
     <Todos />
    </TodosContextProvider>
  );
}

export default App;
