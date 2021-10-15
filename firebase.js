import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "", // ...
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const storage = firebase.storage();
