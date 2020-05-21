import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import {Provider} from "react-redux";
import rootReducer from './configureStore'

export const store = rootReducer();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <NavBar/>
        </React.StrictMode>,
    </Provider>,
    document.getElementById('root')
);
