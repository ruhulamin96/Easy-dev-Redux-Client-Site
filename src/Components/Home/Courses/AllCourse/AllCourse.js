import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { allCourse } from "../../../../Redux/pythonSlice";
import DisplayData from "../../../DisplayData/DisplayData";

function AllCourse() {
    const allcourse = useSelector((state) => state.allData.allCourse);
    const Dispatch=useDispatch()
  useEffect(()=>{
      Dispatch(allCourse())
  },[])
  return (
    <div className="container-fluid">
      <div className=" row row-cols-1 row-cols-md-3 g-4">
        {allcourse.map((data) => (
          <DisplayData data={data} key={data._id}></DisplayData>
        ))}
      </div>
    </div>
  );
}

export default AllCourse;
