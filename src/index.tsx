import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
      <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);
