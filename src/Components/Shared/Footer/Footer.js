import React from "react";
import footer from "../../../images/footer.jpg";
import "./Footer.css";
function Footer() {
  
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div  className="footer-container">
            <img  src={footer} alt="" />
            <div className="content">
              <div className=" w-50 mx-auto">
              <h1>Ready to Begin?</h1>
              <p>
                Find subjects you're passionate about by browsing our online
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
        <div className="row">
          <div className="col-md-4">
            <h1>Company</h1>
            <p href="">About Company</p>
            <p href="">Feature Course</p>
            <p href="">Careers</p>
            <p href="">Contact Us</p>
          </div>
          <div className="col-md-4">
          <h1>Hot Links</h1>
            <p href="">Student Support</p>
            <p href="">Course Policy</p>
            <p href="">Register Activation Key</p>
            <p href="">System Requirements</p>
          </div>
          <div className="col-md-4">
          <h1>Courses</h1>
            <p href="">Wordpress Development</p>
            <p href="">Design and Photography</p>
            <p href="">Learn English</p>
            <p href="">Javascript Essential</p>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
