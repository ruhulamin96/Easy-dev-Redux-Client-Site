import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../../../Redux/pythonSlice";
import DisplayData from "../../../DisplayData/DisplayData";

function WebDev() {
  const webData = useSelector((state) => state.allData.filterData);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getData("web"));
  }, []);
  return (
    <div className="container-fluid">
      <div className=" row row-cols-1 row-cols-md-3 g-4">
        {webData.map((data) => (
          <DisplayData data={data} key={data._id}></DisplayData>
        ))}
      </div>
    </div>
  );
}

export default WebDev;
