import React from 'react';
import PropTypes from 'prop-types';
import '../styles/searchResults.css';

function SearchResults(props) {
  const { searchResults } = props;

  if(!searchResults.length){
    return <p>No results</p>
  } else {
    return(
      <div className="searchResults__results">
        <p className="searchResults__header">Search Results:</p>
          { searchResults &&
            searchResults.map(function(image, i) {
              return(
                <a
                  href={image}
                  target="_blank"
                  rel='noreferrer'
                  key={i}
                >
                  <img className="searchResults__result" src={image} alt="" />
                </a>
              ) 
            }
          )}
      </div>
    );
  }
  
}

export default SearchResults;

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
}