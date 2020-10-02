import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
   
        apiKey: "AIzaSyBogjlpJYaT9oSg75YLw2y87IfxNiYwXak",
        authDomain: "contact-be1cb.firebaseapp.com",
        databaseURL: "https://contact-be1cb.firebaseio.com",
        projectId: "contact-be1cb",
        storageBucket: "contact-be1cb.appspot.com",
        messagingSenderId: "548112083738",
        appId: "1:548112083738:web:9f26cb9b9f38894b4d5aa3"
    
    
});

const db = firebaseApp.firestore();

export { db }