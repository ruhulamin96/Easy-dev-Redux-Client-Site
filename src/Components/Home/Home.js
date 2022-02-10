import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import Header from "../../Components/Home/Header/Header";
import Courses from "./Courses/Courses";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProfileInfo } from "../../Redux/authSlice";
import { useEffect } from "react";
import Services from "./Services/Services";
import Teachers from "./Teachers/Teachers";
import Review from "./Review/Review";


function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated) Dispatch(updateProfileInfo());
  }, []);

  return (
    <div>
     
      <Header></Header>
      <Services></Services>
      <Courses></Courses>
      <Teachers></Teachers>
     {/* <Review></Review> */}
    </div>
  );
}

export default Home;
