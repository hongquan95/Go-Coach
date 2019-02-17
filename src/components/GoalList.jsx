import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../actions/';
import GoalItem from './GoalItem';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                const goalKey = goal.key;
                goals.push({ email, title, goalKey });
                console.log('goal', goal);
            })
            this.props.setGoals(goals);
        })
    }
    render() {
        console.log('this.props.goals', this.props.goals);
        return (
            <div>
                {
                    this.props.goals.map((goal,index) => {
                        return (
                            <GoalItem key={index} goal={goal}/>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state in GoalList.jsx', state);
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
