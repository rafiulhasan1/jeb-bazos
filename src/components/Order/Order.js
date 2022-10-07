import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const order = useLoaderData();
    return (
        <div>
            <h2>this is order page : {order.length}</h2>
        </div>
    );
};

export default Order;