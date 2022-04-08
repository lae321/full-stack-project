import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {

  const {toggleAddCourse}  = props;

  return (
    <div className="navContainer">
      <Link to="/">
      <div className="navContainer__left">
        <FontAwesomeIcon className="navIcon" icon={faGraduationCap} />
        <h3 className="navLogo">courseology</h3>
      </div>
      </Link>
      <div className="navContainer__right" onClick={toggleAddCourse}>
        <FontAwesomeIcon className="navIcon" icon={faPlus} /> 
        <h4 className="addCourse">Add course</h4>
      </div>
    </div>
  );
};

export default Nav;
