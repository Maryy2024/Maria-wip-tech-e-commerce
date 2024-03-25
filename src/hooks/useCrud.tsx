import React, { useEffect } from 'react'

const useCrud = () => {
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        return data;
    }
    fetchData();
  }, []);
}

export default useCrud
