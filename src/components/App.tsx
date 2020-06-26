import React from 'react';
import '../css/standardFont.css'
import '../css/app.css'

const App: React.FC = () =>
    <div className={"main-page"}>
        <div>
            <div className={"m-b-15"}>
                <h1>Welcome to the e-commerce online store.<br/>Say hello to the best games at the best prices.</h1>
            </div>
            <a className="btn btn-full" href="/products">Show me your games!</a>
            <a className="btn btn-ghost" href="/contact">Why us?</a>
        </div>

    </div>

export default App;
