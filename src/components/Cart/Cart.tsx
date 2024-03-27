import CartItems from '../../types/CartItems';
import "./Cart.css"

interface CartProps {
  cartItems: CartItems[]
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (

    <div className="container_cart_price d-flex align-items-center">
      <div className={!cartItems.length ? "hidden" : ""}>
        {`${cartItems.reduce((tot, product) => tot + product.price, 0).toFixed(2)}€`}
      </div>

      <div className="cart-container">
        <img className="cart" src="cart.png" alt="Cart" style={{ width: "50px" }} />
        <div className={`cart-container_tot ${!cartItems.length ? "hidden" : ""}`}>
          {!cartItems.length ? "" : cartItems.length}
        </div>
      </div>
    </div>
  );
}

export default Cart;
