import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfKydelfz0r1CaMUY082Go-IHCsd4aW64",
  authDomain: "sava-website-74608.firebaseapp.com",
  databaseURL: "https://sava-website-74608-default-rtdb.firebaseio.com",
  projectId: "sava-website-74608",
  storageBucket: "sava-website-74608.appspot.com",
  messagingSenderId: "681175771890",
  appId: "1:681175771890:web:f12efc7a298e984ed97e6b",
  measurementId: "G-C5MBQBGXS2",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const storage = firebase.storage();
