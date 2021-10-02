import React from 'react';
import './PlaceOrder.css'
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div className='placeOrder'>
            <h3>Your order has been placed successfully</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;