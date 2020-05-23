import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";
import { render } from 'react-dom'
import configureStore from "./configureStore";
import RoutingList from "./components/RoutingList";

const store = configureStore()

render(
    <Provider store={store}>
        <RoutingList />
    </Provider>,
    document.getElementById('root')
)

