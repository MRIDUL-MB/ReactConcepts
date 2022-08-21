import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import Axios from 'axios';

function UserSearch() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const fectchAPI = async () => {
    const { data } = await Axios.get(
      `https://api.github.com/search/users?q=${username}&per_page=50`
    );
    console.log(data.items);
    setUsers(data.items);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fectchAPI();
  };

  return (
    <Container className='mt-3 '>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type='text'
            id='search_users'
            placeholder='Type Name Here...'
            className='w-50 mx-auto p-md-3 p-2'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Input>
        </FormGroup>
      </Form>
      {users.map((item) => {
        return <h3>{item.login}</h3>;
      })}
    </Container>
  );
}

export default UserSearch;
