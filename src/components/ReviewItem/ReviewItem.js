import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, quantity, key } = props.product
    return (
        <div>
            <h4>{name}</h4>
            <p>Quantity:{quantity}</p>
            <p>Price:${price}</p>
            <small>Seller:{seller}</small>
            <button onClick={() => props.handleRemove(key)} className='add-cart'>Remove</button>
        </div >

    );
};

export default ReviewItem;