import React, { useState } from 'react';
import getImages from '../requests/getImages'
import '../styles/search.css';

function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  }

  return(
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          placeholder="Type something..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="search-form__button"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};


export default Search;