import React, { useState } from "react";

const Search = () => {

  //  console.log(text);

  return (
    <header className="search-container">
      <form > 
        <input
          type="text"
          placeholder="Type favorite meal"
          className="form-input"
          />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="button"
        >
          Suprise me
        </button>
      </form>
    </header>
  );
};

export default Search;
