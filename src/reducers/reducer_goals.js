import { SET_GOALS } from '../constatns';

export default(state = [], action) => {
    console.log('reducer run:state, action', state, action);
    switch (action.type) {
        case SET_GOALS:
            const { goals } = action;
            return goals;
        default:
            return state;
    }
}
