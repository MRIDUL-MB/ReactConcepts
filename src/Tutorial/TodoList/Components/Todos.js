import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { FaCheckDouble } from 'react-icons/fa';
import { TodoContext } from '../context/TodoContext';
import { REMOVE_TODO } from '../context/action.types';

export default function Todos() {
  const { todos, dispatch } = useContext(TodoContext);
  const remove = (id) => {
    console.log('remove');
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };
  return (
    <ListGroup className='mt-5 mb-2 items'>
      {todos.map((todo) => {
        return (
          <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span className='float-right' onClick={() => remove(todo.id)}>
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
