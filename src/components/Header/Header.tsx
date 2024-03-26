import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Cart from '../Cart/Cart';
import Product from '../../types/Product';
import CartItems from '../../types/CartItems';

interface HeaderProps {
  products: Product[];
  cartItems: CartItems[];
}
const Header: React.FC<HeaderProps> = ({ products, cartItems }) => {

  return (
    <div>
      <Searchbar />
      <Cart products={products} cartItems={cartItems} />
    </div>
  );
}

export default Header;
