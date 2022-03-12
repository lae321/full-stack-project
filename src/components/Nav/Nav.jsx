import React from "react";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <div className="navContainer">
      <FontAwesomeIcon className="navIcon" icon={faGraduationCap} />
      <h3 className="navLogo">courseology</h3>
    </div>
  );
};

export default Nav;
