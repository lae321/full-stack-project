import React, { useState } from "react";
import "./Courses.scss";
import Course from "../../components/Course/Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Courses = props => {
  const { coursesData } = props;

  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;

  const [showDetails, setShowDetails] = useState(false);

  // Put state in course

  const toggleCourseDetails = () => setShowDetails(!showDetails);

  const courseCards = coursesData.map((course, index) => {
    return (
      <Link to={"course/" + course.id}>
        <Course
          key={index}
          index={index}
          course={course}
          img={course.imgSrc}
          name={course.name}
          toggleCourseDetails={toggleCourseDetails}
        />
      </Link>
    );
  });

  return (
    <div className="coursesOuterContainer">
      <h2>{bookIcon} Courses...</h2>
      <div className="coursesInnerContainer">{courseCards}</div>
    </div>
  );
};

export default Courses;
