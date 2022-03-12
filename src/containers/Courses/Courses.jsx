import React from "react";
import "./Courses.scss";
import Course from "../../components/Course/Course";
import coursesData from "../../data/courses";

const Courses = () => {
  const courseCards = coursesData.map(course => {
    return (
      <Course
        img={course.imgSrc}
        name={course.name}
        location={course.location}
        duration={course.duration}
        price={course.price}
        summary={course.summary}
      />
    );
  });

  return (
    <div className="coursesOuterContainer">
      <h2>Courses...</h2>
      <div className="coursesInnerContainer">{courseCards}</div>
    </div>
  );
};

export default Courses;
