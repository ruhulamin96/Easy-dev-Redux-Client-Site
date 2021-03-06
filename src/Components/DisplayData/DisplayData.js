import React from "react";
import { useSelector } from "react-redux";
import StarRatings from 'react-star-ratings'
import { Link } from "react-router-dom";
import "./DisplayData.css";
function DisplayData(props) {
  const { rating, desc, img, title, price, _id } = props.data;
 
  return (
    <div class="col">
      <div class="card border-0 h-100 img-hover-zoom">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">{title}</h5>
          <p class="card-text">{desc.slice(0, 100)}</p>
          <div style={{ marginTop: "auto" }}>
           <div style={{display:"flex", justifyContent:"space-between"}}>
           <h4 className="fw-bold">Price: ${price} </h4>
            <StarRatings
            rating={3}
            starRatedColor="#F7C600"
            numberOfStars={4}
            name='rating'
            starDimension="22px"
            ></StarRatings>
           </div>
            <Link to={`/enroll/${_id}`}>
              <button className="button-enroll"> Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
