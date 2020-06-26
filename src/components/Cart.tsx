import React from 'react';
import { useSelector, connect } from "react-redux";
import { Field, getFormValues, reduxForm } from 'redux-form'
import '../css/cart.css'
import { Product } from "../types/productsTypes";
import renderField from "./renderField";
import { required, email, length } from 'redux-form-validators'

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
            {products.length > 0 ? <>
                <table className={'cart'}>
                    <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>PRICE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product: Product) => {
                        cartValue = product.price + cartValue;
                        return (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price} EUR</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div>Total price: {cartValue} EUR</div>
            </> : <h2>Your cart is empty! :(</h2>}

            <div className={'form'}>
                <form action={'http://www.jakubadamus.cba.pl/paypal.php'} method={'get'}>
                    <div>
                        <label>First Name</label>
                        <div>
                            <Field
                                name="firstName"
                                component={renderField}
                                type="text"
                                placeholder="First Name"
                                validate={length({ min: 3 })}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <div>

                            <Field
                                name="lastName"
                                component={renderField}
                                type="text"
                                placeholder="Last Name"
                                validate={length({ min: 3 })}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <Field
                                name="email"
                                component={renderField}
                                type="email"
                                placeholder="Email"
                                validate={[required(), email()]}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Phone</label>
                        <div>
                            <Field
                                name="phone"
                                component={renderField}
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
                                component={renderField}
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
                        <button className={'button'} type="submit" disabled={ props.consent || pristine || submitting}>
                            Submit
                        </button>
                        <button className={'button'} type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        formValues: getFormValues("consent")(state)
    };
};

const withForm = reduxForm({
    form: 'customer'
})(Cart);

export default connect(mapStateToProps)(withForm);



