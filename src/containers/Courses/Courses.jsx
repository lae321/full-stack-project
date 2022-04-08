import React, { useState } from "react";
import "./Courses.scss";
import Course from "../../components/Course/Course";
// import coursesData from "../../data/courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import CourseModal from "../../components/CourseModal/CourseModal";

const Courses = (props) => {

  const {coursesData} = props;

  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;

  const [showDetails, setShowDetails] = useState(false);
  // const [activeObject, setActiveObject] = useState(null);

  // Put state in course

  const toggleCourseDetails = () => setShowDetails(!showDetails);

  // const getClass = index => {
  //   return index === activeObject?.id ? "active" : "inactive";
  // };


  const courseCards = coursesData.map((course, index) => {
    return (
      <Link to={"course/" + course.id} >
      <Course
        key={index}
        index={index}
        course={course}
        img={course.imgSrc}
        name={course.name}
        toggleCourseDetails={toggleCourseDetails}
        // setActiveObject={setActiveObject}
        // getClass={getClass}
      />
      </Link>
    );
  });

  // const courseModal = (course)

  // {
  //   /* {showDetails && (
  //         // Fetch course by id
  //         <CourseModal
  //           key={course.id}
  //           img={course.imgSrc}
  //           name={course.name}
  //           location={course.location}
  //           duration={course.duration}
  //           price={course.price}
  //           summary={course.summary}
  //           toggleCourseDetails={toggleCourseDetails}
  //         />
  //       )} */
  // }

  // const courseModal = coursesData.filter()

  return (
    <div className="coursesOuterContainer">
      <h2>{bookIcon} Courses...</h2>
      <div className="coursesInnerContainer">{courseCards}</div>
    </div>
  );
};

export default Courses;
