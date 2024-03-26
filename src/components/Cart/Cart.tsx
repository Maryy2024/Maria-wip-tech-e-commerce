import React, { useEffect, useState } from 'react';
import Product from '../../types/Product';

type Products = {
    quantity: number
}

const Cart = ({}) => {

    const [totQuantity, setTotQuantity] = useState<number>(0);
    const [totPrice, setTotPrice] = useState<number>(0)

    useEffect(() => {
      const quantityProducts = 

    }, [])


  return (
    <div>
      
    </div>
  );
}

export default Cart;
