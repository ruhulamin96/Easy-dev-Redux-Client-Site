import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const isLoad = useSelector((state) => state.allData.isLoad);
  return (
    <div className="courses mt-5">
      <div className="left_side ">
        <nav>
          <li className="bottom-border">
            <Link to="allcourse">All Course</Link>
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
      <div className="right_side">
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
  );
}

export default Courses;
