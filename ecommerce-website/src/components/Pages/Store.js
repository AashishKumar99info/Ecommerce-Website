import { Container } from "react-bootstrap";
import ProductList from "../Products/ProductList";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartContainer from "../Cart/CartContainer";

const StorePage = () => {
  const ctx = useContext(CartContext);
  return (
      <Container>
        <ProductList />
      </Container>
  );
};

export default StorePage;
