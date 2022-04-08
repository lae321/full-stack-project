import React from "react";
import Search from "../components/Search/Search";
import Courses from "./Courses/Courses";
import "./Main.scss";

const Main = props => {
  const { coursesData } = props;

  return (
    <div className="mainContainer">
      <Search />
      <Courses coursesData={coursesData} />
    </div>
  );
};

export default Main;
