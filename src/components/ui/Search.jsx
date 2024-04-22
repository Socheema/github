import React from "react";
import { useGlobalContext } from "../../context";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { handleChange, handleSubmit, text } = useGlobalContext();

  console.log(text);

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          className="form-input"
          value={text}
        />
        <button className="btn" type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
};

export default Search;
