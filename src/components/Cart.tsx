import React from 'react';
import { useSelector } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import '../css/cart.css'
import { Product } from "../types/productsTypes";

const Cart: React.FC = (props: any) => {
    const products: Product[] = useSelector((state: any) => state.cartReducer.cart)
    const {pristine, reset, submitting} = props
    let cartValue: number = 0;
    const handleSubmit = (event: any) => {
        console.log(event)
        event.preventDefault();
    }

    return (
        <div className="flex-container-page-column">
            {products.map((product: Product) => {
                cartValue = product.price + cartValue;
                return (
                    <div key={product.id}>
                        {product.title}{' '}
                        {product.price}
                    </div>
                )
            })}
            <div>Cart value: {cartValue}</div>
            <div className={'form'}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <div>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>

                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <Field
                                name="email"
                                component="input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Phone</label>
                        <div>
                            <Field
                                name="phone"
                                component="input"
                                type="text"
                                placeholder="Phone number"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Accept condition</label>
                        <div>
                            <Field
                                name="consent"
                                id="consent"
                                component="input"
                                type="checkbox"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Notes</label>
                        <div>
                            <Field name="notes" component="textarea"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
                <>
                    {/*<form action={'http://www.jakubadamus.cba.pl/paypal.php'} method={'get'}>*/}
                    {/*    <input type={'text'} name={'firstName'} id={''} placeholder={'Name'}/>*/}
                    {/*    <input type={'text'} name={'lastName'} id={''} placeholder={'Surname'}/>*/}
                    {/*    <input type={'text'} name={'email'} id={''} placeholder={'example@example.com'}/>*/}
                    {/*    <input type={'text'} name={'phone'} id={''} placeholder={'telephone'}/>*/}
                    {/*    <input type={'checkbox'} name={'agreement'} id={''}/>*/}

                    {/*    <input type={'hidden'} name={'products[]'} value={testObject}/>*/}
                    {/*    <button type={'submit'}/>*/}
                    {/*</form>*/}
                    {/*const testObject: any = {"id": 245, "title": "fifa", "price": 20, "category": "game", "thumbnail": "https://wp.pl"};*/}
                </>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'customer'
})(Cart);



