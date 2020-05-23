import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Item} from "../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../reducers";

const Cart: React.FC = () => {

    const items: any = useSelector<RootState>(state => state.cartReducer.cart)

    console.log(items)

    return (
        <div className="center">
            {items.map((listItem: any) => {
                return (<ListGroup horizontal>
                    <ListGroup.Item variant={'primary'}>{listItem['name']}</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>{listItem['price']} EUR</ListGroup.Item>
                </ListGroup>)
            })}
        </div>
    )
}

export default Cart;
