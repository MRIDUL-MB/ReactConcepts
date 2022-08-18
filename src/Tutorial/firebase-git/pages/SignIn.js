import React, { useContext, useState } from 'react';
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from 'reactstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

function SignIn() {
  const context = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        context.setUser({
          email: user.email,
          uid: user.uid,
        });
        toast('Logged In', {
          type: 'success',
        });
      })
      .catch((err) => {
        toast(err.message, {
          type: 'error',
        });
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signin();
  };

  if (context.user?.email) {
    return <Navigate to='/' />;
  }

  return (
    <Container className='text-center'>
      <Row>
        <Col lg={6} className='offset-lg-3 mt-5'>
          <Card>
            <Form onSubmit={handleFormSubmit}>
              <CardHeader className=''>SignIn here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for='email' sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='provide your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for='password' sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='your password here'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type='submit' block color='primary'>
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
