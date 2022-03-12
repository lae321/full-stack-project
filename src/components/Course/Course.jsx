import React from "react";
import "./Course.scss";

const Course = props => {
  const { img, name, location, duration, price, summary } = props;

  const colorPicker = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return "courseOrange";
      case 1:
        return "courseBlue";
      case 2:
        return "coursePink";
      default:
        return "courseOrange";
    }
  };

  return (
    <div className="courseContainer">
      <div className="box">
        <div className={"courseBox " + colorPicker()}>
          <img src={img} alt={name} />
          <h4>{name}</h4>
        </div>

        <div className="backgroundBox"></div>
      </div>
    </div>
  );
};

export default Course;
