import React from 'react';
import './Cart-Product.css';

const CartProduct = ({ product }) => {
    const { image, name, quantity } = product
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CartProduct;