import { combineReducers } from "redux";
import firebaseSlice from "./firebaseSlice";

const rootReducer = combineReducers({
  firebase: firebaseSlice,
});

export default rootReducer;
