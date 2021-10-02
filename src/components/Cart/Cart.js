import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    // console.log(props.children)
    // console.log(cart)
    let totalQuantity = 0;
    let total = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuantity)
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Cart Summury</h3>
            <h5>Ordered Items: {totalQuantity} </h5>
            <div className='cart-clac'>
                <p>Total Price : <span> ${total.toFixed(2)}</span></p>
                <p>Shipping : <span> ${shipping}</span></p>
                <p>Tax :  <span> ${tax.toFixed(2)}</span></p>
                <hr />
                <h4>Grand Total : <span> ${grandTotal.toFixed(2)}</span> </h4>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;