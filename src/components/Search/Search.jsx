import "./Search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Search = () => {
  const logoIcon = <FontAwesomeIcon className="searchText" icon={faMagnifyingGlass} />
  return (
    <div className="searchContainer">
      
      <h2 className="searchText">{logoIcon} Find your next course...</h2>
      <input className="searchInput" type="text" placeholder="Eg, Fly Fishing 101" />
    </div>
  );
};

export default Search;
