import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const isLoad = useSelector((state) => state.allData.isLoad);
  return (
    <div className="container">
      <h1
        className="text-center mb-4"
        style={{ fontWeight: "600", letterSpacing: "3px" }}
      >
        Our Top Courses
      </h1>
      <div className=" row courses">
        <div className="left_side mb-5 col-md-8">
          <nav>
            <li className="bottom-border ">
              <Link to="allcourse" className="active">
                All Courses
              </Link>
            </li>
            <li>
              <Link to="python">Python</Link>
            </li>
            <li>
              <Link to="excell">Excell</Link>
            </li>
            <li>
              <Link to="webdev">Web Development</Link>
            </li>
            <li>
              <Link to="javascript">Javascript</Link>
            </li>
          </nav>
        </div>
        <div className="right_side col-12">
          {isLoad ? (
            <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100">
              <div
                class="spinner-border"
                style={{ width: "4rem ", height: "4rem" }}
                role="status"
              ></div>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
