import React, { useContext, useState } from 'react';
import UserCard from '../components/UserCard';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Axios from 'axios';
import {
  Container,
  Col,
  Row,
  InputGroup,
  Button,
  Input,
  Form,
} from 'reactstrap';
import Repos from '../components/Repos';

function Home() {
  const context = useContext(UserContext);
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast('Not able to locate user  !', { type: 'error' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  if (!context.user?.email) {
    return <Navigate to='signin' />;
  }
  return (
    <Container>
      <Row className='mt-3'>
        <Col md='5'>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Please provide the username'
              />
              <Button color='primary'>Fetch User</Button>
            </InputGroup>
          </Form>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md='7'>{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
}

export default Home;
