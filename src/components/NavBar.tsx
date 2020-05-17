import React from 'react'
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import {ROUTING} from "../constants/routing";
import Notfound from "./NotFound";

const NavBar: React.FC = () =>
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="#home">E-commerce Webshop</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {ROUTING.map(routeItem => (
                                            <Nav.Link href={routeItem.linkTo}>{routeItem.buttonName}</Nav.Link>
                                    ))}
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                        <br/>
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
                    </Router>
                </div>
            </div>
        </div>

export default NavBar;
