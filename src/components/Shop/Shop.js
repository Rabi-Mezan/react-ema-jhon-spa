import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

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
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
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
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;