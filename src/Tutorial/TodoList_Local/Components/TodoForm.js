import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, InputGroup } from 'reactstrap';
import { v4 } from 'uuid';

function TodoForm({ addTodos }) {
  const [todoString, setTodoString] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === '') {
      return alert('Enter a Todo');
    }

    const todo = {
      todoString,
      id: v4(),
    };
    addTodos((prev) => [...prev, todo]);
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
