import React, { useState } from 'react';
import '../styles/app.css';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';

const App = () => {
const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="app">
      <img
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      className="app-logo"
      alt="nasaLogo" />
      <Search 
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
