import React from 'react';
import Stars from './Stars';
import '../App.css';


const ProductItem = ({ product, onDelete }) => {
    return (
        <div
            onDoubleClick={() => onDelete(product.id)}
            style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                textAlign: 'center',
            }}
        >
            <img src={product.thumbnail} alt={product.title} style={{ width: '350px', height: '250px' }} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <Stars rating={product.rating} />
        </div>
    );
};

export default ProductItem;
