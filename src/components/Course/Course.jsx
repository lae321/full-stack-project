import React from "react";
import "./Course.scss";

const Course = (props) => {
  const { img, name, location, duration, price, summary } = props;
  return (
  <div className="courseContainer">
    <div className="box">
      <div className="courseBox">
        <img src={img} alt={name} />
        <h4>{name}</h4>
      </div>

      <div className="backgroundBox"></div>
    </div>
    
  </div>
    );
};




export default Course;
