import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB2IFouUi7QnpiDoD-gGzbFt6vZAOKQBcg",
    authDomain: "gocoach-9e454.firebaseapp.com",
    databaseURL: "https://gocoach-9e454.firebaseio.com",
    projectId: "gocoach-9e454",
    storageBucket: "gocoach-9e454.appspot.com",
    messagingSenderId: "657007373455"
};
export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
