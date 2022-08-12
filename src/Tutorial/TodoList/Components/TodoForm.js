import React, { useContext, useState } from 'react';
import { Form, FormGroup, Input, Button, InputGroup } from 'reactstrap';
import { TodoContext } from '../context/TodoContext';
import { ADD_TODO } from '../context/action.types';
import { v4 } from 'uuid';

function TodoForm() {
  const [todoString, setTodoString] = useState('');

  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === '') {
      return alert('Enter a Todo');
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type='text'
            name='todo'
            id='todo'
            placeholder='yours next todo'
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          ></Input>

          <Button color='warning'>Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}

export default TodoForm;
