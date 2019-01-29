import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


ReactDOM.render(
    <Router path="/">
        <div>
            <Route path="/app" component={App}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
        </div>
    </Router>
    , document.getElementById('root'));

