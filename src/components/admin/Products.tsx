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
        <div className={'flex-container-page-column'}>
            <table className={'cart'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product: Product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.category}</td>
                            <td>{product.price} EUR</td>
                            <td><button className={'delete-button'} onClick={() => onDelete(product.id)}>DELETE</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <AddProductForm />
        </div>
    )
}

export default Products;
