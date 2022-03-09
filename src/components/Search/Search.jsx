import "./Search.scss";

import React from "react";

const Search = () => {
  return (
  <div className="searchContainer">
    <h2 className="searchText">Find your next course...</h2>
    <input className="searchInput" type="text" placeholder="Eg, Fly Fishing 101" />
  </div>
  )
};

export default Search;
