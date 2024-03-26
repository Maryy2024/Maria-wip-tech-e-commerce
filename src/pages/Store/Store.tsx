import React, { useEffect, useState } from 'react'
import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CartItems from "../../types/CartItems";

const Store = () => {
    const { products, setProducts } = useCrud();
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    return (
        <>
            <Header products={products} cartItems={cartItems}/>
            <div className="d-flex flex-wrap w-100 justify-content-between">
                {products ? (
                    products.map((product: Product) => (
                        <Card key={product.id} item={product} setProducts={setProducts} setCartItems={setCartItems}/>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default Store