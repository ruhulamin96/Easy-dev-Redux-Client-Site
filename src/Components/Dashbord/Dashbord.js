import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { setActiveUser, updateProfileInfo } from "../../Redux/authSlice";
import { yourCourse } from "../../Redux/pythonSlice";
import "./Dashbord.css";

function Dashbord() {
  const userEmail = useSelector((state) => state.auth.userEmail);
  const isLoad = useSelector((state) => state.allData.isLoad);
  const Dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log(user);
        // স্টেটে ডাটা পাঠিইয়ে দিলাম
        Dispatch(
          setActiveUser({
            userName: user.displayName,
            userEmail: user.email,
          })
        );
      } else {
        // User is signed out
        // ...
        Dispatch(updateProfileInfo());
      }
    });
  }, []);
  const handleEnroll = () => {
    Dispatch(yourCourse(userEmail));
  };
  return (
    <div>
      <h1 className="text-center my-5 text-primary">
        Welcome To Your Dashboard
      </h1>
      <div className=" row d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-4">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="payment">Payment</Link>
            </li>
            <li>
              <Link to="enrolledcourse" onClick={handleEnroll}>
                Enrolled Course
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
