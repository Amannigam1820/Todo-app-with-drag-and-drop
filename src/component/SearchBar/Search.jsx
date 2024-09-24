import React from "react";
import "./search.scss";

export const Search = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <label className="search-label" htmlFor="search-input">Search</label>
        <input type="text" id="search-input" placeholder="Search..." />
      </div>
      <div className="sort-by">
        <label className="sort-label" htmlFor="sort-by-select">Sort by</label>
        <select id="sort-by-select">
          <option value="recent">Recent</option>
          <option value="earlier">Earlier</option>
        </select>
      </div>
    </div>
  );
};
