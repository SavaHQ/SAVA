import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCU_18qpwXEmYAVB_TBQKhM8kcFFAnjbHE",
  authDomain: "sava-react.firebaseapp.com",
  projectId: "sava-react",
  storageBucket: "sava-react.appspot.com",
  messagingSenderId: "239915742873",
  appId: "1:239915742873:web:3d803dd09e1ee2103d6a08",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const storage = firebase.storage();
