import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/otherpage">Other page</Link>
                    </div>
                </header>
                <div>
                    <Route exact path="/" component={Fib} />
                    <Route path="/otherpage" component={OtherPage} />
                </div>
            </div>
        </Router>
    );
}

export default App;
