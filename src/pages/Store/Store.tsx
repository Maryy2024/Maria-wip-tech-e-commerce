import React from 'react'
import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import Card from '../../components/Card/Card';

const Store = () => {
    const { products, setProducts } = useCrud();
    return (
        <div className="d-flex flex-wrap w-100 justify-content-between">
            {products ? (
                products.map((product: Product) => (
                    <Card key={product.id} item={product} setProducts={setProducts} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Store