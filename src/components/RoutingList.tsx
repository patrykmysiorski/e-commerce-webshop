import React from "react";
import Notfound from './NotFound';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { ROUTING } from '../constants/routing'
import '../css/routinglist.css'
import logo from '../logo.jpg'

const RoutingList = () => {
    return (
        <Router>
            <div className={"content"}>
                <header>
                    <h4 className={'logo'}>E-commerce webshop</h4>
                    <nav>
                        <ul className={'nav-links'}>
                            {ROUTING.map(routeItem => (
                                <li key={routeItem.linkTo}>
                                    <Link to={routeItem.linkTo}>
                                        {routeItem.buttonName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button>Contact</button>
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
