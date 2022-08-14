import { Col, Container, Row } from 'reactstrap';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import CartItem from './CartItem';

export default function BuyPage({ addInCart }) {
  const [products, setProducts] = useState([]);

  const URL = 'http://myjson.dit.upm.es/api/bins/g7f4';
  const fetchProduct = async () => {
    const { data } = await Axios.get(URL);

    const allProducts = data.photos.map((photo) => ({
      medium: photo.src.medium,
      tiny: photo.src.tiny,
      name: faker.word.noun(),
      price: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));
    setProducts(allProducts);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Container fluid>
      <h1 className='text-success text-center'>Buy Page</h1>
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <CartItem
              product={product}
              key={product.id}
              addInCart={addInCart}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
