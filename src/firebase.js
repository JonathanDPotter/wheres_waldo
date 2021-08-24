import firebase from "firebase";
import "firebase/firestore";

const firebaseInit = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.apps.length;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseInit);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

export default db;
