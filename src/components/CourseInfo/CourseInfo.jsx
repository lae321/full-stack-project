import React, { useState, useEffect } from "react";
import "./CourseInfo.scss";
import { useParams, Link } from "react-router-dom";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const getCourse = courseId => {
    fetch("https://wise-obelisk-343711.nw.r.appspot.com/course/" + courseId)
      .then(res => res.json())
      .then(json => setCourse(json))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCourse(courseId);
  }, [courseId]);

  return (
    <div className="courseInfoContainer">
      <div className="courseInfo">
        <img className="courseInfo__img" src={course.imgSrc} alt={course.name} />
        <h2 className="courseInfo__name">{course.name}</h2>
        <div className="courseInfo__info">
          <div className="courseInfo__split">
            <h3 className="courseInfo__header">Location:</h3>
            <h4 className="courseInfo__content">{course.location}</h4>
          </div>
          <div className="courseInfo__split">
            <h3 className="courseInfo__header">Price:</h3>
            <h4 className="courseInfo__content">{course.price}</h4>
          </div>
          <div className="courseInfo__split">
            <h3 className="courseInfo__header">Duration:</h3>
            <h4 className="courseInfo__content">{course.duration}</h4>
          </div>
          <div className="courseInfo__split">
            <h3 className="courseInfo__header">Description:</h3>
            <h4 className="courseInfo__content">{course.summary}</h4>
          </div>
        </div>
      </div>

      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default CourseInfo;
