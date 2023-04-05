import { useState } from "react";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import ProductList from "./components/Products/ProductList";
import CartContainer from "./components/Cart/CartContainer";
import CartContext from "./components/Context/CartContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const ctxObj = {
    cartOpen: cartOpen,
    setCartOpen: setCartOpen,
    orderList: orderList,
    setOrderList: setOrderList,
  };

    // const orders = [
    //   {
    //     id: 1,
    //     title: "Colors",
    //     price: 100,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    //     quantity: 2,
    //   },
    //   {
    //     id: 2,
    //     title: "Black and white Colors",
    //     price: 50,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    //     quantity: 3,
    //   },
    //   {
    //     id: 3,
    //     title: "Yellow and Black Colors",
    //     price: 70,
    //     imageUrl:
    //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    //     quantity: 1,
    //   },
    // ];

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <CartContext.Provider value={ctxObj}>
        <Header handleCartOpen={handleCartOpen} />
        <Container>
          <ProductList></ProductList>
        </Container>
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
}

export default App;
