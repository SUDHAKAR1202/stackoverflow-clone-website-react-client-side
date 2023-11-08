import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBrQyuGtsrNZ5QqOqAFtQ4GOxZzOLSjIak",
    authDomain: "otpauthentication-8d235.firebaseapp.com",
    projectId: "otpauthentication-8d235",
    storageBucket: "otpauthentication-8d235.appspot.com",
    messagingSenderId: "568111673118",
    appId: "1:568111673118:web:a30b241d0892b8dab4e30f",
    measurementId: "G-MKH8V4P1S9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth, firebase}
