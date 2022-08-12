import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaCheckDouble } from 'react-icons/fa';

export default function Todos({ todos, remove }) {
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
