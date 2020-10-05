import firebase from 'firebase';

firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBygetyYtWfA0V4xav2YQ2hCwGRLfmGea8",
    authDomain: "messaging-app-bacc0.firebaseapp.com",
    databaseURL: "https://messaging-app-bacc0.firebaseio.com",
    projectId: "messaging-app-bacc0",
    storageBucket: "messaging-app-bacc0.appspot.com",
    messagingSenderId: "900972341957",
    appId: "1:900972341957:web:92a6b94e08bac767449eac",
    measurementId: "G-ZJ0MJ2WQJY"
});

const db = firebase.firestore();

export default db;