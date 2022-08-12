import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './App.css';
import TodoForm from './Tutorial/TodoList_Local/Components/TodoForm';
import Todos from './Tutorial/TodoList_Local/Components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem('todos');
    if (local) {
      setTodos(JSON.parse(local));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  console.log(todos);
  const remove = (id) => {
    setTodos((todo) => {
      return todo.filter((item) => item.id !== id);
    });
  };

  return (
    <Container fluid>
      <h1>TODO APP WITH CONTEXT API</h1>
      <Todos todos={todos} remove={remove} />
      <TodoForm addTodos={setTodos} />
    </Container>
  );
};

export default App;
