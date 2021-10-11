import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {


    const history = useHistory();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])

    const [displayProducts, setDisplayProducts] = useState([]);
    // const [cart] = useCart(products)

    useEffect(() => {
        const savedProduct = getStoredCart()
        // console.log(savedProduct)
        const storedCart = [];
        if (products.length) {
            for (const key in savedProduct) {
                // console.log(key);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedProduct[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
    }, [products])
    const handleSearch = event => {
        const searchTxt = event.target.value;
        const mathcedProduct = products.filter(product => product.name.toLowerCase().includes(searchTxt.toLowerCase()));
        // console.log(mathcedProduct.length)
        setDisplayProducts(mathcedProduct)
    }

    const [cart, setCart] = useState([]);
    const handleAddToCart = product => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDb(product.key)
    }

    const handleReview = () => {
        history.push('/order')
    }
    return (
        <div>
            <div className='search-container'>
                <input onChange={handleSearch}
                    type="text"
                    placeholder="search here " />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-conainer">
                    <Cart
                        cart={cart}
                    >
                        <button onClick={handleReview} className='add-cart'>Review Your Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;