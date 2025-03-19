import React from "react";

const Search = ({ searchTerm, setSearchTeam }) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search through our library of movies"
          value={searchTerm}
          onChange={(e) => setSearchTeam(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
