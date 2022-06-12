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
        {/* console.log(searchResults) */}
          { searchResults &&
            searchResults.map(function(image, i) {
              return(
                <div>
                  <img className="searchResults__result" key={i} src={image} alt="" />
                </div>
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