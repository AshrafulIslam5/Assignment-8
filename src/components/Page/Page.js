import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Page.css';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        newCart = [...cart, selectedProduct];
        // if an item exists.. it cannot be added again
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (exist) {
            newCart = [...cart];
        }
        setCart(newCart);
    }

    const clearCart = () => {
        const newCart = [];
        setCart(newCart)
    }
    
    return (
        <div className='page'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Page;