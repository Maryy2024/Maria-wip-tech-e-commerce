import React, { useEffect, useState } from 'react'
import Product from '../types/Product';

const useCrud = () => {
  const [products, setProducts] = useState<Product | null>(null)

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        return data;
    }
    fetchData();
  }, []);

  return {products, setProducts}
}

export default useCrud;