import React from "react";
import footer from "../../../images/footer.jpg";
import "./Footer.css";
function Footer() {
  
  return (
    <div>
      <div className="container-fluid mt-5 ">
        
        <div className="row m-5 d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <h2 className="fw-bold">Company</h2>
            <p href="">About Company</p>
            <p href="">Feature Course</p>
            <p href="">Careers</p>
            <p href="">Contact Us</p>
          </div>
          <div className="col-md-4">
          <h2 className="fw-bold">Hot Links</h2>
            <p href="">Student Support</p>
            <p href="">Course Policy</p>
            <p href="">Register Activation Key</p>
            <p href="">System Requirements</p>
          </div>
          <div className="col-md-4">
          <h2 className="fw-bold">Courses</h2>
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
