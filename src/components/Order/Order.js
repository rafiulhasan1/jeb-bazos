import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <Review key={product.id} product={product}></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;