import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1egXz1TcXje1CXZr12315KmKwPhhFy88",
  authDomain: "tinder-clone-d9a70.firebaseapp.com",
  projectId: "tinder-clone-d9a70",
  storageBucket: "tinder-clone-d9a70.appspot.com",
  messagingSenderId: "22866630757",
  appId: "1:22866630757:web:de75be89df96780932ce8c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
// const auth = firebase.auth();

// export { database, auth };
export default database;
