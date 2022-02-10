import React from "react";
import teacher1 from "../../../images/teacher1.png";
import teacher2 from "../../../images/teacher2.png";
import teacher3 from "../../../images/teacher3.png";
import teacher4 from "../../../images/teacher4.png";
function Teachers() {
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row text-center">
          <h1 style={{ letterSpacing: "3px" }} className="mb-5 fw-bold">
            World Class Teachers
          </h1>
          <div className="col-md-3 ">
            <img className="w-50" src={teacher4} alt="" />
            <h4 className="mt-3">John Martain</h4>
            <p className="mt-3">
              These goals will assist them in achieving their ultimate future
              goal.
            </p>
          </div>
          <div className="col-md-3">
            <img className="w-50" src={teacher1} alt="" />
            <h4 className="mt-3">Jquals Farnendes</h4>
            <p className="mt-3">
              These goals will assist them in achieving their ultimate future
              goal.
            </p>
          </div>
          <div className="col-md-3">
            <img className="w-50" src={teacher2} alt="" />
            <h4 className="mt-3">Moslain Turned</h4>
            <p className="mt-3">
              These goals will assist them in achieving their ultimate future
              goal.
            </p>
          </div>
          <div className="col-md-3">
            <img className="w-50" src={teacher3} alt="" />
            <h4 className="mt-3">Mack Lvaid</h4>
            <p className="mt-3">
              These goals will assist them in achieving their ultimate future
              goal.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div  className="footer-container">
            {/* <img  src={footer} alt="" /> */}
            <div className="content">
              <div className="  mx-auto">
              <h1>Ready to Begin?</h1>
              <p>
                Find subjects you're passionate about by browsing our online
                course categories. Start learning with top courses Built With
                Industry Experts.
                course categories. Start learning with top courses Built With
                Industry Experts.
              </p>
              </div>
              <div className="footer-button">
                
                <button class="button-66" role="button">
                  Start Learning
                </button>
                <button class="button-66" role="button">
                  Start Teaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
