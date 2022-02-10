import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { setActiveUser, setUserLogOutState } from "../../../Redux/authSlice";
import logo from '../../../images/logo.png'
import initializeFirebase from "../../../Firebase/firebase.init";
import { useEffect } from "react";
import './NavBar.css'
initializeFirebase();
function NavBar() {
  const Dispatch = useDispatch();
  const auth = getAuth();
  //state থেকে ডাটা নিতে হবে এভাবে
  const userName = useSelector((state) => state.auth.userName);

  // const userName=useSelector(selectUserName)
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        Dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };
  //অবজারভার বা রিলোড দিলেও লগিন অবস্থায় থাকবে । লগ আউট হবে না।
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
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
      }
    });
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg mt-0 navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fs-3" href="#">
           <img src={logo} className="w-25" alt="" />
           
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav_design">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="dashbord">
                  Dashboard
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              {!userName ? (
                <Link to="login">
                  <button class="btn btn-outline-success" type="submit">
                    Login
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleLogOut}
                  class="btn btn-outline-success"
                  type="submit"
                >
                  Log out
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
