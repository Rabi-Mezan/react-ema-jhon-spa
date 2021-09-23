import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Cart Summury</h3>
            <h5>Ordered Items: {props.cart.length} </h5>
            <div className='cart-clac'>
                <p>Total Price : <span>{total.toFixed(2)}</span></p>
                <p>Shipping : <span> {shipping}</span></p>
                <p>Tax :  <span>{tax.toFixed(2)}</span></p>
                <hr />
                <h4>Grand Total : <span>{grandTotal.toFixed(2)}</span> </h4>
            </div>
        </div>
    );
};

export default Cart;