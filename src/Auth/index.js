import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getUserData } from "../firebase";
import { setUser } from "../Store/reduxSlice/firebaseSlice";

function ProtectedRoute({ children, type, ...rest }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.firebase.user);

  useEffect(() => {
    const localData = getUserData();
    console.log(user);
    if (localData) {
      dispatch(setUser(localData));
    }
  }, []);

  if (type === "private" && !user) return <Redirect to="/login" />;

  if (type === "guest" && user) return <Redirect to="/home" />;

  return <Route {...rest} component={(props) => children} />;
}

export default ProtectedRoute;
