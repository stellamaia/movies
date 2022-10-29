
import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBXTXiU8Xt1saSfLDpN_q2BhNPtdbAcd0s",
    authDomain: "fir-auth-d8cec.firebaseapp.com",
    projectId: "fir-auth-d8cec",
    storageBucket: "fir-auth-d8cec.appspot.com",
    messagingSenderId: "1022892374469",
    appId: "1:1022892374469:web:7a1899f9ade2359c0f33ac",
    measurementId: "G-W8XXFZNPJV"
  };

firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebase.firestore();

export const firebaseAuth = firebase.auth();