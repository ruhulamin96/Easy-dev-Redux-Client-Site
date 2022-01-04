import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../../../Redux/pythonSlice";
import DisplayData from "../../../DisplayData/DisplayData";
// 
function Excell() {
  const excellData = useSelector((state) => state.allData.filterData);
const Dispatch=useDispatch()
  useEffect(() => {
     Dispatch(getData('excell'))
  }, []);
  return (
    <div className="container-fluid">
      <div className=" row row-cols-1 row-cols-md-3 g-4">
        {excellData.map((data) => (
          <DisplayData data={data} key={data._id}></DisplayData>
        ))}
      </div>
    </div>
  );
}

export default Excell;
