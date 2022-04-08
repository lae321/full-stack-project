import { useState, useEffect } from "react";
import "./App.scss";

import Nav from "./components/Nav/Nav";
import AddCourse from "./components/AddCourse/AddCourse";
import Main from "./containers/Main";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleAddCourse = () => setShowAddCourse(!showAddCourse);

  const coursesData = () => {
    fetch("https://wise-obelisk-343711.nw.r.appspot.com/courses")
      .then(res => res.json())
      .then(json => setCourses(json))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    coursesData();
  },[]);

  return (
    <Router>
    <div>
      <Nav toggleAddCourse={toggleAddCourse}/>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/" element={<Main coursesData={courses}/>} />
        <Route path="/course/:courseId" element={<CourseInfo />} />
      </Routes>
      {showAddCourse && <AddCourse toggleAddCourse={toggleAddCourse}/>}
    </div>
    </Router>
  );
}

export default App;
