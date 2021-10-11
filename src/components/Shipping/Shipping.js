import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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