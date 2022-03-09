import React from "react";
import Search from "../components/Search/Search";
import Courses from "./Courses/Courses";
import "./Main.scss";

const Main = () => {
  return (
    <div className="mainContainer">
      <Search />
      <Courses />
    </div>
  );
};

export default Main;
