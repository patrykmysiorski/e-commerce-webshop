import React from 'react'
import { ListGroup } from 'react-bootstrap';
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Item } from "../types/cartTypes";
import { Product } from "../types/productsTypes";

const Products: React.FC = () => {
    const games: Product[] = useSelector((state: any) => state.productsReducer.products)
    const dispatch = useDispatch()

    const onButtonClick = (item: Item) => {
        dispatch(addToCart({
            name: item.name,
            price: item.price
        }))
    }

    return (
        <div className="center">
            {games.map(listItem => {
                const item: Item = {
                    name: listItem.title,
                    price: listItem.price
                }
                return (<ListGroup horizontal key={listItem.id}>
                    <ListGroup.Item variant={'primary'}>{listItem.title}</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>{listItem.category}</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>{listItem.price} EUR</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}><img src={listItem.thumbnail} width="100px"
                                                             height="100px" alt={listItem.title}/></ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>
                        <button type="button" className="btn btn-primary" onClick={() => onButtonClick(item)}>Add to
                            cart
                        </button>
                    </ListGroup.Item>
                </ListGroup>)
            })}
        </div>
    )
}

export default Products;
