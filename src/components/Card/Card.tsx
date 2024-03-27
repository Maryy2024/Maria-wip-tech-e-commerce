import "./Card.css";
import Product from "../../types/Product";
import CartItems from "../../types/CartItems";

interface CardProps {
    item: Product,
    setCartItems: Function,
}
const Card = ({ item, setCartItems }: CardProps) => {

    const addToCart = (product: Product) => {
        setCartItems((prev: CartItems[]) => {
            return [...prev, { ...product }];
        })
    }

    return (
        <div className="card product-card" style={{ backgroundImage: "linear-gradient(to bottom right, #FFFFFF 0%, #DFDFEF 100%)" }}>
            <img src={item.image} className="card-img-top" alt={"card"} />
            <div className="card-body">
                <h5 className="card-title truncate">{item.title}</h5>
                <p className="card-text truncate">{item.description}</p>
                <div className="prod-quantity d-flex justify-content-center my-2">
                    <div className="add-to-cart__btn-container d-flex pb-2">
                        <button className="btn btn-warning add-to-cart__btn" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <p className="price">{`${item.price && item.price.toFixed(2)}€`}</p>
            </div>
        </div>
    );
};

export default Card