import React from 'react';
import PropTypes from 'prop-types';

function SearchResults(searchResults) {
  return(
    <>
      <p>Search Results</p>
        {searchResults.map((image) => {
          return(
            <div>
              <img src={image} className="SearchResults__result" alt="" />
            </div>
          )
        })}
    </>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
}