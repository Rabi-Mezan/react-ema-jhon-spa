import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img from '../../images/Shopping-rafiki.png'

const Home = () => {
    return (
        <div className='home'>
            <img src={img} alt="" />
            <div>
                <h1>HAPPY SHOPPING</h1>
                <Link to='/shop'>
                    <button>Shop Now</button>
                </Link>
                <Link to='/register'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;