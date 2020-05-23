import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { Field, reduxForm } from 'redux-form'
import '../css/cart.css'

const Cart: React.FC = (props: any) => {
    const items: any = useSelector<RootState>(state => state.cartReducer.cart)
    const {handleSubmit, pristine, reset, submitting} = props

    return (
        <div className="center">
            {items.map((listItem: any) => {
                return (
                    <tr>
                        <td>{listItem['name']}</td>
                        <td>{listItem['price']}</td>
                    </tr>
            )
            })}
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
                        <label htmlFor="employed">Employed</label>
                        <div>
                            <Field
                                name="employed"
                                id="employed"
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
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'customer'
})(Cart);
