import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmpsVF7NY7-mzH2LIefzWothD-1OEPJDA",
    authDomain: "todo-88722.firebaseapp.com",
    databaseURL: "https://todo-88722.firebaseio.com",
    projectId: "todo-88722",
    storageBucket: "todo-88722.appspot.com",
    messagingSenderId: "977887878247",
    appId: "1:977887878247:web:9b2ddc8daf3626ca"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();