import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

function CartItem({ product, addInCart }) {
  return (
    <Card className='mt-2 mb-1'>
      <CardImg top width='100%' height='250' src={product.medium} />
      <CardBody className='text-center'>
        <CardTitle>{product.name}</CardTitle>
        <CardText>Price: ${product.price}</CardText>
        <Button color='success' onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
}

export default CartItem;
