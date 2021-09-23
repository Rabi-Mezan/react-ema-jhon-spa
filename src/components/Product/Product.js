import React from 'react';
import './product.css'

const Product = (props) => {
    //console.log(props.product.name)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 >Name : {name}</h3>
                <p><small>by : {seller}</small></p>
                <h4>${price}</h4>
                <p>Only {stock} left in stock-order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="add-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>add to cart</button>
            </div>


        </div >
    );
};

export default Product;