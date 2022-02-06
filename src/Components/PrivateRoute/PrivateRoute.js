import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setActiveUser, updateProfileInfo } from "../../Redux/authSlice";

function PrivateRoute({ children }) {
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticated);
  let isLoad = useSelector((state) => state.auth.isLoad);
  let location = useLocation();
  // if(isAuthenticate===false){
  //   isLoad=false;
  // }
  const Dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
         // স্টেটে ডাটা পাঠিইয়ে দিলাম 
         Dispatch(setActiveUser({
            userName:user.displayName,
            userEmail: user.email,
            
          }))
         
        } else {
          // User is signed out
          // ...
        }
      });
  }, []);
  if (isLoad) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100">
        <div
          class="spinner-border"
          style={{ width: "4rem ", height: "4rem" }}
          role="status"
        ></div>
      </div>
    );
  }
  return isAuthenticate ? children : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
