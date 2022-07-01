import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { setUser } from "./Store/reduxSlice/firebaseSlice";

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
export const firestore = firebase.firestore();

export const generateUserDocument = (user, role, additionalData) => {
  return async (dispatch) => {
    if (!user) return;
    const individualUserRecord = firestore.doc(`${role}/${user.uid}`);
    const combineDatabase = firestore.doc(`Authusers/${user.uid}`);
    const snapshot = await individualUserRecord.get();
    if (!snapshot.exists) {
      try {
        await individualUserRecord.set({
          ...additionalData,
        });
        await combineDatabase.set({
          ...additionalData,
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return dispatch(getUserDocument(user.uid));
  };
};

export const getUserDocument = (uid) => {
  return async (dispatch) => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`Authusers/${uid}`).get();
      setuserData(uid, userDocument);
      dispatch(
        setUser({
          uid,
          ...userDocument.data(),
        })
      );
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
};

export const removeSession = () => {
  localStorage.removeItem("user");
};

export const setuserData = (uid, userDocument) => {
  localStorage.setItem("user", JSON.stringify({ uid, ...userDocument.data() }));
};

export const getUserData = () => {
  const data = localStorage.getItem("user");
  return JSON.parse(data);
};
