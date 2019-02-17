import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
    constructor(props) {
        super(props);
    }
    signOut() {;
        firebaseApp.auth().signOut();
        this.props.history.replace('/signin');
    }
    render() {
        console.log('<App>');
        return (
            <div className="form-group" style={{margin: '5px'}}>
                <h3>Goals</h3>
                <AddGoal />
                <hr/>
                <GoalList />
                <hr/>
                <h3>Complete Goals</h3>
                <CompleteGoalList/>
                <hr/>
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state in App', state);
    return {}
}

export default connect(mapStateToProps, null)(App);
