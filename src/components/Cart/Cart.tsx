import React, { useEffect, useState } from 'react';
import Product from '../../types/Product';
import Card from './../../components/Card/Card';
import CartItems from '../../types/CartItems';

type CartProps = {
    products: Product[]
    cartItems: CartItems[];
}

const Cart = ({products, cartItems}: CartProps) => {

  return (

         <div className="container_cart_quantity">
        <div className={cartItems.length === 0 ? "hidden" : ""}>{`${cartItems.map((prev) => prev.price).reduce((prev, curr) => prev + curr, 0).toFixed(2)}€`}</div>
        <div className="cart-container">
            <img className="cart" src="cart.png" alt="Cart" style={{width: "50px"}}></img>
        </div>
        <div className={`cart-container_tot ${cartItems.length === 0 ? "hidden" : ""}`}>{cartItems.length === 0 ? "" : cartItems.length}</div>
        {/* <div className={`cart-container_tot ${totPrice === 0 ? "hidden" : ""}`}>{totPrice === 0 ? "" : totPrice}</div> */}
        </div>
  );
}

export default Cart;
