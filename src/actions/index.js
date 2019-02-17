import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constatns';

export function logUser(email) {
    console.log('LogUser f');
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals) {
    console.log('setGoal f');
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completeGoals) {
    console.log('set Completed');
    const action = {
        type: SET_COMPLETED,
        completeGoals
    }
    return action;
}
