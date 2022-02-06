import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Python from "./Components/Home/Courses/Python/Python";
import Excell from "./Components/Home/Courses/Excell/Excell";
import WebDev from "./Components/Home/Courses/WebDev/WebDev";
import Javascript from "./Components/Home/Courses/Javascript/Javascript";
import Enroll from "./Components/Home/Enroll/Enroll";
import Dashbord from "./Components/Dashbord/Dashbord";
import Payment from "./Components/Dashbord/Payment/Payment";
import EnrolledCourse from "./Components/Dashbord/EnrolledCourse/EnrolledCourse";
import AllCourse from "./Components/Home/Courses/AllCourse/AllCourse";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NavBar from "./Components/Shared/NavBar/NavBar";
import Footer from "./Components/Shared/Footer/Footer";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<AllCourse></AllCourse>}></Route>
          <Route path="allcourse" element={<AllCourse></AllCourse>}></Route>
          <Route path="python" element={<Python></Python>}></Route>
          <Route path="excell" element={<Excell></Excell>}></Route>
          <Route path="webdev" element={<WebDev></WebDev>}></Route>
          <Route path="javascript" element={<Javascript></Javascript>}></Route>
        </Route>
        <Route
          path="enroll/:id"
          element={
            <>
              <PrivateRoute>
                <Enroll></Enroll>
              </PrivateRoute>
            </>
          }
        ></Route>
        <Route
          path="dashbord"
          element={
            <>
              <PrivateRoute>
                <Dashbord></Dashbord>
              </PrivateRoute>
            </>
          }
        >
          <Route path="payment" element={<Payment></Payment>}></Route>
          <Route
            path="enrolledcourse"
            element={<EnrolledCourse></EnrolledCourse>}
          ></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
