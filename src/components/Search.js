import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getImages from '../requests/getImages'
import '../styles/search.css';

function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
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

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  // searchResults: PropTypes.array.isRequired,
}