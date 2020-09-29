import firebase from 'firebase'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCixXqyjUQtsai9IBIWD4AZNwd7yvXqvN8",
    authDomain: "fitness-bbc9d.firebaseapp.com",
    databaseURL: "https://fitness-bbc9d.firebaseio.com",
    projectId: "fitness-bbc9d",
    storageBucket: "fitness-bbc9d.appspot.com",
    messagingSenderId: "565194613766",
    appId: "1:565194613766:web:b77e64e3264be14c18cf87",
    measurementId: "G-GQK97ZVGEL"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
//const firebae = firebase.analytics();

export default fire;