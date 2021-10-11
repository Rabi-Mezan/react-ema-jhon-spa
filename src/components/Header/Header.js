import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav className='navbar'>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>

                {
                    user.email ? <Link to="/home" onClick={logOut}>Logout</Link> :
                        <Link to="/login">Login</Link>
                }

            </nav>
            {user.email ? <h2>Happy Shopping  {user.displayName}</h2> : ""}
        </div>
    );
};

export default Header;