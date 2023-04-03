import { useState } from 'react';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import ProductList from './components/Products/ProductList';
import CartContainer from './components/Cart/CartContainer';

function App() {

  const [cartOpen, setCartOpen] = useState(false);

  const orders = [
    {
      id:1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      id:2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      id:3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <Header handleCartOpen={handleCartOpen} />
      <Container>
        <ProductList/>
      </Container>
      {cartOpen && <CartContainer orders = {orders} ></CartContainer>}
    </div>
  );
}

export default App;
