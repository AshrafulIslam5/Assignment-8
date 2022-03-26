import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({ product, addToCart }) => {
    const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
    const { name, price, image } = product;
    return (
        <div className='product'>
            <img src={ image } alt="" />
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Price: </strong>{price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart <span className='icon'>{ cartIcon }</span></button>
        </div>
    );
};

export default Product;