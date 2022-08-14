import React from 'react';
import {
  Container,
  ListGroup,
  LitGroupItem,
  Card,
  CardBody,
  CardHeader,
  Button,
  Col,
  Row,
  CardFooter,
  ListGroupItem,
} from 'reactstrap';

function Cart({ cartItem, removeItem, buyItem }) {
  console.log(cartItem);
  let amount = 0;
  cartItem.forEach((element) => {
    amount = parseFloat(amount) + parseFloat(element.price);
  });
  return (
    <Container fluid className='mt-5'>
      <h1 className='text-center'>Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img src={item.tiny} alt='' height='80' />
              </Col>
              <Col className='text-center'>
                <div className='text-primary'>{item.name}</div>
                <span>Price:- {item.price}</span>
                <br></br>
                <Button color='danger' onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Card>
        <CardHeader className='text-center'> Buy Item</CardHeader>
        <CardBody className='text-center'>
          <h4>Total Amount: {amount}</h4>
          <Button color='success' onClick={buyItem}>
            Buy Now
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Cart;
