import React, { useEffect } from "react";
import Notfound from './NotFound';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { ROUTING } from '../constants/routing'
import '../css/routingList.css'
import axios from "axios";
import { addProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/productsTypes";

const RoutingList = () => {
    const dispatch = useDispatch();
    const cartContent: Product[] = useSelector((state: any) => state.cartReducer.cart)
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/patrykmysiorski/e-commerce-webshop/master/jsons/games.json`)
            .then(res => {
                const games = res.data.games;
                games.map((game: any, i: number) => {
                    const gameWithId = {id: i, ...game}
                    return dispatch(addProduct(gameWithId));
                })
            })
        // eslint-disable-next-line
    }, []);
    return (
        <Router>
            <div className={"content"}>
                <header>
                    <h4 className={'logo'}>E-commerce web shop</h4>
                    <nav>
                        <ul className={'nav-links'}>
                            {ROUTING.map(routeItem => (
                                <li key={routeItem.linkTo}>
                                    {routeItem.buttonName === 'Your Cart' ? <Link to={routeItem.linkTo}>
                                            {routeItem.buttonName}{' '}{cartContent.length}
                                        </Link> :
                                        <Link to={routeItem.linkTo}>
                                            {routeItem.buttonName}
                                        </Link>}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className={'contact-button'}>Contact</button>
                </header>
                <Switch>
                    {ROUTING.map(routeItem => (
                        <Route
                            key={routeItem.linkTo}
                            exact
                            path={routeItem.linkTo}
                            component={routeItem.component}
                        />
                    ))}
                    <Route component={Notfound}/>
                </Switch>
            </div>
        </Router>
    );
};

export default RoutingList;
