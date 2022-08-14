import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyPage from './Tutorial/Cart/components/BuyPage';
import Cart from './Tutorial/Cart/components/Cart';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAddedAlready = cartItem.findIndex((arr) => arr.id === item.id);

    if (isAddedAlready !== -1) {
      toast('Item is Alreay Added', {
        type: 'error',
      });
      return;
    }
    toast('Item added Successfully', {
      type: 'success',
    });
    setCartItem([...cartItem, item]);
  };

  const buyItem = () => {
    setCartItem([]);
    toast('Succesfully Buy', {
      type: 'success',
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((arr) => arr.id !== item.id));
    toast('Succesfully Removed', {
      type: 'success',
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col>
          {cartItem.length == 0 ? (
            <h1 className='text-center mt-5'>Cart Is Empty</h1>
          ) : (
            <Cart
              cartItem={cartItem}
              removeItem={removeItem}
              buyItem={buyItem}
            />
          )}
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
