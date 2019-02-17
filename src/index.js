import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './index.css';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { logUser } from './actions';

const store = createStore(reducer);
console.log('store', store);


firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        const { email } = user;
        console.log('user is sign up: ', user);
        store.dispatch(logUser(email));
    } else {
        console.log("user sign out or need sign in")
    }
})

console.log('index.js');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {/* <Route exact path="/" render={()=>(
                    loggedIn() == true ? (<Redirect push to='/app'/>) : (<Redirect to='/signin'/>)
                )}/> */}
                <Route path="/signup" component={SignUp}/>
                <Route path="/app" component={App}/>
                <Route path="/signin" component={SignIn}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

