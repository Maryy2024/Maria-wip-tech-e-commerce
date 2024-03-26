import Product from '../../types/Product';
import CartItems from '../../types/CartItems';

type CartProps = {
  products: Product[]
  cartItems: CartItems[];
}

const Cart = ({ cartItems }: CartProps) => {

  return (

    <div className="container_cart_quantity">
      <div className={cartItems.length === 0 ? "hidden" : ""}>{`${cartItems.map((prev) => prev.price).reduce((prev, curr) => prev + curr, 0).toFixed(2)}€`}</div>
      <div className="cart-container">
        <img className="cart" src="cart.png" alt="Cart" style={{ width: "50px" }}></img>
      </div>
      <div className={`cart-container_tot ${cartItems.length === 0 ? "hidden" : ""}`}>{cartItems.length === 0 ? "" : cartItems.length}</div>
    </div>
  );
}

export default Cart;
