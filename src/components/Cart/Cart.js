import React from 'react';
import CartProduct from '../Cart-Product/CartProduct';
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
    return (
        <div className='cart'>
            <h4>Selected Books</h4>
            <div className='cart-add'>
                {
                    cart.map(product => <CartProduct key={product.id} product={product}></CartProduct>)
                }
            </div>
            <div className='btns'>
                <button>Choose 1 for me</button>
                <button onClick={clearCart}>Reset Cart</button>
            </div>
        </div>
    );
};

export default Cart;