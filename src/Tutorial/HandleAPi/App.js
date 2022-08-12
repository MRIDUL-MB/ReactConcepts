import React, { useState, useEffect } from 'react';
import { Container, Row, Col, CardBody, CardTitle, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios';

function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get('https://randomuser.me/api');
    const details = data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const MyCard = () => {
    return (
      <Card>
        <CardBody className='text-center'>
          <img
            className='rounded-circle img-thumbnail border-danger'
            height='150'
            width='150'
            src={details.picture?.large}
            alt=''
          />
          <CardTitle className='text-primary'>
            <h1>
              <span className='pr-2'>{details.name?.title}</span>
              <span className='pr-2'>{details.name?.first}</span>
              <span className='pr-2'>{details.name?.last}</span>
            </h1>
          </CardTitle>
        </CardBody>
      </Card>
    );
  };

  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className='offset-md-4 mt-4'>
          <MyCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
