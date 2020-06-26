import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ADMIN_ROUTING } from "../../constants/adminRouting";
import Notfound from "../NotFound";
import '../../css/adminMenu.css'

const Menu: React.FC = () =>
    <div className="flex-container-row">
        <Router>
            <div className="flex-container">
                {ADMIN_ROUTING.map(routeItem => {
                    return (
                        <div className={"margin"} key={routeItem.linkTo}>
                            <Link to={routeItem.linkTo}>
                                <button>
                                    <span>{routeItem.buttonName}</span>
                                </button>
                            </Link>
                        </div>)
                })}
            </div>
            <Switch>
                {ADMIN_ROUTING.map(routeItem => (
                    <Route
                        key={routeItem.linkTo}
                        exact
                        path={routeItem.linkTo}
                        component={routeItem.component}
                    />
                ))}
                <Route component={Notfound}/>
            </Switch>
        </Router>
    </div>

export default Menu;
