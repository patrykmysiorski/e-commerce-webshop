import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';
import '../index.css'
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/cartActions";
import {Item} from "../types/types";

const Products: React.FC = () => {
    const [games, setGames] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/patrykmysiorski/e-commerce-webshop/master/jsons/games.json`)
            .then(res => {
                const games = res.data.games;
                setGames(games);
            })
    }, []);

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
                    name: listItem['name'],
                    price: listItem['price']
                }
                return (<ListGroup horizontal>
                    <ListGroup.Item variant={'primary'}>{listItem['name']}</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>{listItem['category']}</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>{listItem['price']} EUR</ListGroup.Item>
                    <ListGroup.Item variant={'primary'}><img src={listItem['image']} width="100px"
                                                             height="100px" alt={listItem['name']}/></ListGroup.Item>
                    <ListGroup.Item variant={'primary'}>
                        <button type="button" className="btn btn-primary" onClick={() => onButtonClick(item)}>Add to cart</button>
                    </ListGroup.Item>
                </ListGroup>)
            })}
        </div>
    )
}

export default Products;
