import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EnrollData, enrolledCourse } from "../../../Redux/pythonSlice";
import "./Enroll.css";

function Enroll() {
  const enrollData = useSelector((state) => state.allData.enrollData);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const Dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    Dispatch(EnrollData(id));
  }, []);
  return (
    <div>
      {/* <NavBar></NavBar> */}
    <div className="container enroll_container">
      <div className="row enroll_style ">
        <div className="col-md-6">
          <h3>{enrollData[0]?.title}</h3>
          <h5>{enrollData[0]?.desc}</h5>
        </div>
        <div className="col-md-4 text-center ">
          <img src={enrollData[0]?.img} alt="" />
          <div className="mt-5">
            <h3 className="fw-bold">Price: ${enrollData[0]?.price}</h3>
            <button
              onClick={() => {
                Dispatch(
                  enrolledCourse({
                    title: enrollData[0].title,
                    price: enrollData[0].price,
                    userEmail,
                  })
                ).then(() => {
                  navigate(-1);
                });
              }}
             
            >
              Confirm your order
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Enroll;
