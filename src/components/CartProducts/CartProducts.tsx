import React from 'react'
import CartItems from '../../types/CartItems'
import Product from '../../types/Product'

interface CartProductsProps {
    cartItems: CartItems[],
    setCartItems: Function
}
const CartProducts: React.FC<CartProductsProps> = ({ cartItems, setCartItems }) => {

    const removeFromCart = (index: number) => {
        setCartItems(((prev: CartItems[]) => prev.filter(item => item.id !== index)))
    }

    return (
        <div className="cart-products">
            {cartItems.map((item, index) => (
                <div key={index} className="cart-product">
                    <div className="cart-product-info-container">
                        <img src={item.image} alt={item.title} className="cart-product-img" />
                        <div className="cart-product-info">
                            <p className="cart-product-title">{item.title}</p>
                            <p className="cart-product-category">{item.category}</p>
                            <p className="cart-product-price">{`${item.price && item.price.toFixed(2)}€`}</p>
                        </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default CartProducts
