import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setActiveUser } from "../../Redux/authSlice";
import "./Login.css";

function Login() {
  const Dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //state থেকে ডাটা নিতে হবে এভাবে
  const userName = useSelector((state) => state.auth.userName);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      /// লগিন ডাটা গুল রিডাক্স স্টেটে পাঠাইলাম
      Dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
      navigate(-1);
    });
  };
  return (
    <div className="design_login_button">
      <div>
        <button onClick={handleLogIn}>
          <span>
            <i class="fab fa-google"></i>
          </span>{" "}
          Login With Google
        </button>
      </div>
      <div>
        <ul>
          <li className="text-center">
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
