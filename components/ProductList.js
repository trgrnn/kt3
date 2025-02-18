import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import '../App.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const handleDelete = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '20px',
            }}
        >
            {products.map((product) => (
                <ProductItem key={product.id} product={product} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default ProductList;
