import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyBjnAfhNKIT_22twrgEIPKYqH-Pf1kXg3E",
  authDomain: "konohataku-sms.firebaseapp.com",
  databaseURL: "https://konohataku-sms-default-rtdb.firebaseio.com",
  projectId: "konohataku-sms",
  storageBucket: "konohataku-sms.appspot.com",
  messagingSenderId: "707890955205",
  appId: "1:707890955205:web:e2ab240948bc94398b81ac",
  measurementId: "G-RT8SQ817HC"};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;