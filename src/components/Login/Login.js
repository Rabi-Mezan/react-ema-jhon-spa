import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/shop'


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectUrl)
            })
    }

    return (
        <div className='login'>
            <div>
                <h3>Login Here</h3>
                <form>
                    <p>Email <br /><input type="email" name="" id="" placeholder='your email' /></p>
                    <p>Password <br /> <input type="password" name="" id="" placeholder='your password' /></p>
                    <button
                        type="submit">Login
                    </button>
                </form>
                <div className='register'>
                    <h5>
                        New User ?
                        <small>
                            <Link to='/register'>Create Account</Link></small>
                        <br />
                        <button onClick={handleGoogleSignIn}>
                            <i class="fab fa-google-plus-g">
                            </i>Google Sign In
                        </button>
                    </h5>
                </div>
            </div>

        </div>
    );
};

export default Login;