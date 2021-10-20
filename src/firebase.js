import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxjxCTFgDThszcxoiLtMOAKAPl852WNBk",
    authDomain: "challenge-e304f.firebaseapp.com",
    projectId: "challenge-e304f",
    storageBucket: "challenge-e304f.appspot.com",
    messagingSenderId: "487762570213",
    appId: "1:487762570213:web:8bb06179b131e27ac45d0c",
    measurementId: "G-9CXVGPK6BG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

