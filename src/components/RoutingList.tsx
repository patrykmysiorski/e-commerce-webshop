import React from "react";
import Notfound from "./NotFound";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { ROUTING } from "../constants/routing";

const RoutingList = () => {
    return (
        <Router>
            <div>
                {ROUTING.map(routeItem => (
                    <div key={routeItem.linkTo}>
                        <Link to={routeItem.linkTo}>
                            <button type="button">{routeItem.buttonName}</button>
                        </Link>
                    </div>
                ))}

                <Switch>
                    {ROUTING.map(routeItem => (
                        <Route
                            key={routeItem.linkTo}
                            exact
                            path={routeItem.linkTo}
                            component={routeItem.component}
                        />
                    ))}
                    <Route component={Notfound} />
                </Switch>
            </div>
        </Router>
    );
};

export default RoutingList;
