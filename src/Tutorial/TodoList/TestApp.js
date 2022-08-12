import React from 'react';
import { useReducer } from 'react';
import todoReducer from './Tutorial/TodoList/context/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { TodoContext } from './Tutorial/TodoList/context/TodoContext';
import './App.css';
import TodoForm from './Tutorial/TodoList/Components/TodoForm';
import Todos from './Tutorial/TodoList/Components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>TODO APP WITH CONTEXT API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
