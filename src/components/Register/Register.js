import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div>
                <h3>Sign Up Here</h3>
                <form onSubmit="">

                    <p>Name <br /><input type="text" name="" id="" placeholder='your name' /></p>
                    <p>Email <br /><input type="email" name="" id="" placeholder='your email' /></p>
                    <p>Password <br /> <input type="password" name="" id="" placeholder='your password' /></p>
                    <p>Retype Password <br /> <input type="password" name="" id="" placeholder='retype your password' /></p>
                    <button type="submit">Register</button>
                </form>
                <div className='register'>
                    <h5>Already have an account ? <small> <Link to='/login'>login</Link></small> <br /> <button><i class="fab fa-google-plus-g"></i>Google Sign In</button></h5>
                </div>
            </div>
        </div>
    );
};

export default Register;