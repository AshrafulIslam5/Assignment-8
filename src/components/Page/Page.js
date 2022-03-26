import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Page.css';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // fetching
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // function to add products to the card
    const addToCart = (selectedProduct) => {
        let newCart = [];
        newCart = [...cart, selectedProduct];
        if (cart.length === 4) {
            cart.slice(1, 4);
            // added alert cuz i didn't had much time.....sorry
            alert('Sorry no more than 4');
            newCart = [...cart];
        }
        else {
            // if an item exists.. it cannot be added again
            const exist = cart.find(product => product.id === selectedProduct.id);
            if (exist) {
                newCart = [...cart];
            }
        }
        setCart(newCart);
    }

    // function of reset cart
    const clearCart = () => {
        const newCart = [];
        setCart(newCart)
    }

    // function of choose one btn
    const chooseOne = () => {
        if (cart.length === 0) {
            // added alert cuz i didn't had much time.....sorry
            alert('Add Something Please')
        }
        else {
            const choosen = [Math.floor(Math.random(4) * cart.length)];
            // made it an array because the development process was for the cart to be an array :)
            const choosenArr = [cart[choosen]];
            setCart(choosenArr);
        }
    }
    return (
        <div className='page'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart} chooseOne={chooseOne}></Cart>
            </div>
        </div>
    );
};

export default Page;