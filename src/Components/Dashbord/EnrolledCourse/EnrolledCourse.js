
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './EnrolledCourse.css'
import {
  deleteCourse,
  deleteEnrollment,
 
} from "../../../Redux/pythonSlice";

function EnrolledCourse() {
  const Dispatch = useDispatch();
  let course = useSelector((state) => state.allData.yourCourse);
  const cancelEnrollment = (id) => {
    if (window.confirm("Do You Want To Delete Course")) {
      Dispatch(deleteEnrollment(`${id}`));
      Dispatch(deleteCourse(`${id}`));
    }
  };
  return (
    <div>
      <table style={{ width: "100%", fontSize: "1.2rem" }}>
       { course.length?<tr className="my-5">
          <th>Course Title</th>
          <th>Price</th>
          <th>Course Status</th>
        </tr>:<h3>Opps!! Again, Click Enroll Course</h3>}

        {course?.map((data) => (
          <>
            <tr>
              <td>{data.title}</td>
              <td style={{padding:"0 1rem"}}>${data.price}</td>
              <td >
                <button className="cancell-button"
                  onClick={() => cancelEnrollment(data._id)}
                  
                >
                  Cancel Enrollment
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default EnrolledCourse;
