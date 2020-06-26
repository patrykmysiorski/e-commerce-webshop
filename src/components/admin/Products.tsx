import React, { useState } from 'react';
import '../../css/standardFont.css'
import { deleteProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../types/productsTypes";
import AddProductForm from "./AddProductForm";

const Products: React.FC = (props: any) => {
    const dispatch = useDispatch();
    const [addClicked, setAddClicked] = useState(false);
    const products: Product[] = useSelector((state: any) => state.productsReducer.products)
    const onDelete = (id: number) => {
        dispatch(deleteProduct(id));
    }
    const onAddButtonClicked = () => {
        setAddClicked(!addClicked);
    }

    return (
        <div className="center">
            <button onClick={onAddButtonClicked}>Add product</button>
            {addClicked && (
                <AddProductForm/>
            )}
            {products.map(listItem =>
                <div key={listItem.id}>
                    <div>{listItem.title}</div>
                    <button onClick={() => onDelete(listItem.id)}>delete</button>
                </div>
            )}
        </div>
    )
}

export default Products;
