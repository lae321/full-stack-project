import React from "react";
// import CourseModal from "../CourseModal/CourseModal";
import "./Course.scss";

const Course = props => {
  const { img, name, toggleCourseDetails, course, setActiveObject } = props;

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
        <div
          className={"courseBox " + colorPicker() + " "}
          onClick={() => {
            setActiveObject(course);
            toggleCourseDetails(true);
          }}
        >
          <img className="courseImg" src={img} alt={name} />
          <h4 className="courseName">{name}</h4>
        </div>

        <div className="backgroundBox"></div>
      </div>
        {/* {toggleCourseDetails ? <CourseModal object = {activeObject} /> : null} */}
    </div>
  );
};

export default Course;
