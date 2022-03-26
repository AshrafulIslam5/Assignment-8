import React from 'react';
import './Cart-Product.css';

// displaying the products in the cart section
const CartProduct = ({ product }) => {
    const { image, name } = product
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CartProduct;