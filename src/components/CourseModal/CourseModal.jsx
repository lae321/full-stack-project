import React from "react";
import "./CourseModal.scss";
import blackCross from "../../assets/images/black-cross.png";

const CourseModal = props => {
  const { img, name, location, duration, price, summary, toggleCourseDetails } = props;

  return (
    <div className="modalBackground">
      <div className="modalCourseBox">
        <img
          className="blackCross"
          src={blackCross}
          alt="Close"
          onClick={toggleCourseDetails}
        />
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CourseModal;
