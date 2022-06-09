import React, { useState } from 'react';
import getImages from '../requests/getImages'
import '../styles/search.css';

function Search() {
  const [value, setValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  }

  return(
    <>
      <form className="search-form">
        <input
          type="text"
          className="search-form__input"
          placeholder="Type something..."
          onChange={(e) => setValue(e.target.value)}
          onSubmit={handleSubmit}
          value={value}
        />
        <button
          className="search-form__button"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;