import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const savedCart = getStoredCart()
        data.order = savedCart;
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order placed sucessfully')
                    clearTheCart()
                    reset()
                    history.push('./shop')
                }
            })
    }
    const { user } = useAuth()
    return (
        <div className='shipping-form'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />
                <br />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                <input defaultValue="your address" {...register("address", { required: true })} />
                <br />
                <input defaultValue="your city" {...register("city", { required: true })} />
                <br />
                <input defaultValue="your phone no" {...register("phone", { required: true })} />
                <br />
                {errors.email && <span className='error'>This field is required</span>}

                <input id='btn' type="submit" />
            </form>
        </div>
    );
};

export default Shipping;