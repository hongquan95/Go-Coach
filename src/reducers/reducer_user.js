import { SIGNED_IN } from '../constatns';

let user = {
    email: null,
}

export default(state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            console.log('reducer');
            const { email } = action;
            user = {
                email
            }
            return user;
        default:
            return state;
    }
}
