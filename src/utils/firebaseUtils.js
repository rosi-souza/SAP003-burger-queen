import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA-kYYec6ZR_hUE_V-cxgOScxCl822EYj0",
  authDomain: "project-burger-queen.firebaseapp.com",
  databaseURL: "https://project-burger-queen.firebaseio.com",
  projectId: "project-burger-queen",
  storageBucket: "project-burger-queen.appspot.com",
  messagingSenderId: "651861023621",
  appId: "1:651861023621:web:96a5ed0a60a10984a542ec",
  measurementId: "G-G1LTZ09TB3"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
