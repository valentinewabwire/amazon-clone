import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWefHWf_8aHeIIT472IS2f5zwl-j7M_CI",
  authDomain: "challenge-94bfd.firebaseapp.com",
  projectId: "challenge-94bfd",
  storageBucket: "challenge-94bfd.appspot.com",
  messagingSenderId: "841139615905",
  appId: "1:841139615905:web:4f1e970ee1a340688b98e0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
