import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const handleToDelate = (id) =>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)
    }
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <Review key={product.id} handleToDelate={handleToDelate} product={product}></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;