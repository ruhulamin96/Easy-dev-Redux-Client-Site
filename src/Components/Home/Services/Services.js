import React from "react";
import service1 from "../../../images/service1.jpg";
import service2 from "../../../images/service2.jpg";
import service3 from "../../../images/service3.jpg";
import service4 from "../../../images/service4.png";
import service5 from "../../../images/service5.png";
import service6 from "../../../images/service6.png";
function Services() {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center mb-5" style={{fontWeight:"600", letterSpacing:"3px"}}>Our Services</h1>
        <div className="row text-center">
          <div className="col-md-4 text-center">
            <img src={service1} className="w-25 rounded" alt="" />
            <div>
              <h3 className="fw-bold my-3">Expert Instructors </h3>
              <p>
                We rigorously screen and train our instructors ensure that the
                best quality lessons.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={service2} className="w-25 rounded" alt="" />
            <div>
              <h3 className="fw-bold my-3">Lifetime Access</h3>
              <p>
                We rigorously screen and train our instructors ensure that the
                best quality lessons.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={service3} className="w-25 rounded" alt="" />
            <div>
              <h3 className="fw-bold my-3">Learn Anywhere</h3>
              <p>
                We rigorously screen and train our instructors ensure that the
                best quality lessons.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={service4}
              style={{ width: "70px", margin: "20px" }}
              alt=""
            />
            <h3>2505 Courses</h3>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={service5}
              style={{ width: "70px", margin: "20px" }}
              alt=""
            />
            <h3>32052 Students</h3>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={service6}
              style={{ width: "70px", margin: "20px" }}
              alt=""
            />
            <h3>459 Teachers</h3>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button class="button-66 my-5" role="button">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
