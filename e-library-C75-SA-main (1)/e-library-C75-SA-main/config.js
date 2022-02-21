import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB77H8DGCCaYSd-r-Mi2JRBQxL8iBEfNOg",
    authDomain: "elib-21f8a.firebaseapp.com",
    projectId: "elib-21f8a",
    storageBucket: "elib-21f8a.appspot.com",
    messagingSenderId: "43216061812",
    appId: "1:43216061812:web:fa4235676bfbfcec56d821"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
