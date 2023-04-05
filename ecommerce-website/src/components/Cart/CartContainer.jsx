import { Container, Row, Col , Button } from 'react-bootstrap';
import OrderList from './OrderList';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

function CartContainer(props) {

  const ctx = useContext(CartContext)
  const orderList = ctx.orderList;
  let totalAmount = 0;
  orderList.forEach((item) => {
    totalAmount += item.price*item.quantity;
  })
  return (
    <Container
      fluid
      className="bg-light p-3"
      style={{ position: 'fixed', top:60, right: 0, width: '30%' }}
    >
    <Button
        variant="outline-danger"
        className="float-end"
        onClick={() => {
          ctx.setCartOpen(false)
        }}
      >
        Close
      </Button>
      <Row>
        <Col xs={12}>
          <h4 className="text-center mb-4">Items In Your Cart</h4>
          {orderList.length > 0 ? (
            <OrderList
              orders={props.orders}
              onRemove={props.onRemove}
              onUpdateQuantity={props.onUpdateQuantity}
            />
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </Col>
      </Row>

    </Container>
  );
}

export default CartContainer;
