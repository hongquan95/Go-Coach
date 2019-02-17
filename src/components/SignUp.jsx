
import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import {Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            paswword: '',
            error: {
                message: ''
            }
        }
    }
    signUp() {
        console.log('Sign Up state:', this.state);
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            });
    }
    render() {
        const  isError = this.state.error.message;
        return (
            <div className="form-inline">
                <div className="form-group" style={{margin: '5%'}}>
                    <input
                        type="text"
                        className="form-control" 
                        placeholder="Email..."
                        onChange={event => this.setState({email: event.target.value})}
                        style={{marginRight: '5px'}}/>
                    <input
                        type="password"
                        className="form-control"
                        onChange={event => this.setState({password: event.target.value})}
                        style={{marginRight: '5px'}}/>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signUp()}
                    >
                    Sign up
                    </button>
                    <div>
                        <Link to={'/signin'}>Sign In</Link>
                    </div>
                    { isError ?
                        ( <Alert bsStyle="danger" style={{marginTop: '5px'}}>
                            <strong>{this.state.error.message}</strong>
                        </Alert> ) : null
                    }
                </div>
            </div>
        );
    }
}

export default SignUp;
