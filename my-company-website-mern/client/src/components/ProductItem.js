import React from 'react';
import './ProductItem.css'; // Import the CSS file

function ProductItem(props) {
    const { productName, description, price } = props;

    return (
        <div className="product-item">
            <h3>{productName}</h3>
            <p>{description}</p>
            <p className="price">Price: ${price}</p>
        </div>
    );
}

export default ProductItem;
