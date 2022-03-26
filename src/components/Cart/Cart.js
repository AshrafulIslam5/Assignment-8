import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h4>Selected Books</h4>
            
            <div className='btns'>
            <button>Choose 1 for me</button>
            <button >Reset Cart</button>
            </div>
        </div>
    );
};

export default Cart;