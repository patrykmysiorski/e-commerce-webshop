import React from "react";
import { Field, getFormValues, reduxForm } from "redux-form";
import { addProduct } from "../../actions/productActions";
import { connect, useDispatch } from "react-redux";

const AddProductForm: React.FC = (props: any) => {
    const {pristine, reset, submitting} = props
    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(addProduct(props.formValues));
    }
    return (
        <div className="product-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>title</label>
                    <div>
                        <Field
                            name="title"
                            component="input"
                            type="text"
                            placeholder="title"
                        />
                    </div>
                </div>
                <div>
                    <label>thumbnail</label>
                    <div>
                        <Field
                            name="thumbnail"
                            component="input"
                            type="text"
                            placeholder="thumbnail"
                        />
                    </div>
                </div>
                <div>
                    <label>category</label>
                    <div>
                        <Field
                            name="category"
                            component="input"
                            type="text"
                            placeholder="category"
                        />
                    </div>
                </div>
                <div>
                    <label>price</label>
                    <div>
                        <Field
                            name="price"
                            component="input"
                            type="number"
                            placeholder="price"
                        />
                    </div>
                </div>

                <div>
                    <button className={'button'} type="submit"
                        // disabled={pristine || submitting}
                    >
                        Add product!
                    </button>
                    <button className={'button'} type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        formValues: getFormValues("addProduct")(state)
    };
};

const withRedux = reduxForm({
    form: 'addProduct'
})(AddProductForm);

export default connect(mapStateToProps)(withRedux)
