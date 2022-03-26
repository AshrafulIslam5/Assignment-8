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
    let newCart = [];
    const addToCart = (selectedProduct) => {
        newCart = [...cart, selectedProduct];
        setCart(newCart);
        console.log(cart);
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Page;