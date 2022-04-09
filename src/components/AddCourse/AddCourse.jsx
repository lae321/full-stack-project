import React, { useState } from "react";
import "./AddCourse.scss";

const AddCourse = props => {
  const { toggleAddCourse } = props;

  const [course, setCourse] = useState({
    name: "",
    location: "",
    price: "",
    duration: "",
    summary: "",
    imgSrc: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://wise-obelisk-343711.nw.r.appspot.com/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course), // convert sent data to JSON
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
    e.target.reset();
  };

  return (
    <div className="addCourseBackground">
      <div className="addCourseForm">
        <h2>Add a New Course</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course name"
            onInput={e => setCourse({ ...course, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            onInput={e => setCourse({ ...course, location: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Price"
            onInput={e => setCourse({ ...course, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Duration"
            onInput={e => setCourse({ ...course, duration: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Course summary"
            onInput={e => setCourse({ ...course, summary: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            onInput={e => setCourse({ ...course, imgSrc: e.target.value })}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
          <button type="reset" className="btn" onClick={toggleAddCourse}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
